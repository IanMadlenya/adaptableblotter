
import { IAdaptableBlotter } from '../Interface/IAdaptableBlotter';
import { IAuditLogEntry } from '../Interface/IAuditLogEntry';
import { AuditLogTrigger } from '../Enums';
import { IDataChangedEvent } from './Interface/IAuditService';
// import * as SockJS from 'sockjs-client'

export class AuditLogService {
    private auditLogQueue: Array<IAuditLogEntry>
    private canSendLog: boolean = true
    private numberOfMissedPing: number = 0

    constructor(private blotter: IAdaptableBlotter) {
        this.auditLogQueue = []
        if (blotter.BlotterOptions.enableAuditLog) {
            this.ping()
            setInterval(() => this.ping(), 60000)
            setInterval(() => this.flushAuditQueue(), 1000)
        }
    }

    public AddEditCellAuditLogBatch(dataChangedEvents: IDataChangedEvent[]) {
        dataChangedEvents.forEach(dce => { this.AddEditCellAuditLog(dce) })
    }

    public AddEditCellAuditLog(dataChangedEvent: IDataChangedEvent) {
        if (typeof dataChangedEvent.OldValue == "string" && typeof dataChangedEvent.NewValue == "string") {
            this.auditLogQueue.push({
                adaptableblotter_auditlog_trigger: AuditLogTrigger.CellEdit,
                adaptableblotter_client_timestamp: new Date(),
                adaptableblotter_username: this.blotter.BlotterOptions.userName,
                adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
                adaptableblotter_editcell: {
                    primarykey: String(dataChangedEvent.IdentifierValue),
                    primarykey_column_id: this.blotter.BlotterOptions.primaryKey,
                    column_id: dataChangedEvent.ColumnId,
                    old_value_string: dataChangedEvent.OldValue,
                    new_value_string: dataChangedEvent.NewValue
                }
            });
        }
        else if (typeof dataChangedEvent.OldValue == "number" && typeof dataChangedEvent.NewValue == "number") {
            this.auditLogQueue.push({
                adaptableblotter_auditlog_trigger: AuditLogTrigger.CellEdit,
                adaptableblotter_client_timestamp: new Date(),
                adaptableblotter_username: this.blotter.BlotterOptions.userName,
                adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
                adaptableblotter_editcell: {
                    primarykey: String(dataChangedEvent.IdentifierValue),
                    primarykey_column_id: this.blotter.BlotterOptions.primaryKey,
                    column_id: dataChangedEvent.ColumnId,
                    old_value_string: String(dataChangedEvent.OldValue),
                    new_value_string: String(dataChangedEvent.NewValue),
                    old_value_numeric: dataChangedEvent.OldValue,
                    new_value_numeric: dataChangedEvent.NewValue
                }
            });
        }
        else if (typeof dataChangedEvent.OldValue == "boolean" && typeof dataChangedEvent.NewValue == "boolean") {
            this.auditLogQueue.push({
                adaptableblotter_auditlog_trigger: AuditLogTrigger.CellEdit,
                adaptableblotter_client_timestamp: new Date(),
                adaptableblotter_username: this.blotter.BlotterOptions.userName,
                adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
                adaptableblotter_editcell: {
                    primarykey: String(dataChangedEvent.IdentifierValue),
                    primarykey_column_id: this.blotter.BlotterOptions.primaryKey,
                    column_id: dataChangedEvent.ColumnId,
                    old_value_string: String(dataChangedEvent.OldValue),
                    new_value_string: String(dataChangedEvent.NewValue),
                    old_value_boolean: dataChangedEvent.OldValue,
                    new_value_boolean: dataChangedEvent.NewValue
                }
            });
        }
        else if (dataChangedEvent.OldValue instanceof Date && dataChangedEvent.NewValue instanceof Date) {
            this.auditLogQueue.push({
                adaptableblotter_auditlog_trigger: AuditLogTrigger.CellEdit,
                adaptableblotter_client_timestamp: new Date(),
                adaptableblotter_username: this.blotter.BlotterOptions.userName,
                adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
                adaptableblotter_editcell: {
                    primarykey: String(dataChangedEvent.IdentifierValue),
                    primarykey_column_id: this.blotter.BlotterOptions.primaryKey,
                    column_id: dataChangedEvent.ColumnId,
                    old_value_string: String(dataChangedEvent.OldValue),
                    new_value_string: String(dataChangedEvent.NewValue),
                    old_value_date: dataChangedEvent.OldValue,
                    new_value_date: dataChangedEvent.NewValue
                }
            });
        }
        else {
            this.auditLogQueue.push({
                adaptableblotter_auditlog_trigger: AuditLogTrigger.CellEdit,
                adaptableblotter_client_timestamp: new Date(),
                adaptableblotter_username: this.blotter.BlotterOptions.userName,
                adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
                adaptableblotter_editcell: {
                    primarykey: String(dataChangedEvent.IdentifierValue),
                    primarykey_column_id: this.blotter.BlotterOptions.primaryKey,
                    column_id: dataChangedEvent.ColumnId,
                    old_value_string: String(dataChangedEvent.OldValue),
                    new_value_string: String(dataChangedEvent.NewValue)
                }
            });
        }
    }

    public AddStateChangeAuditLog(stateChanges: deepDiff.IDiff[], actionType: string) {
        this.auditLogQueue.push({
            adaptableblotter_auditlog_trigger: AuditLogTrigger.StateChange,
            adaptableblotter_client_timestamp: new Date(),
            adaptableblotter_username: this.blotter.BlotterOptions.userName,
            adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
            //we want to loose the type since you cannot have same field name with different types in logstash. So log it as a string...
            //it makes sense anyway
            adaptableblotter_state_change: this.convertToText(stateChanges),
            adaptableblotter_state_change_action: actionType
        });
    }

    public AddAdaptableBlotterFunctionLog(functionName: string, action: string, info: string, data?: any) {
        this.auditLogQueue.push({
            adaptableblotter_auditlog_trigger: AuditLogTrigger.AdaptableBlotterFunction,
            adaptableblotter_client_timestamp: new Date(),
            adaptableblotter_username: this.blotter.BlotterOptions.userName,
            adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
            adaptableblotter_function: {
                name: functionName,
                action: action,
                info: info,
                //not sure if it's best to leave undefined or null.... I think null is better
                //same as adaptableblotter_state_change we log the obj as a string
                data: data ? this.convertToText(data) : null
            }
        });
    }

    private ping() {
        let pingMessage: IAuditLogEntry = {
            adaptableblotter_auditlog_trigger: AuditLogTrigger.Ping,
            adaptableblotter_client_timestamp: new Date(),
            adaptableblotter_username: this.blotter.BlotterOptions.userName,
            adaptableblotter_id: this.blotter.BlotterOptions.blotterId,
            adaptableblotter_number_of_missed_ping: this.numberOfMissedPing
        }
        let xhr = new XMLHttpRequest();
        xhr.onerror = (ev: ErrorEvent) => { console.log("error sending ping: " + ev.message); this.SetCanSendLog(false); }
        xhr.ontimeout = (ev: ProgressEvent) => { console.log("timeout sending ping"); this.SetCanSendLog(false); }
        xhr.onload = (ev: ProgressEvent) => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    this.SetCanSendLog(true);
                } else {
                    console.error("error sending ping: " + xhr.statusText);
                    this.SetCanSendLog(false);
                }

            }
        }
        var url = "/auditlog";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(pingMessage));
    }

    private SetCanSendLog(enable: boolean) {
        if (enable) {
            this.canSendLog = true;
            this.numberOfMissedPing = 0
        }
        else {
            this.canSendLog = false;
            this.numberOfMissedPing++;
        }
    }

    private flushAuditQueue() {
        //if we cannot send logs then we just clear the thing
        if (!this.canSendLog) {
            this.auditLogQueue.length = 0
        }

        let obj = this.auditLogQueue.shift()
        // while (obj && this.sockJS.readyState == SockJS.OPEN) {
        while (obj) {
            let xhr = new XMLHttpRequest();
            xhr.onerror = (ev: ErrorEvent) => console.log("error sending AuditLog: " + ev.message)
            xhr.ontimeout = (ev: ProgressEvent) => console.log("timeout sending AuditLog")
            xhr.onload = (ev: ProgressEvent) => {
                if (xhr.readyState == 4) {
                    if (xhr.status != 200) {
                        console.error("error sending AuditLog: " + xhr.statusText);
                    }
                }
            }
            var url = "/auditlog";
            //we make the request async
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.send(JSON.stringify(obj));
            obj = this.auditLogQueue.shift()
        }
    }

    private convertToText(obj: any): string {
        let stringArray: string[] = [];

        if (obj == undefined) {
            return String(obj);
        } else if (Array.isArray(obj)) {
            for (let prop in obj) {
                stringArray.push(this.convertToText(obj[prop]));
            }
            return "[" + stringArray.join(",") + "]";
        }
        if (typeof (obj) == "object") {
            for (let prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    stringArray.push(prop + ": " + this.convertToText(obj[prop]));
                }
            }
            return "{" + stringArray.join(",") + "}";
            //is function
        } else if (typeof (obj) == "function") {
            stringArray.push(obj.toString())

        } else {
            stringArray.push(String(obj))
        }

        return stringArray.join(",");
    }
}