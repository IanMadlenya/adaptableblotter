(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.grid = [
'.hypergrid-container {',
'	position: relative;',
'	height: 500px;',
'}',
'.hypergrid-textfield {',
'	position: absolute;',
'	font-size: 12px;',
'	color: black;',
'	background-color: ivory;',
'	box-sizing: border-box;',
'	margin: 0;',
'	padding: 0 5px;',
'	border: 0; /*border: 1px solid #777;*/',
'	outline: 0;',
'}',
'',
'div.hypergrid-combobox {',
'	position: absolute;',
'	display: none;',
'	outline: 0;',
'	padding: 0;',
'	border: 0; /*border: 1px solid #777;*/',
'	box-sizing: border-box;',
'	background-color: ivory;',
'	color: black;',
'	font-size: 12px;',
'}',
'div.hypergrid-combobox > input {',
'	position: absolute;',
'	margin-top: -1px;',
'	height: 100%;',
'	right: 20px;',
'	left: 0;',
'	width: 100%;',
'	outline: 0;',
'	padding: 0;',
'',
'	border: 5px solid transparent;',
'	border-right-width: 20px;',
'	border-bottom-width: 0;',
'	border-top-width: 0;',
'	box-sizing: border-box;',
'',
'	font-size: 12px;',
'	color: black;',
'	background-color: transparent;',
'}',
'div.hypergrid-combobox > span {',
'	position: absolute;',
'	box-sizing: border-box;',
'	width: 20px;',
'	height: 100%;',
'	right: 0;',
'	text-align: center;',
'	font-size: 1.5em;',
'	line-height: 1em;',
'}',
'div.hypergrid-combobox span[title] {',
'	color: lightgrey;',
'	cursor: pointer;',
'	margin-top: -2px;',
'}',
'div.hypergrid-combobox span[title]:hover {',
'	color: grey;',
'}',
'div.hypergrid-combobox span[title]:active, div.hypergrid-combobox span[title].active {',
'	color: blue;',
'}',
'div.hypergrid-combobox > span {',
'	margin-top: -1px;',
'}',
'div.hypergrid-combobox > span::after {',
'	content: \'\\25BE\';',
'	font-size: 20px;',
'}',
'div.hypergrid-combobox > div {',
'	position: absolute;',
'	left: -1px;',
'	right: -1px;',
'	top: 14px;',
'	height: 0;',
'	transition: height .25s;',
'	visibility: hidden;',
'	/*box-shadow: white 0 0 1px 1px;*/',
'	box-sizing: border-box;',
'	border: 1px solid #777;',
'	background-color: ivory;',
'	-webkit-user-select: none;',
'	-moz-user-select: none;',
'	-ms-user-select: none;',
'}',
'div.hypergrid-combobox > div > div {',
'	position: absolute;',
'	height: 13px;',
'	width: 100%;',
'	text-align: center;',
'}',
'div.hypergrid-combobox > div span[title] {',
'	font-weight: bold;',
'	font-size: 12px;',
'	font-family: verdana, geneva, sans-serif;',
'	margin-left: 6px;',
'	margin-right: 6px;',
'}',
'div.hypergrid-combobox > div span:not([title]) {',
'	font-style: italic;',
'	padding-top: 1px;',
'}',
'div.hypergrid-combobox > div select {',
'	position: absolute;',
'	padding-top: 2px;',
'	border: 0;',
'	outline: 0;',
'	border-top: 1px solid #777;',
'	width: 100%;',
'	top: 15px;',
'	bottom: 0;',
'	left: 0;',
'	right: 0;',
'	background-color: transparent;',
'	font-family: sans-serif;',
'	font-weight: bold;',
'	font-size: 9px;',
'}',
'div.hypergrid-combobox > div select option:hover {',
'	background-color: #777;',
'	color: ivory;',
'}'
].join('\n');

exports['list-dragon-addendum'] = [
'div.dragon-list, li.dragon-pop {',
'	font-family: Roboto, sans-serif;',
'	text-transform: capitalize; }',
'div.dragon-list {',
'	position: absolute;',
'	top: 4%;',
'	left: 4%;',
'	height: 92%;',
'	width: 20%; }',
'div.dragon-list:nth-child(2) { left: 28%; }',
'div.dragon-list:nth-child(3) { left: 52%; }',
'div.dragon-list:nth-child(4) { left: 76%; }',
'div.dragon-list > div, div.dragon-list > ul > li, li.dragon-pop { line-height: 46px; }',
'div.dragon-list > ul { top: 46px; }',
'div.dragon-list > ul > li:not(:last-child)::before, li.dragon-pop::before {',
'	content: \'\\2b24\';',
'	color: #b6b6b6;',
'	font-size: 30px;',
'	margin: 8px 14px 8px 8px; }',
'li.dragon-pop { opacity:.8; }'
].join('\n');

},{}],2:[function(require,module,exports){
'use strict';

exports.CQL = [
'<li>',
'	<label title="${1}">',
'		<a type="button" class="filter-copy"></a>',
'		<div class="filter-tree-remove-button" title="delete conditional"></div>',
'		<strong>%{0}:</strong>',
'		<input name="${1}" class="filter-text-box ${3}" value="%{2}">',
'	</label>',
'	<div class="filter-tree-warn"></div>',
'</li>'
].join('\n');

exports.SQL = [
'<li>',
'	<label title="${1}">',
'		<a type="button" class="filter-copy"></a>',
'		<div class="filter-tree-remove-button" title="delete conditional"></div>',
'		<strong>%{0}:</strong>',
'		<textarea name="${1}" rows="1" class="filter-text-box ${3}">%{2}</textarea>',
'	</label>',
'	<div class="filter-tree-warn"></div>',
'</li>'
].join('\n');

exports.dialog = [
'<div id="hypergrid-dialog">',
'',
'	<style>',
'		#hypergrid-dialog {',
'			position: absolute;',
'			top: 0;',
'			left: 0;',
'			bottom: 0;',
'			right: 0;',
'			background-color: white;',
'			font: 10pt sans-serif;',
'			opacity: 0;',
'			transition: opacity 1s;',
'			box-shadow: rgba(0, 0, 0, 0.298039) 0px 19px 38px, rgba(0, 0, 0, 0.219608) 0px 15px 12px;',
'		}',
'		#hypergrid-dialog.hypergrid-dialog-visible {',
'			opacity: 1;',
'			transition: opacity 1s;',
'		}',
'',
'		#hypergrid-dialog .hypergrid-dialog-control-panel {',
'			position: absolute;',
'			top: 0px;',
'			right: 12px;',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-control-panel a {',
'			color: #999;',
'			font-size: 33px;',
'			transition: text-shadow .35s, color .35s;',
'			text-decoration: none;',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-close:after {',
'			content: \'\\D7\';',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-settings:after {',
'			font-family: Apple Symbols;',
'			content: \'\\2699\';',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-control-panel a:hover {',
'			color: black;',
'			text-shadow: 0 0 6px #337ab7;',
'			transition: text-shadow .35s, color .35s;',
'		}',
'		#hypergrid-dialog .hypergrid-dialog-control-panel a:active {',
'			color: #d00;',
'			transition: color 0s;',
'		}',
'	</style>',
'',
'	<span class="hypergrid-dialog-control-panel">',
'		<a class="hypergrid-dialog-settings" title="(There are no settings for Manage Filters at this time.)"></a>',
'		<a class="hypergrid-dialog-close"></a>',
'	</span>',
'',
'</div>'
].join('\n');

exports.filterTrees = [
'<style>',
'	#hypergrid-dialog > div {',
'		position: absolute;',
'		top: 0;',
'		left: 0;',
'		bottom: 0;',
'		right: 0;',
'	}',
'	#hypergrid-dialog > div:first-of-type {',
'		padding: 1em 1em 1em 0.5em;',
'		margin-left: 50%;',
'	}',
'	#hypergrid-dialog > div:last-of-type {',
'		padding: 1em 0.5em 1em 1em;',
'		margin-right: 50%;',
'	}',
'	#hypergrid-dialog > div > p:first-child {',
'		margin-top: 0;',
'	}',
'	#hypergrid-dialog > div > p > span:first-child {',
'		font-size: larger;',
'		letter-spacing: 2px;',
'		font-weight: bold;',
'		color: #666;',
'		margin-right: 1em;',
'	}',
'	#hypergrid-dialog input, #hypergrid-dialog textarea {',
'		outline: 0;',
'		line-height: initial;',
'	}',
'',
'	.tabz { z-index: 0 }',
'	.tabz > p:first-child, .tabz > section > p:first-child, .tabz > section > div > p:first-child { margin-top: 0 }',
'',
'	#hypergrid-dialog a.more-info { font-size: smaller; }',
'	#hypergrid-dialog a.more-info::after { content: \'(more info)\'; }',
'	#hypergrid-dialog a.more-info.hide-info { color: red; }',
'	#hypergrid-dialog a.more-info.hide-info::after { content: \'(hide info)\'; }',
'	#hypergrid-dialog div.more-info {',
'		border: 1px tan solid;',
'		border-radius: 8px;',
'		padding: 0 8px .2em;',
'		display: none;',
'		background-color: ivory;',
'		box-shadow: 3px 3px 5px #707070;',
'		margin-bottom: 1em;',
'	}',
'	#hypergrid-dialog div.more-info > p { margin: .5em 0; }',
'',
'	#hypergrid-dialog .tabz ul {',
'		padding-left: 1.5em;',
'		list-style-type: circle;',
'		font-weight: bold;',
'	}',
'	#hypergrid-dialog .tabz ul > li > ul {',
'		list-style-type: disc;',
'		font-weight: normal;',
'	}',
'	#hypergrid-dialog .tabz li {',
'		margin: .3em 0;',
'	}',
'	#hypergrid-dialog .tabz li > code {',
'		background: #e0e0e0;',
'		margin: 0 .1em;',
'		padding: 0 5px;',
'		border-radius: 4px;',
'	}',
'',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child ol {',
'		padding-left: 1.6em;',
'	}',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child ol > li > label {',
'		width: 100%;',
'		font-weight: normal;',
'		display: inline;',
'	}',
'	#hypergrid-dialog .tabz .filter-tree-warn {',
'		color: darkred;',
'		font-size: smaller;',
'		font-style: italic;',
'		line-height: initial;',
'	}',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > textarea,',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child textarea,',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > div:last-child input {',
'		display: block;',
'		position: relative;',
'		min-width: 100%;',
'		max-width: 100%;',
'		box-sizing: border-box;',
'		border: 1px solid black;',
'		padding: .4em .7em;',
'		font-family: monospace;',
'		font-size: 9pt;',
'		margin-top: 3px;',
'	}',
'	#hypergrid-dialog .tabz > section.filter-expression-syntax > textarea {',
'		height: 96%;',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy {',
'		display: block;',
'		float: right;',
'		font-size: smaller;',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy:before {',
'		content: \'(copy\';',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy:after {',
'		content: \')\';',
'	}',
'	#hypergrid-dialog .tabz a.filter-copy:active {',
'		color: red;',
'	}',
'</style>',
'',
'<div>',
'	<select id="add-column-filter-subexpression" style="float:right; margin-left:1em; margin-right:4em;">',
'		<option value="">New column filter&hellip;</option>',
'	</select>',
'',
'	<p>',
'		<span>Column Filters</span>',
'		<a class="more-info"></a>',
'	</p>',
'	<div class="more-info">',
'		<p>The table filter can be viewed in the Query Builder or as SQL WHERE clause syntax. Both interfaces manipulate the same underlying filter data structure.</p>',
'		<p>All column filters are AND&rsquo;d together. Each grid row is first qualified by the table filter and then successively qualified by each column filter subexpression.</p>',
'	</div>',
'',
'	<div class="tabz" id="columnFiltersPanel">',
'',
'		<header id="columnsQB" class="default-tab">',
'			Query Builder',
'		</header>',
'',
'		<section>',
'		</section>',
'',
'		<header id="columnsSQL" class="tabz-bg2">',
'			SQL',
'		</header>',
'',
'		<section class="filter-expression-syntax tabz-bg2">',
'			<div>',
'				<p>',
'					<span></span>',
'					<a type="button" class="filter-copy" title="The state of the column filters subtree expressed in SQL syntax (all the column filter subexpressions shown below AND&rsquo;d together).">',
'						all</a>',
'				</p>',
'				<ol></ol>',
'			</div>',
'		</section>',
'',
'		<header id="columnsCQL" class="tabz-bg1">',
'			CQL',
'		</header>',
'',
'		<section class="filter-expression-syntax tabz-bg1">',
'			<p>',
'				<em>',
'					<small>Column filter cells accept a simplified, compact, and intuitive syntax, which is however not as flexible or concise as SQL syntax or using the Query Builder.</small>',
'					<a class="more-info"></a>',
'				</em>',
'			</p>',
'			<div class="more-info">',
'				<ul>',
'					<li>',
'						Simple expressions',
'						<ul>',
'							<li>All simple expressions take the form <i>operator literal</i> or <i>operator identifier</i>. The (left side) column is always implied and is the same for all simple expressions in a compound expression. This is because column filters are always tied to a known column.</li>',
'',
'							<li>If the operator is an equals sign (=), it may be omitted.</li>',
'',
'							<li>Besides operators, no other punctuation is permitted, meaning that no quotation marks and no parentheses.</li>',
'',
'							<li>If a literal exactly matches a column name or alias, the operand is not taken literally and instead refers to the value in that column. (There are properties to control what constitutes such a match: Column name, alias, or either; and the case-sensitivity of the match.)</li>',
'',
'							<li>As literals are unquoted, any operator symbol or operator word (including logical operators for compound expressions) terminates a literal.</li>',
'',
'							<li>An important corollary to the above features is that operators may not appear in literals.</li>',
'						</ul>',
'					</li>',
'',
'					<li>',
'						Compound expressions',
'						<ul>',
'							<li>Compound expressions are formed by connecting simple expressions with the logical operators <code>AND</code>, <code>OR</code>, <code>NOR</code>, or <code>NAND</code> ("not and").</li>',
'',
'							<li>However, all logical operators used in a compound column filter expression must be homogeneous. You may not mix the above logical operators in a single column. (If you need to do this, create a table filter expression instead.)</li>',
'						</ul>',
'					</li>',
'',
'					<li>',
'						Hidden logic',
'						<ul>',
'							<li>If the column is also referenced in a table filter expression (on the left side of a simple expression), the column filter is flagged in its grid cell with a special star character. This is just a flag; it is not part of the syntax. <span style="color:red; font-style:italic">Not yet implemented.</span></li>',
'						</ul>',
'					</li>',
'				</ul>',
'			</div>',
'',
'			<div>',
'				<p><span></span></p>',
'				<ol></ol>',
'			</div>',
'		</section>',
'	</div>',
'</div>',
'',
'<div>',
'	<p>',
'		<span>Table Filter</span>',
'		<a class="more-info"></a>',
'	</p>',
'	<div class="more-info">',
'		<p>The table filter can be viewed in the Query Builder or as SQL WHERE clause syntax. Both interfaces manipulate the same underlying filter data structure.</p>',
'		<p>',
'			These filter subexpressions are both required (<code>AND</code>&rsquo;d together), resulting in a subset of <em>qualified rows</em> which have passed through both filters.',
'			It\'s called a <dfn>tree</dfn> because it contains both <dfn>branches</dfn> and <dfn>leaves</dfn>.',
'			The leaves represent <dfn>conditional expressions</dfn> (or simply <dfn>conditionals</dfn>).',
'			The branches, also known as <dfn>subtrees</dfn>, contain leaves and/or other branches and represent subexpressions that group conditionals together.',
'			Grouped conditionals are evaluated together, before conditionals outside the group.',
'		</p>',
'	</div>',
'',
'	<div class="tabz" id="tableFilterPanel">',
'		<header id="tableQB">',
'			Query Builder',
'		</header>',
'',
'		<section>',
'		</section>',
'',
'		<header id="tableSQL" class="tabz-bg2">',
'			SQL',
'		</header>',
'',
'		<section class="filter-expression-syntax tabz-bg2">',
'			<div>',
'				<p>',
'					SQL WHERE clause syntax with certain restrictions.',
'					<a class="more-info"></a>',
'				</p>',
'				<div class="more-info">',
'					<ul>',
'						<li>',
'							Simple expressions',
'							<ul>',
'								<li>All simple expressions must be of the form <i>column operator literal</i> or <i>column operator identifier</i>. That is, the left side must refer to a column (may not be a literal); whereas the right side may be either.</li>',
'',
'								<li>Column names may be quoted with the currently set quote characters (typically double-quotes). If unquoted, they must consist of classic identifier syntax (alphanumerics and underscore, but not beginning with a numeral).</li>',
'',
'								<li>All literals must be quoted strings (using single quotes). (In a future release we expect to support unquoted numeric syntax for columns explicitly typed as numeric.)</li>',
'							</ul>',
'						</li>',
'',
'						<li>',
'							Compound expressions',
'							<ul>',
'								<li>Compound expressions are formed by connecting simple expressions with the logical operators <code>AND</code> or <code>OR</code>.</li>',
'',
'								<li>However, all logical operators at each level in a complex expression (each parenthesized subexpression) must be homogeneous, <i>i.e.,</i> either <code>AND</code> or <code>OR</code> but not a mixture of the two. In other words, there is no implicit operator precedence; grouping of expressions must always be explicitly stated with parentheses.</li>',
'',
'								<li>The unary logical operator <code>NOT</code> is supoorted before parentheses only. While the Query Builder and the Column Filter allow they syntax <code>&hellip; NOT <i>operator</i> &hellip;</code> (where <code><i>operator</i></code> is <code>IN</code>, <code>LIKE</code>, <i>etc.</i>), these must be expressed here with parenthethes: <code>NOT (&hellip; <i>operator</i> &hellip;)</code>.</li>',
'',
'								<li>While the Query Builder and Column Filter syntax support the pseudo-operators <code>NOR</code> and <code>NAND</code>, in SQL these must be expressed as <code>NOT (&hellip; OR &hellip;)</code> and <code>NOT (&hellip; AND &hellip;)</code>, respectively.</li>',
'',
'								<li>The Query Builder and Column Filter syntax also support the pseudo-operators <code>BEGINS abc</code>, <code>ENDS xyz</code>, and <code>CONTAINS def</code>. These are expressed in SQL by <code>LIKE \'abc%\'</code>, <code>LIKE \'%xyz\'</code>, and <code>LIKE \'%def%\'</code>, respectively.</li>',
'							</ul>',
'						</li>',
'					</ul>',
'				</div>',
'			</div>',
'			<div class="filter-tree-warn"></div>',
'			<textarea></textarea>',
'		</section>',
'',
'	</div>',
'</div>'
].join('\n');

},{}],3:[function(require,module,exports){
module.exports = { // This file generated by gulp-imagine-64 at 11:23:49 AM on 10/28/2016
	"calendar": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nIXQwQkCMRSE4U9ZLMCT9Xjaq2AfNhfYU5oQLMAOtoN48EWei5iBIRPe/yYQ3qrhf1lFG7iKcEaJxSfukUvMWgdHavt0uWHtg2QwxXnAnJZ2uOLyVZtybzzhgWNmfoFl0/YB87NbzR1cjP9xeQHSDC6mcL1xFQAAAABJRU5ErkJggg=="
	},
	"checked": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAYJJREFUOE+NkstLglEQxf0fahG0iFrUxm2ElFDYLohCqCDaCAkWPaxIRbFFEJEaGEKLDCoMETRFUAMLyaIHBUG6sSKIMtKFqEhLT818ZUgmDhzu3DPn9z0uV1RrmUwmyGQyqNVqfFvViwBxu5RFPZuLSyGMKhz/qlEsRV19K8xm6y+w7bpBPFnAferjj3bdQX6DpHcAUwavAHUN2RGIZxBJZHH2mC/TUeydwwTZvBegLENNgw7sX6Wh1FswNmPEmjPCDyGRRwCtW9E3tMgdAtQw7GZjYcNX+gza2wJ3ZXsSZUuQ0vWCOV8SHfJJ/uluhbHUj1v8PKNMszIoQNRMHCShD6Wh8zyhrbOPwz8w+STKlCCJ7oRNUzQH63kBs5thBghePXxlj2aUoSxDPcuXPNiLAc5EEZ6HIkbmV2DYiXBPHs0o079+K0DTVj/s11mE00A0L+g4VcDp10qKZMAzytBhMaTRaPmYg885DlcSzSij0eoEiIouoUqlqqqaL2rlEok+Ad4vlfzPoVDsAAAAAElFTkSuQmCC"
	},
	"dialog": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAH4AAAAUCAMAAAB8knmGAAAAXVBMVEXn4tfm4dfn4tjn49no5Nrp5dzp5Nvm4dbi3NDg2s3o5Nvl4NTh287k39Pp5dvh3M/j3dHk39Tl4NXg287k3tPi3dHh3NDm4tfj3tLh28/o49ro49ng2s7l4dbl4Nb6VbEyAAAC1ElEQVR4AXVV0YKDKAwE4AAVK6SwC9bt/3/mnYJ2tF7ewMEJyWRgjHMuhFT/nEMb261hxbrqh23hRomYhxLrYfXATTm6DTv060q0vxh9+b+SYj3Muj3c5IORAFMBEtD0rKgoAHIJLWLlfpIG8qAAIk3wk9tJKz2E84GrHUvbVhLbyvw0iA2/6ota/Qbbvv+YbUekbUV6R/Dg3YWN+ZyzT/a8X6KpBLpW3cta2FCOLFMkLuZe97PgFJM7joaG9bUHlVyZWM63tGllZp+yzIwipGFJQwJ5rqgX2e7/w9KrwuYMAtBkgTbS73z0r9JD9IJyy2GJEjSQD9kJwiIeTSNxyC9Dz2VcGiKT6IHplr7VynbA+UpVA+bxQYi/kNPknJtSDn9CfebBNPSrZdK0r+6ImE8p5RzDm4szgFtIQNqme3ZkcBsP1rRvJZBbfr6c4O8Qc04pgfJrY5rs4dJ5hhZ0z9z6+x0vys8Oyj5nKEMTP8oLBw+7OAh9TkCdJ8/5Nno4dt6d506dybUYbhTDmFjtxwxjTvjVDhITiJVNoe5LyoGIQk4Ftd+QEcnlYPF+KY+DWc1WgPSqJeXjXxPpT9uXoBqGx6m7jylyvRvm8hGApuNAyWis98rXYvevZVSguzgfw8kGf3aR4gd2DNUcQX1qXHavvLFrpv6L/nt/d+9RXV8OFDCFEAhHBt+qSr6/FN+37JVS7BC9zwOXj6/JW04JLB7m984v/HIiX77m7iH5kL1198ov8OI0ziX01b32Fo9c3VHzce9xdcs+LC0TeHPKRfmulOLcZfTyW2ICz6Dr5Fl4F41o1q1nYeAts6buhieSy3e+kqzM7PP885AtfB0FJOCoUZnUQSyllAU3kmk4ckAuRqC2OXAh1b3ylaBj9Ka3PidQQxJcBEtGrWRncv2ejrEjVCnSX9tYOuBk07YI4J6MYppcBU0pEgOvDtv+xCCTrtwL5l87wVO3O/g5GQAAAABJRU5ErkJggg=="
	},
	"down-rectangle": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAAkAAAAECAYAAABcDxXOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAABpJREFUGFdjgIL/eDAKIKgABggqgAE0BQwMAPTlD/Fpi0JfAAAAAElFTkSuQmCC"
	},
	"filter-off": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAAChSURBVChTzZHBCoUgFET9TqEiskgyWoutQvRLRIr+cR7XQAjiJW/1BgZmMUevXsY5xy9OoDEGMcYiUzeB67qibVuwQjVNA6311V+WBeM4vsLDMEApde/1fY9pmtI453neHEKAlBJd1z0fXtc16PbjODK07zvmeUZVVd8nooc75zJIOX3Gm6i0bVsGKf8xKIRIuyJTLgJJ3nvQzsjW2geIsQ/pr9hMVrSncAAAAABJRU5ErkJggg=="
	},
	"filter-on": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuNWWFMmUAAACoSURBVChTY3BqfP2fHAzWmDbj7f8p294RhVOBasEa02e+/e/VBmQQCTxaX/9PnvYGoj5ywpv/Qd2ENft3vv4f1gfVBAP+nW/+h/a+ATtn1q73KHjytvdgg3070DTBgHvL6/8g22fsQGiaDmSHA21xaybgIpDHixa8hWssnA8NDEIApCh3LkIjiD2INYJCL2X6W3B8gdhEaQQBUOCA4gyE8+e9xaKJgQEA/74BNE3cElkAAAAASUVORK5CYII="
	},
	"unchecked": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAARBJREFUOE+9krtug1AQRPldSio7FQ1tZImOkoKOBomGT0EURC5ino54yTw90WywQhTkIkVWGoF2zuxdrlD+t0zThKZpT0Vmxb8CQRCg6zr0fb8rer7vfwcPxxdcrx+YpgnzPGNZlh9ibxxHlGUJshLSdV0at9tNpg7DIBrX5+OkPM9BVkKGYSBJEtR1jbZrBdiqbVtUVYU0TUFWQq+nE+I4xvvlImGaW7FHjwxZCVmWhbfzGVmWoSgKWXUr9uiRISshx3FkEldomubXauzRI0NWQp7nyUR+NG/rfr/jUXxnjx5vmKyEbNuWox9Xvid6ZMhK6HA4wnVdhGGIKIp2RY8MWQmx+JuoqvpUZFb8L6UonyYL3uOtrFH+AAAAAElFTkSuQmCC"
	},
	"up-down-spin": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAGJJREFUOE+lkwEKACEIBH2Zb/PnHsoGeaVJDUjGOgRRpKpkiIj+y4MME3eDR7kaKOVNsJyMNjIHzGy9YnW6J7qIcrriQimeCqORNABd0fpRTkt8uVUj7EsxC6vs/q3e/Q6iD2bwnByjPXHNAAAAAElFTkSuQmCC"
	},
	"up-down": {
		type: "image/png",
		data: "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAGFJREFUOE+lkkEKQCEIRD2ZJ3Ph3iN4WD9GflpYhj0YYowpGgJmbikd3gjMDFokwbuT1iAiurG5nomgqo5QaPo9ERQRI6Jf7sfGjudy2je23+i0Wl2oQ85TOdlfrJQOazF8br+rqTXQKn0AAAAASUVORK5CYII="
	},
};

},{}],4:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var _ = require('object-iterators');

var images = require('./images'); // this is the file generated by gulpfile.js (and ignored by git)

_(images).each(function(image, key) {
    var element = new Image();
    element.src = 'data:' + image.type + ';base64,' + image.data;
    images[key] = element;
});

images.checkbox = function(state) {
    return images[state ? 'checked' : 'unchecked'];
};

images.filter = function(state) {
    return images[state ? 'filter-on' : 'filter-off'];
};

module.exports = images;

},{"./images":3,"object-iterators":42}],5:[function(require,module,exports){
/* eslint-env browser */

'use strict';

/** @module automat */

var ENCODERS = /%\{(\d+)\}/g; // double $$ to encode

var REPLACERS = /\$\{(.*?)\}/g; // single $ to replace


/**
 * @summary String formatter.
 *
 * @desc String substitution is performed on numbered _replacer_ patterns like `${n}` or _encoder_ patterns like `%{n}` where n is the zero-based `arguments` index. So `${0}` would be replaced with the first argument following `text`.
 *
 * Encoders are just like replacers except the argument is HTML-encoded before being used.
 *
 * To change the format patterns, assign new `RegExp` patterns to `automat.encoders` and `automat.replacers`.
 *
 * @param {string|function} template - A template to be formatted as described above. Overloads:
 * * A string primitive containing the template.
 * * A function to be called with `this` as the calling context. The template is the value returned from this call.
 *
 * @param {...*} [replacements] - Replacement values for numbered format patterns.
 *
 * @return {string} The formatted text.
 *
 * @memberOf module:automat
 */
function automat(template, replacements/*...*/) {
    var hasReplacements = arguments.length > 1;

    // if `template` is a function, convert it to text
    if (typeof template === 'function') {
        template = template.call(this); // non-template function: call it with context and use return value
    }

    if (hasReplacements) {
        var args = arguments;
        template = template.replace(automat.replacersRegex, function(match, key) {
            key -= -1; // convert to number and increment
            return args.length > key ? args[key] : '';
        });

        template = template.replace(automat.encodersRegex, function(match, key) {
            key -= -1; // convert to number and increment
            if (args.length > key) {
                var htmlEncoderNode = document.createElement('DIV');
                htmlEncoderNode.textContent = args[key];
                return htmlEncoderNode.innerHTML;
            } else {
                return '';
            }
        });
    }

    return template;
}

/**
 * @summary Replace contents of `el` with `Nodes` generated from formatted template.
 *
 * @param {string|function} template - See `template` parameter of {@link automat}.
 *
 * @param {HTMLElement} [el] - Node in which to return markup generated from template. If omitted, a new `<div>...</div>` element will be created and returned.
 *
 * @param {...*} [replacements] - Replacement values for numbered format patterns.
 *
 * @return {HTMLElement} The `el` provided or a new `<div>...</div>` element, its `innerHTML` set to the formatted text.
 *
 * @memberOf module:automat
 */
function replace(template, el, replacements/*...*/) {
    var elOmitted = typeof el !== 'object',
        args = Array.prototype.slice.call(arguments, 1);

    if (elOmitted) {
        el = document.createElement('DIV');
        args.unshift(template);
    } else {
        args[0] = template;
    }

    el.innerHTML = automat.apply(null, args);

    return el;
}

/**
 * @summary Append or insert `Node`s generated from formatted template into given `el`.
 *
 * @param {string|function} template - See `template` parameter of {@link automat}.
 *
 * @param {HTMLElement} el
 *
 * @param {Node} [referenceNode=null] Inserts before this element within `el` or at end of `el` if `null`.
 *
 * @param {...*} [replacements] - Replacement values for numbered format patterns.
 *
 * @returns {Node[]} Array of the generated nodes (this is an actual Array instance; not an Array-like object).
 *
 * @memberOf module:automat
 */
function append(template, el, referenceNode, replacements/*...*/) {
    var replacementsStartAt = 3,
        referenceNodeOmitted = typeof referenceNode !== 'object';  // replacements are never objects

    if (referenceNodeOmitted) {
        referenceNode = null;
        replacementsStartAt = 2;
    }

    replacements = Array.prototype.slice.call(arguments, replacementsStartAt);
    var result = [],
        div = replace.apply(null, [template].concat(replacements));

    while (div.childNodes.length) {
        result.push(div.firstChild);
        el.insertBefore(div.firstChild, referenceNode); // removes child from div
    }

    return result;
}

/**
 * Use this convenience wrapper to return the first child node described in `template`.
 *
 * @param {string|function} template - If a function, extract template from comment within.
 *
 * @returns {HTMLElement} The first `Node` in your template.
 *
 * @memberOf module:automat
 */
function firstChild(template, replacements/*...*/) {
    return replace.apply(null, arguments).firstChild;
}

/**
 * Use this convenience wrapper to return the first child element described in `template`.
 *
 * @param {string|function} template - If a function, extract template from comment within.
 *
 * @returns {HTMLElement} The first `HTMLElement` in your template.
 *
 * @memberOf module:automat
 */
function firstElement(template, replacements/*...*/) {
    return replace.apply(null, arguments).firstElementChild;
}

/**
 * @summary Finds string substitution lexemes that require HTML encoding.
 * @desc Modify to suit.
 * @default %{n}
 * @type {RegExp}
 * @memberOf module:automat
 */
automat.encodersRegex = ENCODERS;

/**
 * @summary Finds string substitution lexemes.
 * @desc Modify to suit.
 * @default ${n}
 * @type {RegExp}
 * @memberOf module:automat
 */
automat.replacersRegex = REPLACERS;

automat.format = automat; // if you find using just `automat()` confusing
automat.replace = replace;
automat.append = append;
automat.firstChild = firstChild;
automat.firstElement = firstElement;

module.exports = automat;

},{}],6:[function(require,module,exports){
'use strict';

/* eslint-env browser */

/** @namespace cssInjector */

/**
 * @summary Insert base stylesheet into DOM
 *
 * @desc Creates a new `<style>...</style>` element from the named text string(s) and inserts it but only if it does not already exist in the specified container as per `referenceElement`.
 *
 * > Caveat: If stylesheet is for use in a shadow DOM, you must specify a local `referenceElement`.
 *
 * @returns A reference to the newly created `<style>...</style>` element.
 *
 * @param {string|string[]} cssRules
 * @param {string} [ID]
 * @param {undefined|null|Element|string} [referenceElement] - Container for insertion. Overloads:
 * * `undefined` type (or omitted): injects stylesheet at top of `<head>...</head>` element
 * * `null` value: injects stylesheet at bottom of `<head>...</head>` element
 * * `Element` type: injects stylesheet immediately before given element, wherever it is found.
 * * `string` type: injects stylesheet immediately before given first element found that matches the given css selector.
 *
 * @memberOf cssInjector
 */
function cssInjector(cssRules, ID, referenceElement) {
    if (typeof referenceElement === 'string') {
        referenceElement = document.querySelector(referenceElement);
        if (!referenceElement) {
            throw 'Cannot find reference element for CSS injection.';
        }
    } else if (referenceElement && !(referenceElement instanceof Element)) {
        throw 'Given value not a reference element.';
    }

    var container = referenceElement && referenceElement.parentNode || document.head || document.getElementsByTagName('head')[0];

    if (ID) {
        ID = cssInjector.idPrefix + ID;

        if (container.querySelector('#' + ID)) {
            return; // stylesheet already in DOM
        }
    }

    var style = document.createElement('style');
    style.type = 'text/css';
    if (ID) {
        style.id = ID;
    }
    if (cssRules instanceof Array) {
        cssRules = cssRules.join('\n');
    }
    cssRules = '\n' + cssRules + '\n';
    if (style.styleSheet) {
        style.styleSheet.cssText = cssRules;
    } else {
        style.appendChild(document.createTextNode(cssRules));
    }

    if (referenceElement === undefined) {
        referenceElement = container.firstChild;
    }

    container.insertBefore(style, referenceElement);

    return style;
}

/**
 * @summary Optional prefix for `<style>` tag IDs.
 * @desc Defaults to `'injected-stylesheet-'`.
 * @type {string}
 * @memberOf cssInjector
 */
cssInjector.idPrefix = 'injected-stylesheet-';

// Interface
module.exports = cssInjector;

},{}],7:[function(require,module,exports){
'use strict';

var overrider = require('overrider');

/** @namespace extend-me **/

/** @summary Extends an existing constructor into a new constructor.
 *
 * @returns {ChildConstructor} A new constructor, extended from the given context, possibly with some prototype additions.
 *
 * @desc Extends "objects" (constructors), with optional additional code, optional prototype additions, and optional prototype member aliases.
 *
 * > CAVEAT: Not to be confused with Underscore-style .extend() which is something else entirely. I've used the name "extend" here because other packages (like Backbone.js) use it this way. You are free to call it whatever you want when you "require" it, such as `var inherits = require('extend')`.
 *
 * Provide a constructor as the context and any prototype additions you require in the first argument.
 *
 * For example, if you wish to be able to extend `BaseConstructor` to a new constructor with prototype overrides and/or additions, basic usage is:
 *
 * ```javascript
 * var Base = require('extend-me').Base;
 * var BaseConstructor = Base.extend(basePrototype); // mixes in .extend
 * var ChildConstructor = BaseConstructor.extend(childPrototypeOverridesAndAdditions);
 * var GrandchildConstructor = ChildConstructor.extend(grandchildPrototypeOverridesAndAdditions);
 * ```
 *
 * This function (`extend()`) is added to the new extended object constructor as a property `.extend`, essentially making the object constructor itself easily "extendable." (Note: This is a property of each constructor and not a method of its prototype!)
 *
 * @param {string} [extendedClassName] - This is simply added to the prototype as $$CLASS_NAME. Useful for debugging because all derived constructors appear to have the same name ("Constructor") in the debugger.
 *
 * @param {extendedPrototypeAdditionsObject} [prototypeAdditions] - Object with members to copy to new constructor's prototype.
 *
 * @property {boolean} [debug] - See parameter `extendedClassName` _(above)_.
 *
 * @property {object} Base - A convenient base class from which all other classes can be extended.
 *
 * @memberOf extend-me
 */
function extend(extendedClassName, prototypeAdditions) {
    switch (arguments.length) {
        case 0:
            prototypeAdditions = {};
            break;
        case 1:
            switch (typeof extendedClassName) {
                case 'object':
                    prototypeAdditions = extendedClassName;
                    extendedClassName = undefined;
                    break;
                case 'string':
                    prototypeAdditions = {};
                    break;
                default:
                    throw 'Single-parameter overload must be either string or object.';
            }
            break;
        case 2:
            if (typeof extendedClassName !== 'string' || typeof prototypeAdditions !== 'object') {
                throw 'Two-parameter overload must be string, object.';
            }
            break;
        default:
            throw 'Too many parameters';
    }

    function Constructor() {
        if (prototypeAdditions.preInitialize) {
            prototypeAdditions.preInitialize.apply(this, arguments);
        }

        initializePrototypeChain.apply(this, arguments);

        if (prototypeAdditions.postInitialize) {
            prototypeAdditions.postInitialize.apply(this, arguments);
        }
    }

    Constructor.extend = extend;

    var prototype = Constructor.prototype = Object.create(this.prototype);
    prototype.constructor = Constructor;

    if (extendedClassName) {
        prototype.$$CLASS_NAME = extendedClassName;
    }

    overrider(prototype, prototypeAdditions);

    return Constructor;
}

function Base() {}
Base.prototype = {
    constructor: Base.prototype.constructor,
    get super() {
        return Object.getPrototypeOf(Object.getPrototypeOf(this));
    }
};
Base.extend = extend;
extend.Base = Base;

/** @typedef {function} extendedConstructor
 * @property prototype.super - A reference to the prototype this constructor was extended from.
 * @property [extend] - If `prototypeAdditions.extendable` was truthy, this will be a reference to {@link extend.extend|extend}.
 */

/** @typedef {object} extendedPrototypeAdditionsObject
 * @desc All members are copied to the new object. The following have special meaning.
 * @property {function} [initialize] - Additional constructor code for new object. This method is added to the new constructor's prototype. Gets passed new object as context + same args as constructor itself. Called on instantiation after similar function in all ancestors called with same signature.
 * @property {function} [preInitialize] - Called before the `initialize` cascade. Gets passed new object as context + same args as constructor itself.
 * @property {function} [postInitialize] - Called after the `initialize` cascade. Gets passed new object as context + same args as constructor itself.
 */

/** @summary Call all `initialize` methods found in prototype chain, beginning with the most senior ancestor's first.
 * @desc This recursive routine is called by the constructor.
 * 1. Walks back the prototype chain to `Object`'s prototype
 * 2. Walks forward to new object, calling any `initialize` methods it finds along the way with the same context and arguments with which the constructor was called.
 * @private
 * @memberOf extend-me
 */
function initializePrototypeChain() {
    var term = this,
        args = arguments;
    recur(term);

    function recur(obj) {
        var proto = Object.getPrototypeOf(obj);
        if (proto.constructor !== Object) {
            recur(proto);
            if (proto.hasOwnProperty('initialize')) {
                proto.initialize.apply(term, args);
            }
        }
    }
}

module.exports = extend;

},{"overrider":43}],8:[function(require,module,exports){
'use strict';

function DataSourceBase() {}

DataSourceBase.extend = require('extend-me');

DataSourceBase.prototype = {
    constructor: DataSourceBase.prototype.constructor,

    replaceIndent: '_',

    isNullObject: true,

    DataSourceError: DataSourceError,

    initialize: function(dataSource) {
        this.dataSource = dataSource;
    },

    // GETTERS/SETTERS

    get schema() {
        if (this.dataSource) {
            return this.dataSource.schema;
        }
    },
    set schema(schema) {
        if (this.dataSource) {
            this.dataSource.schema = schema;
        }
    },


    // "SET" METHODS (ALWAYS HAVE ARGS)

    setSchema: function() {
        if (this.dataSource) {
            return this.dataSource.setSchema.apply(this.dataSource, arguments);
        }
    },

    setData: function() {
        if (this.dataSource) {
            return this.dataSource.setData.apply(this.dataSource, arguments);
        }
    },

    setValue: function() {
        if (this.dataSource) {
            return this.dataSource.setValue.apply(this.dataSource, arguments);
        }
    },


    // "GET" METHODS WITHOUT ARGS

    getSchema: function() {
        if (this.dataSource) {
            return this.dataSource.getSchema();
        }
    },

    getRowCount: function() {
        if (this.dataSource) {
            return this.dataSource.getRowCount();
        }
    },

    getColumnCount: function() {
        if (this.dataSource) {
            return this.dataSource.getColumnCount();
        }
    },

    getGrandTotals: function() {
        //row: Ideally this should be set and get bottom/top totals
        //Currently this function is just sending the same for both in aggregations
        if (this.dataSource) {
            return this.dataSource.getGrandTotals();
        }
    },


    // "GET" METHODS WITH ARGS

    getProperty: function getProperty(propName) {
        if (propName in this) {
            return this[propName];
        }

        if (this.dataSource) {
            return getProperty.call(this.dataSource, propName);
        }
    },

    getDataIndex: function() {
        if (this.dataSource) {
            return this.dataSource.getDataIndex.apply(this.dataSource, arguments);
        }
    },

    getRow: function() {
        if (this.dataSource) {
            return this.dataSource.getRow.apply(this.dataSource, arguments);
        }
    },

    findRow: function() {
        if (this.dataSource) {
            return this.dataSource.findRow.apply(this.dataSource, arguments);
        }
    },

    revealRow: function() {
        if (this.dataSource) {
            return this.dataSource.revealRow.apply(this.dataSource, arguments);
        }
    },

    getValue: function() {
        if (this.dataSource) {
            return this.dataSource.getValue.apply(this.dataSource, arguments);
        }
    },

    click: function() {
        if (this.dataSource) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }
    },


    // BOOLEAN METHODS (NO ARGS)

    isDrillDown: function() {
        if (this.dataSource) {
            return this.dataSource.isDrillDown();
        }
    },

    viewMakesSense: function() {
        if (this.dataSource) {
            return this.dataSource.viewMakesSense();
        }
    },


    // OTHER METHODS

    apply: function() {
        throw new DataSourceError('Nothing to apply.');
    },


    /**
     * Get new object with name and index given the name or the index.
     * @param {string|number} [column] - Column name or index.
     * @param {string} [defaultName] - Name to use when column is omitted or undefined. May be omitted when column is definitely defined.
     * @returns {{name: string, index: number}}
     */
    getColumnInfo: function(column, defaultName) {
        var name, index;
        if (column === undefined) {
            column = defaultName;
        }
        if (typeof column === 'number') {
            name = this.getFields()[index = column];
        } else {
            index = this.getFields().indexOf(name = column);
        }
        if (name && index >= 0) {
            return {
                name: name,
                index: index
            };
        }
    },

    fixIndentForTableDisplay: function(string) {
        var count = string.search(/\S/);
        var end = string.substring(count);
        var result = Array(count + 1).join(this.replaceIndent) + end;
        return result;
    },

    dump: function(max) {
        max = Math.min(this.getRowCount(), max || Math.max(100, this.getRowCount()));
        var data = [];
        var fields = this.schema ? this.schema.map(function(cs) { return cs.name; }) : this.getHeaders();
        var cCount = this.getColumnCount();
        var viewMakesSense = this.viewMakesSense;
        for (var r = 0; r < max; r++) {
            var row = {};
            for (var c = 0; c < cCount; c++) {
                var val = this.getValue(c, r);
                if (c === 0 && viewMakesSense) {
                    val = this.fixIndentForTableDisplay(val);
                }
                row[fields[c]] = val;
            }
            data[r] = row;
        }
        console.table(data);
    }
};

function DataSourceError(message) {
    this.message = message;
}

// extend from `Error`
DataSourceError.prototype = Object.create(Error.prototype);

// override error name displayed in console
DataSourceError.prototype.name = 'DataSourceError';

module.exports = DataSourceBase;

},{"extend-me":7}],9:[function(require,module,exports){
'use strict';

/* eslint-env node, browser */

var cssInjector = require('css-injector');

/**
 * @constructor FinBar
 * @summary Create a scrollbar object.
 * @desc Creating a scrollbar is a three-step process:
 *
 * 1. Instantiate the scrollbar object by calling this constructor function. Upon instantiation, the DOM element for the scrollbar (with a single child element for the scrollbar "thumb") is created but is not insert it into the DOM.
 * 2. After instantiation, it is the caller's responsibility to insert the scrollbar, {@link FinBar#bar|this.bar}, into the DOM.
 * 3. After insertion, the caller must call {@link FinBar#resize|resize()} at least once to size and position the scrollbar and its thumb. After that, `resize()` should also be called repeatedly on resize events (as the content element is being resized).
 *
 * Suggested configurations:
 * * _**Unbound**_<br/>
 * The scrollbar serves merely as a simple range (slider) control. Omit both `options.onchange` and `options.content`.
 * * _**Bound to virtual content element**_<br/>
 * Virtual content is projected into the element using a custom event handler supplied by the programmer in `options.onchange`. A typical use case would be to handle scrolling of the virtual content. Other use cases include data transformations, graphics transformations, _etc._
 * * _**Bound to real content**_<br/>
 * Set `options.content` to the "real" content element but omit `options.onchange`. This will cause the scrollbar to use the built-in event handler (`this.scrollRealContent`) which implements smooth scrolling of the content element within the container.
 *
 * @param {finbarOptions} [options={}] - Options object. See the type definition for member details.
 */
function FinBar(options) {

    // make bound versions of all the mouse event handler
    var bound = this._bound = {};
    for (key in handlersToBeBound) {
        bound[key] = handlersToBeBound[key].bind(this);
    }

    /**
     * @name thumb
     * @summary The generated scrollbar thumb element.
     * @desc The thumb element's parent element is always the {@link FinBar#bar|bar} element.
     *
     * This property is typically referenced internally only. The size and position of the thumb element is maintained by `_calcThumb()`.
     * @type {Element}
     * @memberOf FinBar.prototype
     */
    var thumb = this.thumb = document.createElement('div');
    thumb.classList.add('thumb');
    thumb.onclick = bound.shortStop;
    thumb.onmouseover = bound.onmouseover;
    thumb.onmouseout = this._bound.onmouseout;

    /**
     * @name bar
     * @summary The generated scrollbar element.
     * @desc The caller inserts this element into the DOM (typically into the content container) and then calls its {@link FinBar#resize|resize()} method.
     *
     * Thus the node tree is typically:
     * * A **content container** element, which contains:
     *   * The content element(s)
     *   * This **scrollbar element**, which in turn contains:
     *     * The **thumb element**
     *
     * @type {Element}
     * @memberOf FinBar.prototype
     */
    var bar = this.bar = document.createElement('div');
    bar.classList.add('finbar-vertical');
    bar.onmousedown = this._bound.onmousedown;
    if (this.paging) { bar.onclick = bound.onclick; }
    bar.appendChild(thumb);

    options = options || {};

    // presets
    this.orientation = 'vertical';
    this._min = this._index = 0;
    this._max = 100;

    // options
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            var option = options[key];
            switch (key) {

                case 'index':
                    this._index = option;
                    break;

                case 'range':
                    validRange(option);
                    this._min = option.min;
                    this._max = option.max;
                    this.contentSize = option.max - option.min + 1;
                    break;

                default:
                    if (
                        key.charAt(0) !== '_' &&
                        typeof FinBar.prototype[key] !== 'function'
                    ) {
                        // override prototype defaults for standard ;
                        // extend with additional properties (for use in onchange event handlers)
                        this[key] = option;
                    }
                    break;

            }
        }
    }

    cssInjector(cssFinBars, 'finbar-base', options.cssStylesheetReferenceElement);
}

FinBar.prototype = {

    /**
     * @summary The scrollbar orientation.
     * @desc Set by the constructor to either `'vertical'` or `'horizontal'`. See the similarly named property in the {@link finbarOptions} object.
     *
     * Useful values are `'vertical'` (the default) or `'horizontal'`.
     *
     * Setting this property resets `this.oh` and `this.deltaProp` and changes the class names so as to reposition the scrollbar as per the CSS rules for the new orientation.
     * @default 'vertical'
     * @type {string}
     * @memberOf FinBar.prototype
     */
    set orientation(orientation) {
        if (orientation === this._orientation) {
            return;
        }

        this._orientation = orientation;

        /**
         * @readonly
         * @name oh
         * @summary <u>O</u>rientation <u>h</u>ash for this scrollbar.
         * @desc Set by the `orientation` setter to either the vertical or the horizontal orientation hash. The property should always be synchronized with `orientation`; do not update directly!
         *
         * This object is used internally to access scrollbars' DOM element properties in a generalized way without needing to constantly query the scrollbar orientation. For example, instead of explicitly coding `this.bar.top` for a vertical scrollbar and `this.bar.left` for a horizontal scrollbar, simply code `this.bar[this.oh.leading]` instead. See the {@link orientationHashType} definition for details.
         *
         * This object is useful externally for coding generalized {@link finbarOnChange} event handler functions that serve both horizontal and vertical scrollbars.
         * @type {orientationHashType}
         * @memberOf FinBar.prototype
         */
        this.oh = orientationHashes[this._orientation];

        if (!this.oh) {
            error('Invalid value for `options._orientation.');
        }

        /**
         * @name deltaProp
         * @summary The name of the `WheelEvent` property this scrollbar should listen to.
         * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
         *
         * Useful values are `'deltaX'`, `'deltaY'`, or `'deltaZ'`. A value of `null` means to ignore mouse wheel events entirely.
         *
         * The mouse wheel is one-dimensional and only emits events with `deltaY` data. This property is provided so that you can override the default of `'deltaX'` with a value of `'deltaY'` on your horizontal scrollbar primarily to accommodate certain "panoramic" interface designs where the mouse wheel should control horizontal rather than vertical scrolling. Just give `{ deltaProp: 'deltaY' }` in your horizontal scrollbar instantiation.
         *
         * Caveat: Note that a 2-finger drag on an Apple trackpad emits events with _both_ `deltaX ` and `deltaY` data so you might want to delay making the above adjustment until you can determine that you are getting Y data only with no X data at all (which is a sure bet you on a mouse wheel rather than a trackpad).

         * @type {object|null}
         * @memberOf FinBar.prototype
         */
        this.deltaProp = this.oh.delta;

        this.bar.className = this.bar.className.replace(/(vertical|horizontal)/g, orientation);

        if (this.bar.style.cssText || this.thumb.style.cssText) {
            this.bar.removeAttribute('style');
            this.thumb.removeAttribute('style');
            this.resize();
        }
    },
    get orientation() {
        return this._orientation;
    },

    /**
     * @summary Callback for scroll events.
     * @desc Set by the constructor via the similarly named property in the {@link finbarOptions} object. After instantiation, `this.onchange` may be updated directly.
     *
     * This event handler is called whenever the value of the scrollbar is changed through user interaction. The typical use case is when the content is scrolled. It is called with the `FinBar` object as its context and the current value of the scrollbar (its index, rounded) as the only parameter.
     *
     * Set this property to `null` to stop emitting such events.
     * @type {function(number)|null}
     * @memberOf FinBar.prototype
     */
    onchange: null,

    /**
     * @summary Add a CSS class name to the bar element's class list.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * The bar element's class list will always include `finbar-vertical` (or `finbar-horizontal` based on the current orientation). Whenever this property is set to some value, first the old prefix+orientation is removed from the bar element's class list; then the new prefix+orientation is added to the bar element's class list. This property causes _an additional_ class name to be added to the bar element's class list. Therefore, this property will only add at most one additional class name to the list.
     *
     * To remove _classname-orientation_ from the bar element's class list, set this property to a falsy value, such as `null`.
     *
     * > NOTE: You only need to specify an additional class name when you need to have mulltiple different styles of scrollbars on the same page. If this is not a requirement, then you don't need to make a new class; you would just create some additional rules using the same selectors in the built-in stylesheet (../css/finbars.css):
     * *`div.finbar-vertical` (or `div.finbar-horizontal`) for the scrollbar
     * *`div.finbar-vertical > div` (or `div.finbar-horizontal > div`) for the "thumb."
     *
     * Of course, your rules should come after the built-ins.
     * @type {string}
     * @memberOf FinBar.prototype
     */
    set classPrefix(prefix) {
        if (this._classPrefix) {
            this.bar.classList.remove(this._classPrefix + this.orientation);
        }

        this._classPrefix = prefix;

        if (prefix) {
            this.bar.classList.add(prefix + '-' + this.orientation);
        }
    },
    get classPrefix() {
        return this._classPrefix;
    },

    /**
     * @name increment
     * @summary Number of scrollbar index units representing a pageful. Used exclusively for paging up and down and for setting thumb size relative to content size.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * Can also be given as a parameter to the {@link FinBar#resize|resize} method, which is pertinent because content area size changes affect the definition of a "pageful." However, you only need to do this if this value is being used. It not used when:
     * * you define `paging.up` and `paging.down`
     * * your scrollbar is using `scrollRealContent`
     * @type {number}
     * @memberOf FinBar.prototype
     */
    increment: 1,

    /**
     * @name barStyles
     * @summary Scrollbar styles to be applied by {@link FinBar#resize|resize()}.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * This is a value to be assigned to {@link FinBar#styles|styles} on each call to {@link FinBar#resize|resize()}. That is, a hash of values to be copied to the scrollbar element's style object on resize; or `null` for none.
     *
     * @see {@link FinBar#style|style}
     * @type {finbarStyles|null}
     * @memberOf FinBar.prototype
     */
    barStyles: null,

    /**
     * @name style
     * @summary Additional scrollbar styles.
     * @desc See type definition for more details. These styles are applied directly to the scrollbar's `bar` element.
     *
     * Values are adjusted as follows before being applied to the element:
     * 1. Included "pseudo-property" names from the scrollbar's orientation hash, {@link FinBar#oh|oh}, are translated to actual property names before being applied.
     * 2. When there are margins, percentages are translated to absolute pixel values because CSS ignores margins in its percentage calculations.
     * 3. If you give a value without a unit (a raw number), "px" unit is appended.
     *
     * General notes:
     * 1. It is always preferable to specify styles via a stylesheet. Only set this property when you need to specifically override (a) stylesheet value(s).
     * 2. Can be set directly or via calls to the {@link FinBar#resize|resize} method.
     * 3. Should only be set after the scrollbar has been inserted into the DOM.
     * 4. Before applying these new values to the element, _all_ in-line style values are reset (by removing the element's `style` attribute), exposing inherited values (from stylesheets).
     * 5. Empty object has no effect.
     * 6. Falsey value in place of object has no effect.
     *
     * > CAVEAT: Do not attempt to treat the object you assign to this property as if it were `this.bar.style`. Specifically, changing this object after assigning it will have no effect on the scrollbar. You must assign it again if you want it to have an effect.
     *
     * @see {@link FinBar#barStyles|barStyles}
     * @type {finbarStyles}
     * @memberOf FinBar.prototype
     */
    set style(styles) {
        var keys = Object.keys(styles = extend({}, styles, this._auxStyles));

        if (keys.length) {
            var bar = this.bar,
                barRect = bar.getBoundingClientRect(),
                container = this.container || bar.parentElement,
                containerRect = container.getBoundingClientRect(),
                oh = this.oh;

            // Before applying new styles, revert all styles to values inherited from stylesheets
            bar.removeAttribute('style');

            keys.forEach(function (key) {
                var val = styles[key];

                if (key in oh) {
                    key = oh[key];
                }

                if (!isNaN(Number(val))) {
                    val = (val || 0) + 'px';
                } else if (/%$/.test(val)) {
                    // When bar size given as percentage of container, if bar has margins, restate size in pixels less margins.
                    // (If left as percentage, CSS's calculation will not exclude margins.)
                    var oriented = axis[key],
                        margins = barRect[oriented.marginLeading] + barRect[oriented.marginTrailing];
                    if (margins) {
                        val = parseInt(val, 10) / 100 * containerRect[oriented.size] - margins + 'px';
                    }
                }

                bar.style[key] = val;
            });
        }
    },

    /**
     * @readonly
     * @name paging
     * @summary Enable page up/dn clicks.
     * @desc Set by the constructor. See the similarly named property in the {@link finbarOptions} object.
     *
     * If truthy, listen for clicks in page-up and page-down regions of scrollbar.
     *
     * If an object, call `.paging.up()` on page-up clicks and `.paging.down()` will be called on page-down clicks.
     *
     * Changing the truthiness of this value after instantiation currently has no effect.
     * @type {boolean|object}
     * @memberOf FinBar.prototype
     */
    paging: true,

    /**
     * @name range
     * @summary Setter for the minimum and maximum scroll values.
     * @desc Set by the constructor. These values are the limits for {@link FooBar#index|index}.
     *
     * The setter accepts an object with exactly two numeric properties: `.min` which must be less than `.max`. The values are extracted and the object is discarded.
     *
     * The getter returns a new object with `.min` and '.max`.
     *
     * @type {rangeType}
     * @memberOf FinBar.prototype
     */
    set range(range) {
        validRange(range);
        this._min = range.min;
        this._max = range.max;
        this.contentSize = range.max - range.min + 1;
        this.index = this.index; // re-clamp
    },
    get range() {
        return {
            min: this._min,
            max: this._max
        };
    },

    /**
     * @summary Index value of the scrollbar.
     * @desc This is the position of the scroll thumb.
     *
     * Setting this value clamps it to {@link FinBar#min|min}..{@link FinBar#max|max}, scroll the content, and moves thumb.
     *
     * Getting this value returns the current index. The returned value will be in the range `min`..`max`. It is intentionally not rounded.
     *
     * Use this value as an alternative to (or in addition to) using the {@link FinBar#onchange|onchange} callback function.
     *
     * @see {@link FinBar#_setScroll|_setScroll}
     * @type {number}
     * @memberOf FinBar.prototype
     */
    set index(idx) {
        idx = Math.min(this._max, Math.max(this._min, idx)); // clamp it
        this._setScroll(idx);
        // this._setThumbSize();
    },
    get index() {
        return this._index;
    },

    /**
     * @private
     * @summary Move the thumb.
     * @desc Also displays the index value in the test panel and invokes the callback.
     * @param idx - The new scroll index, a value in the range `min`..`max`.
     * @param [scaled=f(idx)] - The new thumb position in pixels and scaled relative to the containing {@link FinBar#bar|bar} element, i.e., a proportional number in the range `0`..`thumbMax`. When omitted, a function of `idx` is used.
     * @memberOf FinBar.prototype
     */
    _setScroll: function (idx, scaled) {
        this._index = idx;

        // Display the index value in the test panel
        if (this.testPanelItem && this.testPanelItem.index instanceof Element) {
            this.testPanelItem.index.innerHTML = Math.round(idx);
        }

        // Call the callback
        if (this.onchange) {
            this.onchange.call(this, Math.round(idx));
        }

        // Move the thumb
        if (scaled === undefined) {
            scaled = (idx - this._min) / (this._max - this._min) * this._thumbMax;
        }
        this.thumb.style[this.oh.leading] = scaled + 'px';
    },

    scrollRealContent: function (idx) {
        var containerRect = this.content.parentElement.getBoundingClientRect(),
            sizeProp = this.oh.size,
            maxScroll = Math.max(0, this.content[sizeProp] - containerRect[sizeProp]),
            //scroll = Math.min(idx, maxScroll);
            scroll = (idx - this._min) / (this._max - this._min) * maxScroll;
        //console.log('scroll: ' + scroll);
        this.content.style[this.oh.leading] = -scroll + 'px';
    },

    /**
     * @summary Recalculate thumb position.
     *
     * @desc This method recalculates the thumb size and position. Call it once after inserting your scrollbar into the DOM, and repeatedly while resizing the scrollbar (which typically happens when the scrollbar's parent is resized by user.
     *
     * > This function shifts args if first arg omitted.
     *
     * @param {number} [increment=this.increment] - Resets {@link FooBar#increment|increment} (see).
     *
     * @param {finbarStyles} [barStyles=this.barStyles] - (See type definition for details.) Scrollbar styles to be applied to the bar element.
     *
     * Only specify a `barStyles` object when you need to override stylesheet values. If provided, becomes the new default (`this.barStyles`), for use as a default on subsequent calls.
     *
     * It is generally the case that the scrollbar's new position is sufficiently described by the current styles. Therefore, it is unusual to need to provide a `barStyles` object on every call to `resize`.
     *
     * @returns {FinBar} Self for chaining.
     * @memberOf FinBar.prototype
     */
    resize: function (increment, barStyles) {
        var bar = this.bar;

        if (!bar.parentNode) {
            return; // not in DOM yet so nothing to do
        }

        var container = this.container || bar.parentElement,
            containerRect = container.getBoundingClientRect();

        // shift args if if 1st arg omitted
        if (typeof increment === 'object') {
            barStyles = increment;
            increment = undefined;
        }

        this.style = this.barStyles = barStyles || this.barStyles;

        // Bound to real content: Content was given but no onchange handler.
        // Set up .onchange, .containerSize, and .increment.
        // Note this only makes sense if your index unit is pixels.
        if (this.content) {
            if (!this.onchange) {
                this.onchange = this.scrollRealContent;
                this.contentSize = this.content[this.oh.size];
                this._min = 0;
                this._max = this.contentSize - 1;
            }
        }
        if (this.onchange === this.scrollRealContent) {
            this.containerSize = containerRect[this.oh.size];
            this.increment = this.containerSize / (this.contentSize - this.containerSize) * (this._max - this._min);
        } else {
            this.containerSize = 1;
            this.increment = increment || this.increment;
        }

        var index = this.index;
        this.testPanelItem = this.testPanelItem || this._addTestPanelItem();
        this._setThumbSize();
        this.index = index;

        if (this.deltaProp !== null) {
            container.addEventListener('wheel', this._bound.onwheel);
        }

        return this;
    },

    /**
     * @summary Shorten trailing end of scrollbar by thickness of some other scrollbar.
     * @desc In the "classical" scenario where vertical scroll bar is on the right and horizontal scrollbar is on the bottom, you want to shorten the "trailing end" (bottom and right ends, respectively) of at least one of them so they don't overlay.
     *
     * This convenience function is an programmatic alternative to hardcoding the correct style with the correct value in your stylesheet; or setting the correct style with the correct value in the {@link FinBar#barStyles|barStyles} object.
     *
     * @see {@link FinBar#foreshortenBy|foreshortenBy}.
     *
     * @param {FinBar|null} otherFinBar - Other scrollbar to avoid by shortening this one; `null` removes the trailing space
     * @returns {FinBar} For chaining
     */
    shortenBy: function (otherFinBar) { return this.shortenEndBy('trailing', otherFinBar); },

    /**
     * @summary Shorten leading end of scrollbar by thickness of some other scrollbar.
     * @desc Supports non-classical scrollbar scenarios where vertical scroll bar may be on left and horizontal scrollbar may be on top, in which case you want to shorten the "leading end" rather than the trailing end.
     * @see {@link FinBar#shortenBy|shortenBy}.
     * @param {FinBar|null} otherFinBar - Other scrollbar to avoid by shortening this one; `null` removes the trailing space
     * @returns {FinBar} For chaining
     */
    foreshortenBy: function (otherFinBar) { return this.shortenEndBy('leading', otherFinBar); },

    /**
     * @summary Generalized shortening function.
     * @see {@link FinBar#shortenBy|shortenBy}.
     * @see {@link FinBar#foreshortenBy|foreshortenBy}.
     * @param {string} whichEnd - a CSS style property name or an orientation hash name that translates to a CSS style property name.
     * @param {FinBar|null} otherFinBar - Other scrollbar to avoid by shortening this one; `null` removes the trailing space
     * @returns {FinBar} For chaining
     */
    shortenEndBy: function (whichEnd, otherFinBar) {
        if (!otherFinBar) {
            delete this._auxStyles;
        } else if (otherFinBar instanceof FinBar && otherFinBar.orientation !== this.orientation) {
            var otherStyle = window.getComputedStyle(otherFinBar.bar),
                ooh = orientationHashes[otherFinBar.orientation];
            this._auxStyles = {};
            this._auxStyles[whichEnd] = otherStyle[ooh.thickness];
        }
        return this; // for chaining
    },

    /**
     * @private
     * @summary Sets the proportional thumb size and hides thumb when 100%.
     * @desc The thumb size has an absolute minimum of 20 (pixels).
     * @memberOf FinBar.prototype
     */
    _setThumbSize: function () {
        var oh = this.oh,
            thumbComp = window.getComputedStyle(this.thumb),
            thumbMarginLeading = parseInt(thumbComp[oh.marginLeading]),
            thumbMarginTrailing = parseInt(thumbComp[oh.marginTrailing]),
            thumbMargins = thumbMarginLeading + thumbMarginTrailing,
            barSize = this.bar.getBoundingClientRect()[oh.size],
            thumbSize = Math.max(20, barSize * this.containerSize / this.contentSize);

        if (this.containerSize < this.contentSize) {
            this.bar.style.visibility = 'visible';
            this.thumb.style[oh.size] = thumbSize + 'px';
        } else {
            this.bar.style.visibility = 'hidden';
        }

        /**
         * @private
         * @name _thumbMax
         * @summary Maximum offset of thumb's leading edge.
         * @desc This is the pixel offset within the scrollbar of the thumb when it is at its maximum position at the extreme end of its range.
         *
         * This value takes into account the newly calculated size of the thumb element (including its margins) and the inner size of the scrollbar (the thumb's containing element, including _its_ margins).
         *
         * NOTE: Scrollbar padding is not taken into account and assumed to be 0 in the current implementation and is assumed to be `0`; use thumb margins in place of scrollbar padding.
         * @type {number}
         * @memberOf FinBar.prototype
         */
        this._thumbMax = barSize - thumbSize - thumbMargins;

        this._thumbMarginLeading = thumbMarginLeading; // used in mousedown
    },

    /**
     * @summary Remove the scrollbar.
     * @desc Unhooks all the event handlers and then removes the element from the DOM. Always call this method prior to disposing of the scrollbar object.
     * @memberOf FinBar.prototype
     */
    remove: function () {
        this.bar.onmousedown = null;
        this._removeEvt('mousemove');
        this._removeEvt('mouseup');

        (this.container || this.bar.parentElement)._removeEvt('wheel', this._bound.onwheel);

        this.bar.onclick =
            this.thumb.onclick =
                this.thumb.onmouseover =
                    this.thumb.transitionend =
                        this.thumb.onmouseout = null;

        this.bar.remove();
    },

    /**
     * @private
     * @function _addTestPanelItem
     * @summary Append a test panel element.
     * @desc If there is a test panel in the DOM (typically an `<ol>...</ol>` element) with class names of both `this.classPrefix` and `'test-panel'` (or, barring that, any element with class name `'test-panel'`), an `<li>...</li>` element will be created and appended to it. This new element will contain a span for each class name given.
     *
     * You should define a CSS selector `.listening` for these spans. This class will be added to the spans to alter their appearance when a listener is added with that class name (prefixed with 'on').
     *
     * (This is an internal function that is called once by the constructor on every instantiation.)
     * @returns {Element|undefined} The appended `<li>...</li>` element or `undefined` if there is no test panel.
     * @memberOf FinBar.prototype
     */
    _addTestPanelItem: function () {
        var testPanelItem,
            testPanelElement = document.querySelector('.' + this._classPrefix + '.test-panel') || document.querySelector('.test-panel');

        if (testPanelElement) {
            var testPanelItemPartNames = [ 'mousedown', 'mousemove', 'mouseup', 'index' ],
                item = document.createElement('li');

            testPanelItemPartNames.forEach(function (partName) {
                item.innerHTML += '<span class="' + partName + '">' + partName.replace('mouse', '') + '</span>';
            });

            testPanelElement.appendChild(item);

            testPanelItem = {};
            testPanelItemPartNames.forEach(function (partName) {
                testPanelItem[partName] = item.getElementsByClassName(partName)[0];
            });
        }

        return testPanelItem;
    },

    _addEvt: function (evtName) {
        var spy = this.testPanelItem && this.testPanelItem[evtName];
        if (spy) { spy.classList.add('listening'); }
        window.addEventListener(evtName, this._bound['on' + evtName]);
    },

    _removeEvt: function (evtName) {
        var spy = this.testPanelItem && this.testPanelItem[evtName];
        if (spy) { spy.classList.remove('listening'); }
        window.removeEventListener(evtName, this._bound['on' + evtName]);
    }
};

function extend(obj) {
    for (var i = 1; i < arguments.length; ++i) {
        var objn = arguments[i];
        if (objn) {
            for (var key in objn) {
                obj[key] = objn[key];
            }
        }
    }
    return obj;
}

function validRange(range) {
    var keys = Object.keys(range),
        valid =  keys.length === 2 &&
            typeof range.min === 'number' &&
            typeof range.max === 'number' &&
            range.min <= range.max;

    if (!valid) {
        error('Invalid .range object.');
    }
}

/**
 * @private
 * @name handlersToBeBound
 * @type {object}
 * @desc The functions defined in this object are all DOM event handlers that are bound by the FinBar constructor to each new instance. In other words, the `this` value of these handlers, once bound, refer to the FinBar object and not to the event emitter. "Do not consume raw."
 */
var handlersToBeBound = {
    shortStop: function (evt) {
        evt.stopPropagation();
    },

    onwheel: function (evt) {
        this.index += evt[this.deltaProp];
        evt.stopPropagation();
        evt.preventDefault();
    },

    onclick: function (evt) {
        var thumbBox = this.thumb.getBoundingClientRect(),
            goingUp = evt[this.oh.coordinate] < thumbBox[this.oh.leading];

        if (typeof this.paging === 'object') {
            this.index = this.paging[goingUp ? 'up' : 'down'](Math.round(this.index));
        } else {
            this.index += goingUp ? -this.increment : this.increment;
        }

        // make the thumb glow momentarily
        this.thumb.classList.add('hover');
        var self = this;
        this.thumb.addEventListener('transitionend', function waitForIt() {
            this.removeEventListener('transitionend', waitForIt);
            self._bound.onmouseup(evt);
        });

        evt.stopPropagation();
    },

    onmouseover: function () {
        this.thumb.classList.add('hover');
    },

    onmouseout: function () {
        this.thumb.classList.remove('hover');
    },

    onmousedown: function (evt) {
        var thumbBox = this.thumb.getBoundingClientRect();
        this.pinOffset = evt[this.oh.axis] - thumbBox[this.oh.leading] + this.bar.getBoundingClientRect()[this.oh.leading] + this._thumbMarginLeading;
        document.documentElement.style.cursor = 'default';

        this._addEvt('mousemove');
        this._addEvt('mouseup');

        evt.stopPropagation();
        evt.preventDefault();
    },

    onmousemove: function (evt) {
        var scaled = Math.min(this._thumbMax, Math.max(0, evt[this.oh.axis] - this.pinOffset));
        var idx = scaled / this._thumbMax * (this._max - this._min) + this._min;

        this._setScroll(idx, scaled);

        evt.stopPropagation();
        evt.preventDefault();
    },

    onmouseup: function (evt) {
        this._removeEvt('mousemove');
        this._removeEvt('mouseup');

        document.documentElement.style.cursor = 'auto';

        var thumbBox = this.thumb.getBoundingClientRect();
        if (
            thumbBox.left <= evt.clientX && evt.clientX <= thumbBox.right &&
            thumbBox.top <= evt.clientY && evt.clientY <= thumbBox.bottom
        ) {
            this._bound.onmouseover(evt);
        } else {
            this._bound.onmouseout(evt);
        }

        evt.stopPropagation();
        evt.preventDefault();
    }
};

var orientationHashes = {
    vertical: {
        coordinate:     'clientY',
        axis:           'pageY',
        size:           'height',
        outside:        'right',
        inside:         'left',
        leading:        'top',
        trailing:       'bottom',
        marginLeading:  'marginTop',
        marginTrailing: 'marginBottom',
        thickness:      'width',
        delta:          'deltaY'
    },
    horizontal: {
        coordinate:     'clientX',
        axis:           'pageX',
        size:           'width',
        outside:        'bottom',
        inside:         'top',
        leading:        'left',
        trailing:       'right',
        marginLeading:  'marginLeft',
        marginTrailing: 'marginRight',
        thickness:      'height',
        delta:          'deltaX'
    }
};

var axis = {
    top:    'vertical',
    bottom: 'vertical',
    height: 'vertical',
    left:   'horizontal',
    right:  'horizontal',
    width:  'horizontal'
};

var cssFinBars; // definition inserted by gulpfile between following comments
/* inject:css */
cssFinBars = 'div.finbar-horizontal,div.finbar-vertical{position:absolute;margin:3px}div.finbar-horizontal>.thumb,div.finbar-vertical>.thumb{position:absolute;background-color:#d3d3d3;-webkit-box-shadow:0 0 1px #000;-moz-box-shadow:0 0 1px #000;box-shadow:0 0 1px #000;border-radius:4px;margin:2px;opacity:.4;transition:opacity .5s}div.finbar-horizontal>.thumb.hover,div.finbar-vertical>.thumb.hover{opacity:1;transition:opacity .5s}div.finbar-vertical{top:0;bottom:0;right:0;width:11px}div.finbar-vertical>.thumb{top:0;right:0;width:7px}div.finbar-horizontal{left:0;right:0;bottom:0;height:11px}div.finbar-horizontal>.thumb{left:0;bottom:0;height:7px}';
/* endinject */

function error(msg) {
    throw 'finbars: ' + msg;
}

// Interface
module.exports = FinBar;

},{"css-injector":6}],10:[function(require,module,exports){
/* eslint-env browser */

'use strict';

if (typeof window.CustomEvent !== 'function') {
    window.CustomEvent = function(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    };

    window.CustomEvent.prototype = window.Event.prototype;
}

var rectangular = require('rectangular');

var GraphicsContext = require('./js/GraphicsContext.js');

var RESIZE_POLLING_INTERVAL = 200,
    paintables = [],
    resizables = [],
    paintLoopRunning = true,
    resizeLoopRunning = true,
    charMap = makeCharMap();

function Canvas(div, component, options) {
    var self = this;

    this.div = div;
    this.component = component;

    options = options || {};
    this.doubleClickDelay = options.doubleClickDelay || 325;

    this.dragEndtime = Date.now();

    this.canvas = document.createElement('canvas');
    this.div.appendChild(this.canvas);

    this.canvas.style.outline = 'none';

    // this.focuser = document.createElement('button');
    // this.focuser.style.position = 'absolute';
    // this.focuser.style.top = '0px';
    // this.focuser.style.left = '0px';
    // this.focuser.style.zIndex = '-1';
    // this.focuser.style.outline = 'none';
    // this.div.appendChild(this.focuser);

    this.canvasCTX = this.canvas.getContext('2d');
    this.gc = new GraphicsContext(this.canvasCTX);

    this.buffer = document.createElement('canvas');
    this.bufferCTX = this.buffer.getContext('2d');
    this.bufferGC = new GraphicsContext(this.bufferCTX);

    this.mouseLocation = new rectangular.Point(-1, -1);
    this.dragstart = new rectangular.Point(-1, -1);
    //this.origin = new rectangular.Point(0, 0);
    this.bounds = new rectangular.Rectangle(0, 0, 0, 0);
    this.hasMouse = false;

    document.addEventListener('mousemove', function(e) {
        if (self.hasMouse || self.isDragging()) {
            self.finmousemove(e);
        }
    });
    document.addEventListener('mouseup', function(e) {
        self.finmouseup(e);
    });
    document.addEventListener('wheel', function(e) {
        self.finwheelmoved(e);
    });
    document.addEventListener('keydown', function(e) {
        self.finkeydown(e);
    });
    document.addEventListener('keyup', function(e) {
        self.finkeyup(e);
    });

    this.canvas.onmouseover = function() {
        self.hasMouse = true;
    };
    this.canvas.addEventListener('focus', function(e) {
        self.finfocusgained(e);
    });
    this.canvas.addEventListener('blur', function(e) {
        self.finfocuslost(e);
    });
    this.canvas.addEventListener('mousedown', function(e) {
        self.finmousedown(e);
    });
    this.canvas.addEventListener('mouseout', function(e) {
        self.hasMouse = false;
        self.finmouseout(e);
    });
    this.canvas.addEventListener('click', function(e) {
        self.finclick(e);
    });
    this.canvas.addEventListener('contextmenu', function(e) {
        self.fincontextmenu(e);
        e.preventDefault();
        return false;
    });

    this.canvas.setAttribute('tabindex', 0);
    this.canvas.contentEditable = true;

    this.resize();

    this.beginResizing();
    this.beginPainting();
}

Canvas.prototype = {
    constructor: Canvas.prototype.constructor,
    div: null,
    component: null,
    canvas: null,
    canvasCTX: null,
    focuser: null,
    buffer: null,
    ctx: null,
    mouseLocation: null,
    dragstart: null,
    origin: null,
    bounds: null,
    dirty: false,
    size: null,
    mousedown: false,
    dragging: false,
    repeatKeyCount: 0,
    repeatKey: null,
    repeatKeyStartTime: 0,
    currentKeys: [],
    hasMouse: false,
    lastDoubleClickTime: 0,
    dragEndTime: 0,
    lastRepaintTime: 0,
    currentPaintCount: 0,
    currentFPS: 0,
    lastFPSComputeTime: 0,

    addEventListener: function(name, callback) {
        this.canvas.addEventListener(name, callback);
    },

    stopPaintLoop: function() {
        paintLoopRunning = false;
    },

    restartPaintLoop: function() {
        if (paintLoopRunning) {
            return; // already running
        }
        paintLoopRunning = true;
        requestAnimationFrame(paintLoopFunction);
    },

    stopResizeLoop: function() {
        resizeLoopRunning = false;
    },

    restartResizeLoop: function() {
        if (resizeLoopRunning) {
            return; // already running
        }
        resizeLoopRunning = true;
        setInterval(resizablesLoopFunction, 200);
    },

    detached: function() {
        this.stopPainting();
        this.stopResizing();
    },

    useHiDPI: function() {
        return this.component.resolveProperty('useHiDPI');
    },

    useBitBlit: function() {
        return this.component.resolveProperty('useBitBlit');
    },

    getFPS: function() {
        var fps = this.component.resolveProperty('repaintIntervalRate');
        return fps ? parseInt(fps) : 0;
    },

    getEnableContinuousRepaint: function () {
        return this.component.resolveProperty('enableContinuousRepaint');
    },

    getCurrentFPS:function () {
        return this.currentFPS;
    },


    tickPaint: function(now) {
        var fps = this.getFPS();
        var isContinuousRepaint = this.getEnableContinuousRepaint();
        if (fps === 0) {
            return;
        }
        var interval = 1000 / fps;

        var elapsed = now - this.lastRepaintTime;
        if (elapsed > interval && (isContinuousRepaint || this.dirty)) {
            this.paintNow();
            this.lastRepaintTime = now;
            /* - (elapsed % interval);*/
            if (isContinuousRepaint) {
                this.currentPaintCount++;
                if (now - this.lastFPSComputeTime >= 1000) {
                    this.currentFPS = (this.currentPaintCount * 1000) / (now - this.lastFPSComputeTime);
                    this.currentPaintCount = 0;
                    this.lastFPSComputeTime = now;
                }
            }
        }
    },

    beginPainting: function() {
        var self = this;
        this.dirty = true;
        this.tickPainter = function(now) {
            self.tickPaint(now);
        };
        paintables.push(this);
    },

    stopPainting: function() {
        paintables.splice(paintables.indexOf(this), 1);
    },

    beginResizing: function() {
        var self = this;
        this.tickResizer = function() {
            self.checksize();
        };
        resizables.push(this);
    },

    stopResizing: function() {
        resizables.splice(resizables.indexOf(this), 1);
    },

    start: function() {
        this.beginPainting();
        this.beginResizing();
    },

    stop: function() {
        this.stopPainting();
        this.stopResizing();
    },

    checksize: function() {
        //this is expensive lets do it at some modulo
        var sizeNow = this.div.getBoundingClientRect();
        if (sizeNow.width !== this.size.width || sizeNow.height !== this.size.height) {
            this.sizeChangedNotification();
        }
    },

    sizeChangedNotification: function() {
        this.resize();
    },

    resize: function() {
        var box = this.size = this.div.getBoundingClientRect();

        this.width = box.width;
        this.height = box.height;

        //fix ala sir spinka, see
        //http://www.html5rocks.com/en/tutorials/canvas/hidpi/
        //just add 'hdpi' as an attribute to the fin-canvas tag
        var ratio = 1;
        var useBitBlit = this.useBitBlit();
        var isHIDPI = window.devicePixelRatio && this.useHiDPI();
        if (isHIDPI) {
            var devicePixelRatio = window.devicePixelRatio || 1;
            var backingStoreRatio = this.canvasCTX.webkitBackingStorePixelRatio ||
                this.canvasCTX.mozBackingStorePixelRatio ||
                this.canvasCTX.msBackingStorePixelRatio ||
                this.canvasCTX.oBackingStorePixelRatio ||
                this.canvasCTX.backingStorePixelRatio || 1;

            ratio = devicePixelRatio / backingStoreRatio;
            //this.canvasCTX.scale(ratio, ratio);
        }

        this.buffer.width = this.canvas.width = this.width * ratio;
        this.buffer.height = this.canvas.height = this.height * ratio;

        this.canvas.style.width = this.buffer.style.width = this.width + 'px';
        this.canvas.style.height = this.buffer.style.height = this.height + 'px';

        this.bufferCTX.scale(ratio, ratio);
        if (isHIDPI && !useBitBlit) {
            this.canvasCTX.scale(ratio, ratio);
        }

        //this.origin = new rectangular.Point(Math.round(this.size.left), Math.round(this.size.top));
        this.bounds = new rectangular.Rectangle(0, 0, this.width, this.height);
        //setTimeout(function() {
        var comp = this.component;
        if (comp) {
            comp.setBounds(this.bounds);
        }
        this.resizeNotification();
        this.paintNow();
        //});
    },

    resizeNotification: function() {
        //to be overridden
    },

    getBounds: function() {
        return this.bounds;
    },

    paintNow: function() {
        var self = this;
        this.safePaintImmediately(function(gc) {
            gc.clearRect(0, 0, self.width, self.height);

            var comp = self.component;
            if (comp) {
                comp.paint(gc);
            }

            self.dirty = false;
        });
    },

    safePaintImmediately: function(paintFunction) {
        var useBitBlit = this.useBitBlit(),
            gc = useBitBlit ? this.bufferGC : this.gc;
        try {
            gc.save();
            paintFunction(gc);
        } catch (e) {
            console.error(e);
        } finally {
            gc.restore();
        }
        if (useBitBlit) {
            this.flushBuffer();
        }
    },

    flushBuffer: function() {
        if (this.buffer.width > 0 && this.buffer.height > 0) {
            this.canvasCTX.drawImage(this.buffer, 0, 0);
        }
    },

    dispatchNewEvent: function(event, name, detail) {
        detail = {
            detail: detail || {}
        };
        detail.detail.primitiveEvent = event;
        return this.canvas.dispatchEvent(new CustomEvent(name, detail));
    },

    dispatchNewMouseKeysEvent: function(event, name, detail) {
        detail = detail || {};
        detail.mouse = this.mouseLocation;
        detail.keys = this.currentKeys;
        return this.dispatchNewEvent(event, name, detail);
    },

    finmousemove: function(e) {
        if (!this.isDragging() && this.mousedown) {
            this.beDragging();
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-dragstart', {
                isRightClick: this.isRightClick(e)
            });
            this.dragstart = new rectangular.Point(this.mouseLocation.x, this.mouseLocation.y);
        }
        this.mouseLocation = this.getLocal(e);
        //console.log(this.mouseLocation);
        if (this.isDragging()) {
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-drag', {
                dragstart: this.dragstart,
                isRightClick: this.isRightClick(e)
            });
        }
        if (this.bounds.contains(this.mouseLocation)) {
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mousemove');
        }
    },

    finmousedown: function(e) {
        this.mouseLocation = this.mouseDownLocation = this.getLocal(e);
        this.mousedown = true;

        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mousedown', {
            isRightClick: this.isRightClick(e)
        });
        this.takeFocus();
    },

    finmouseup: function(e) {
        if (this.isDragging()) {
            this.dispatchNewMouseKeysEvent(e, 'fin-canvas-dragend', {
                dragstart: this.dragstart,
                isRightClick: this.isRightClick(e)
            });
            this.beNotDragging();
            this.dragEndtime = Date.now();
        }
        this.mousedown = false;
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mouseup', {
            isRightClick: this.isRightClick(e)
        });
        //this.mouseLocation = new rectangular.Point(-1, -1);
    },

    finmouseout: function(e) {
        if (!this.mousedown) {
            this.mouseLocation = new rectangular.Point(-1, -1);
        }
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-mouseout');
    },

    finwheelmoved: function(e) {
        if (this.isDragging() || !this.hasFocus()) {
            return;
        }
        e.preventDefault();
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-wheelmoved', {
            isRightClick: this.isRightClick(e)
        });
    },

    finclick: function(e) {
        if (this.doubleClickTimer && Date.now() - this.lastClickTime < this.doubleClickDelay) {
            //this is a double click...
            clearTimeout(this.doubleClickTimer); // prevent click event
            this.doubleClickTimer = undefined;
            this.findblclick(e);
        } else {
            this.lastClickTime = Date.now();

            this.doubleClickTimer = setTimeout(function() {
                this.doubleClickTimer = undefined;
                this.mouseLocation = this.getLocal(e);
                this.dispatchNewMouseKeysEvent(e, 'fin-canvas-click', {
                    isRightClick: this.isRightClick(e)
                });
            }.bind(this), this.doubleClickDelay);
        }
    },

    findblclick: function(e) {
        this.mouseLocation = this.getLocal(e);
        this.lastDoubleClickTime = Date.now();
        this.dispatchNewMouseKeysEvent(e, 'fin-canvas-dblclick', {
            isRightClick: this.isRightClick(e)
        });
        //console.log('dblclick', this.currentKeys);
    },

    getCharMap: function() { //TODO: This is static. Make it a property of the constructor.
        return charMap;
    },

    finkeydown: function(e) {
        if (!this.hasFocus()) {
            return;
        }

        //e.preventDefault();
        var keyChar = e.shiftKey ? charMap[e.keyCode][1] : charMap[e.keyCode][0];
        if (e.repeat) {
            if (this.repeatKey === keyChar) {
                this.repeatKeyCount++;
            } else {
                this.repeatKey = keyChar;
                this.repeatKeyStartTime = Date.now();
            }
        } else {
            this.repeatKey = null;
            this.repeatKeyCount = 0;
            this.repeatKeyStartTime = 0;
        }
        if (this.currentKeys.indexOf(keyChar) === -1) {
            this.currentKeys.push(keyChar);
        }
        //console.log(keyChar, e.keyCode);
        this.dispatchNewEvent(e, 'fin-canvas-keydown', {
            alt: e.altKey,
            ctrl: e.ctrlKey,
            char: keyChar,
            code: e.charCode,
            key: e.keyCode,
            meta: e.metaKey,
            repeatCount: this.repeatKeyCount,
            repeatStartTime: this.repeatKeyStartTime,
            shift: e.shiftKey,
            identifier: e.key,
            currentKeys: this.currentKeys.slice(0)
        });
    },

    finkeyup: function(e) {
        var keyChar = e.shiftKey ? charMap[e.keyCode][1] : charMap[e.keyCode][0];
        this.currentKeys.splice(this.currentKeys.indexOf(keyChar), 1);
        if (!this.hasFocus()) {
            return;
        }
        this.repeatKeyCount = 0;
        this.repeatKey = null;
        this.repeatKeyStartTime = 0;
        this.dispatchNewEvent(e, 'fin-canvas-keyup', {
            alt: e.altKey,
            ctrl: e.ctrlKey,
            char: keyChar,
            code: e.charCode,
            key: e.keyCode,
            meta: e.metaKey,
            repeat: e.repeat,
            shift: e.shiftKey,
            identifier: e.key,
            currentKeys: this.currentKeys.slice(0)
        });
    },

    finfocusgained: function(e) {
        this.dispatchNewEvent(e, 'fin-canvas-focus-gained');
    },

    finfocuslost: function(e) {
        this.dispatchNewEvent(e, 'fin-canvas-focus-lost');
    },

    fincontextmenu: function(e) {
        if (e.ctrlKey && this.currentKeys.indexOf('CTRL') === -1) {
            this.currentKeys.push('CTRL');
        }
        if (this.doubleRightClickTimer && Date.now() - this.lastClickTime < this.doubleClickDelay) {
            //this is a double click...
            clearTimeout(this.doubleRightClickTimer); // prevent context menu event
            this.doubleRightClickTimer = undefined;
            this.findblclick(e);
        } else {
            this.lastClickTime = Date.now();

            this.doubleRightClickTimer = setTimeout(function() {
                this.doubleRightClickTimer = undefined;
                this.dispatchNewMouseKeysEvent(e, 'fin-canvas-context-menu', {
                    isRightClick: this.isRightClick(e)
                });
            }.bind(this), this.doubleClickDelay);
        }
    },

    repaint: function() {
        var fps = this.getFPS();
        this.dirty = true;
        if (!paintLoopRunning || fps === 0) {
            this.paintNow();
        }
    },

    getMouseLocation: function() {
        return this.mouseLocation;
    },

    getOrigin: function() {
        var rect = this.canvas.getBoundingClientRect();
        var p = new rectangular.Point(rect.left, rect.top);
        return p;
    },

    getLocal: function(e) {
        var rect = this.canvas.getBoundingClientRect();
        var p = new rectangular.Point(e.clientX - rect.left, e.clientY - rect.top);
        return p;
    },

    hasFocus: function() {
        return document.activeElement === this.canvas;
    },

    takeFocus: function() {
        var self = this;
        if (!this.hasFocus()) {
            setTimeout(function() {
                self.canvas.focus();
            }, 10);
        }
    },

    beDragging: function() {
        this.dragging = true;
        this.disableDocumentElementSelection();
    },

    beNotDragging: function() {
        this.dragging = false;
        this.enableDocumentElementSelection();
    },

    isDragging: function() {
        return this.dragging;
    },

    disableDocumentElementSelection: function() {
        var style = document.body.style;
        style.cssText = style.cssText + '-webkit-user-select: none';
    },

    enableDocumentElementSelection: function() {
        var style = document.body.style;
        style.cssText = style.cssText.replace('-webkit-user-select: none', '');
    },

    setFocusable: function(truthy) {
        this.focuser.style.display = truthy ? '' : 'none';
    },

    isRightClick: function(e) {
        var isRightMB;
        e = e || window.event;

        if ('which' in e) { // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
            isRightMB = e.which === 3;
        } else if ('button' in e) { // IE, Opera
            isRightMB = e.button === 2;
        }
        return isRightMB;
    },

    dispatchEvent: function(e) {
        return this.canvas.dispatchEvent(e);
    }
};

function paintLoopFunction(now) {
    if (!paintLoopRunning) {
        return;
    }
    for (var i = 0; i < paintables.length; i++) {
        try {
            paintables[i].tickPainter(now);
        } catch (e) {
            console.error(e);
        }
    }
    requestAnimationFrame(paintLoopFunction);
}
requestAnimationFrame(paintLoopFunction);

function resizablesLoopFunction(now) {
    if (!resizeLoopRunning) {
        return;
    }
    for (var i = 0; i < resizables.length; i++) {
        try {
            resizables[i].tickResizer(now);
        } catch (e) {
            console.error(e);
        }
    }
}
setInterval(resizablesLoopFunction, RESIZE_POLLING_INTERVAL);

function makeCharMap() {
    var map = [];

    var empty = ['', ''];

    for (var i = 0; i < 256; i++) {
        map[i] = empty;
    }

    map[27] = ['ESC', 'ESCSHIFT'];
    map[192] = ['`', '~'];
    map[49] = ['1', '!'];
    map[50] = ['2', '@'];
    map[51] = ['3', '#'];
    map[52] = ['4', '$'];
    map[53] = ['5', '%'];
    map[54] = ['6', '^'];
    map[55] = ['7', '&'];
    map[56] = ['8', '*'];
    map[57] = ['9', '('];
    map[48] = ['0', ')'];
    map[189] = ['-', '_'];
    map[187] = ['=', '+'];
    map[8] = ['BACKSPACE', 'BACKSPACESHIFT'];
    map[46] = ['DELETE', 'DELETESHIFT'];
    map[9] = ['TAB', 'TABSHIFT'];
    map[81] = ['q', 'Q'];
    map[87] = ['w', 'W'];
    map[69] = ['e', 'E'];
    map[82] = ['r', 'R'];
    map[84] = ['t', 'T'];
    map[89] = ['y', 'Y'];
    map[85] = ['u', 'U'];
    map[73] = ['i', 'I'];
    map[79] = ['o', 'O'];
    map[80] = ['p', 'P'];
    map[219] = ['[', '{'];
    map[221] = [']', '}'];
    map[220] = ['\\', '|'];
    map[220] = ['CAPSLOCK', 'CAPSLOCKSHIFT'];
    map[65] = ['a', 'A'];
    map[83] = ['s', 'S'];
    map[68] = ['d', 'D'];
    map[70] = ['f', 'F'];
    map[71] = ['g', 'G'];
    map[72] = ['h', 'H'];
    map[74] = ['j', 'J'];
    map[75] = ['k', 'K'];
    map[76] = ['l', 'L'];
    map[186] = [';', ':'];
    map[222] = ['\'', '|'];
    map[13] = ['RETURN', 'RETURNSHIFT'];
    map[16] = ['SHIFT', 'SHIFT'];
    map[90] = ['z', 'Z'];
    map[88] = ['x', 'X'];
    map[67] = ['c', 'C'];
    map[86] = ['v', 'V'];
    map[66] = ['b', 'B'];
    map[78] = ['n', 'N'];
    map[77] = ['m', 'M'];
    map[188] = [',', '<'];
    map[190] = ['.', '>'];
    map[191] = ['/', '?'];
    map[16] = ['SHIFT', 'SHIFT'];
    map[17] = ['CTRL', 'CTRLSHIFT'];
    map[18] = ['ALT', 'ALTSHIFT'];
    map[91] = ['COMMANDLEFT', 'COMMANDLEFTSHIFT'];
    map[32] = ['SPACE', 'SPACESHIFT'];
    map[93] = ['COMMANDRIGHT', 'COMMANDRIGHTSHIFT'];
    map[18] = ['ALT', 'ALTSHIFT'];
    map[38] = ['UP', 'UPSHIFT'];
    map[37] = ['LEFT', 'LEFTSHIFT'];
    map[40] = ['DOWN', 'DOWNSHIFT'];
    map[39] = ['RIGHT', 'RIGHTSHIFT'];

    map[33] = ['PAGEUP', 'PAGEUPSHIFT'];
    map[34] = ['PAGEDOWN', 'PAGEDOWNSHIFT'];
    map[35] = ['PAGERIGHT', 'PAGERIGHTSHIFT']; // END
    map[36] = ['PAGELEFT', 'PAGELEFTSHIFT']; // HOME

    map[112] = ['F1', 'F1SHIFT'];
    map[113] = ['F2', 'F2SHIFT'];
    map[114] = ['F3', 'F3SHIFT'];
    map[115] = ['F4', 'F4SHIFT'];
    map[116] = ['F5', 'F5SHIFT'];
    map[117] = ['F6', 'F6SHIFT'];
    map[118] = ['F7', 'F7SHIFT'];
    map[119] = ['F8', 'F8SHIFT'];
    map[120] = ['F9', 'F9SHIFT'];
    map[121] = ['F10', 'F10SHIFT'];
    map[122] = ['F11', 'F1S1HIFT'];
    map[123] = ['F12', 'F121HIFT'];

    return map;
}

module.exports = Canvas;
},{"./js/GraphicsContext.js":11,"rectangular":45}],11:[function(require,module,exports){
'use strict';

var consoleLogger = require('./gc-console-logger');

/**
 * @constructor
 * @param gc - The 2-D graphics context from your canvas
 * @param {boolean|apiLogger} [logger=true]
 * * `true` uses `gc-console-logger` function bound to 'gc.' as prefix
 * * string uses `gc-console-logger` function bound to string
 * * function used as is
 */
function GraphicsContext(gc, logger) {
    this.gc = gc;

    var self = this;
    var reWEBKIT = /^webkit/;

    switch (typeof logger) {

        case 'string':
            logger =  consoleLogger.bind(undefined, logger + '.');
            break;

        case 'boolean':
            if (logger === true) {
                logger = consoleLogger.bind(undefined, 'gc.');
            }
            break;

        case 'function':
            if (logger.length !== 3) {
                throw 'GraphicsContext: User-supplied API logger function does not accept three parameters.';
            }
            break;

        default:
            logger = false;
    }

    // Stub out all the prototype members of the canvas 2D graphics context:
    Object.keys(Object.getPrototypeOf(gc)).forEach(MakeStub);

    // Some older browsers (e.g., Chrome 40) did not have all members of canvas
    // 2D graphics context in the prototype so we make this additional call:
    Object.keys(gc).forEach(MakeStub);

    function MakeStub(key) {
        if (key in GraphicsContext.prototype || reWEBKIT.test(key)) {
            return;
        }
        if (typeof gc[key] === 'function') {
            self[key] = !logger ? gc[key].bind(gc) : function() {
                return logger(key, arguments, gc[key].apply(gc, arguments));
            };
        } else {
            Object.defineProperty(self, key, {
                get: function() {
                    var result = gc[key];
                    return logger ? logger(key, 'getter', result) : result;
                },
                set: function(value) {
                    gc[key] = logger ? logger(key, 'setter', value) : value;
                }
            });
        }
    }
}

module.exports = GraphicsContext;

},{"./gc-console-logger":12}],12:[function(require,module,exports){
'use strict';

var YIELDS = '\u27F9'; // LONG RIGHTWARDS DOUBLE ARROW

function consoleLogger(prefix, name, args, value) {
    var result = value;

    if (typeof value === 'string') {
        result = '"' + result + '"';
    }

    name = prefix + name;

    switch (args) {
        case 'getter':
            console.log(name, '=', result);
            break;

        case 'setter':
            console.log(name, YIELDS, result);
            break;

        default: // method call
            name += '(' + Array.prototype.slice.call(args).join(', ') + ')';
            if (result === undefined) {
                console.log(name);
            } else {
                console.log(name, YIELDS, result);
            }
    }

    return value;
}

module.exports = consoleLogger;

},{}],13:[function(require,module,exports){
'use strict';

module.exports = {
    JSDataSource: require('./js/DataSource'),
    DataSourceSorter: require('./js/DataSourceSorter'),
    DataSourceSorterComposite: require('./js/DataSourceSorterComposite'),
    DataSourceGlobalFilter: require('./js/DataSourceGlobalFilter'),
    DataSourceGroupView: require('./js/DataSourceGroupView'),
    DataSourceAggregator: require('./js/DataSourceAggregator'),
    DataSourceTreeview: require('./js/DataSourceTreeview'),
    DataSourceTreeviewFilter: require('./js/DataSourceTreeviewFilter'),
    DataSourceTreeviewSorter: require('./js/DataSourceTreeviewSorter'),
    DataNodeGroupSorter: require('./js/DataNodeGroupSorter'),
    util: {
        aggregations: require('./js/util/aggregations'),
        Mappy: require('./js/util/Mappy'),
        stableSort: require('./js/util/stableSort'),
        headerify: require('./js/util/headerify')
    }
};

},{"./js/DataNodeGroupSorter":21,"./js/DataSource":24,"./js/DataSourceAggregator":25,"./js/DataSourceGlobalFilter":27,"./js/DataSourceGroupView":28,"./js/DataSourceSorter":30,"./js/DataSourceSorterComposite":31,"./js/DataSourceTreeview":32,"./js/DataSourceTreeviewFilter":33,"./js/DataSourceTreeviewSorter":34,"./js/util/Mappy":35,"./js/util/aggregations":36,"./js/util/headerify":37,"./js/util/stableSort":38}],14:[function(require,module,exports){
'use strict';


var AggregatorNodeBaseMixin = {
    getRowData: function(aggregator) {
        var index = this.getIndex();

        if (index.length) {
            var groupsOffset = Number(aggregator.hasGroups());

            // redimension the data
            var data = this.data;
            data.length = groupsOffset + aggregator.aggregates.length;

            var sorter = aggregator.sorterInstance;
            sorter.index = index;

            aggregator.aggregates.forEach(function(aggregate, i) {
                data[groupsOffset + i] = aggregate(sorter);
            });
        }
    }
};

module.exports = AggregatorNodeBaseMixin;

},{}],15:[function(require,module,exports){
'use strict';

var AggregatorNodeBaseMixin = require('./AggregatorNodeBaseMixin');
var DataNodeGroup = require('./DataNodeGroup');

/**
 * @constructor
 * @extends DataNodeBase
 */
var AggregatorNodeGroup = DataNodeGroup.extend('AggregatorNodeGroup', {
    getRowData: function (drillDown) {
        AggregatorNodeBaseMixin.getRowData.apply(this, arguments);
        if (this.expanded) {
            this.children.forEach(function (child) {
                child.getRowData(drillDown);
            });
        }
    }
});

module.exports = AggregatorNodeGroup;

},{"./AggregatorNodeBaseMixin":14,"./DataNodeGroup":20}],16:[function(require,module,exports){
'use strict';

var AggregatorNodeBaseMixin = require('./AggregatorNodeBaseMixin');
var DataNodeLeaf = require('./DataNodeLeaf');

/**
 * @constructor
 * @extends DataNodeBase
 */
var AggregatorNodeLeaf = DataNodeLeaf.extend('AggregatorNodeLeaf', AggregatorNodeBaseMixin);

module.exports = AggregatorNodeLeaf;

},{"./AggregatorNodeBaseMixin":14,"./DataNodeLeaf":22}],17:[function(require,module,exports){
'use strict';

var AggregatorNodeBaseMixin = require('./AggregatorNodeBaseMixin');
var DataNodeTree = require('./DataNodeTree');

/**
 * @constructor
 * @extends DataNodeBase
 */
var AggregatorNodeTree = DataNodeTree.extend('AggregatorNodeTree', {
    getRowData: function (drillDown) {
        AggregatorNodeBaseMixin.getRowData.apply(this, arguments);
        if (this.expanded) {
            this.children.forEach(function (child) {
                child.getRowData(drillDown);
            });
        }
    }
});

module.exports = AggregatorNodeTree;

},{"./AggregatorNodeBaseMixin":14,"./DataNodeTree":23}],18:[function(require,module,exports){
'use strict';

var Base = require('fin-hypergrid-data-source-base');

// Following are for legacy methods

Base.prototype.getFields = function() {
    if (this.dataSource) {
        return this.dataSource.getFields();
    }
};

Base.prototype.getHeaders = function() {
    if (this.dataSource) {
        return this.dataSource.getHeaders();
    }
};

Base.prototype.getCalculators = function() {
    if (this.dataSource) {
        return this.dataSource.revealRow();
    }
};

Base.prototype.setFields = function(arr) {
    if (this.dataSource) {
        return this.dataSource.setFields.call(this.dataSource, arr);
    }
};

Base.prototype.setHeaders = function(arr) {
    if (this.dataSource) {
        return this.dataSource.setHeaders.call(this.dataSource, arr);
    }
};

module.exports = Base;

},{"fin-hypergrid-data-source-base":8}],19:[function(require,module,exports){
'use strict';

var Base = require('./Base');

/**
 * See {@link DataBaseNode#initialize|initialize()} method for parameters.
 * @constructor
 */
var DataNodeBase = Base.extend('DataNodeBase', {

    isNullObject: false,

    INDENT: '   ', // 3 spaces

    /**
     * @memberOf DataNodeBase#
     * @param {string} key
     */
    initialize: function(key) {
        /**
         * @memberOf DataNodeBase#
         * @type {string}
         */

        this.label = key;

        /**
         * @memberOf DataNodeBase#
         * @type {string[]}
         * @default false
         */
        this.data = [''];

        /**
         * @memberOf DataNodeBase#
         * @type {number[]}
         * @default ['']
         */
        this.index = []; // formerly rowIndex

        /**
         * @memberOf DataNodeBase#
         * @type {boolean}
         * @default false
         */
        this.hasChildren = true;

        /**
         * @memberOf DataNodeBase#
         * @type {number}
         * @default 0
         */
        this.depth = 0;

        /**
         * @memberOf DataNodeBase#
         * @type {number}
         * @default 1
         */
        this.height = 1;

        /**
         * @memberOf DataNodeBase#
         * @type {boolean}
         * @default false
         */
        this.expanded = false;
    },

    /**
     * @memberOf DataNodeLeaf#
     * @param x
     * @returns {*}
     */
    getValue: function(x) {
        return this.data[x];
    },

    /**
     * @memberOf DataNodeLeaf#
     * @param depth
     */
    toArray: function(depth) {
        this.depth = depth;
        this.data[0] = this.computeDepthString();
    },

    /**
     * @memberOf DataNodeLeaf#
     * @returns {string}
     */
    computeDepthString: function() {
        return Array(this.depth + 1).join(this.INDENT) + '  ' + this.label;
    },

    /**
     * @memberOf DataNodeLeaf#
     * @returns {number}
     */
    computeHeight: function() {
        return 1;
    },

    /**
     * @memberOf DataNodeLeaf#
     * @returns {Array}
     */
    getIndex: function() { // TODO: formerly getAllRowIndexes
        return this.index;
    },

    /**
     * @memberOf DataNodeLeaf#
     * @param drillDown
     */
    getRowData: function(drillDown) {
        var index = this.getIndex();

        if (index.length) {
            // Group and Tree nodes will have no data besides the tree column
            this.data.length = drillDown.getColumnCount();
        }
    },

    /**
     * @memberOf DataNodeLeaf#
     * @param drillDown
     */
    buildView: function(drillDown) {
        drillDown.addView(this);
    },

    /**
     * @memberOf DataNodeLeaf#
     */
    toggleExpansionState: function() {
        //do nothing by default
    },

    sortGroups: function(groupSorter) {
    }
});


module.exports = DataNodeBase;

},{"./Base":18}],20:[function(require,module,exports){
'use strict';

var Map = require('./util/Mappy');
var DataNodeBase = require('./DataNodeBase');

var expandedMap = {
    true: '\u25bc', // BLACK DOWN-POINTING TRIANGLE aka '▼'
    false: '\u25b6' // BLACK RIGHT-POINTING TRIANGLE aka '▶'
};

/**
 * > See {@link DataNodeGroup#initialize|initialize()} method for constructor parameters.
 * @constructor
 * @extends DataNodeBase
 */
var DataNodeGroup = DataNodeBase.extend('DataNodeGroup', {

    extendable: true,

    /**
     * @memberOf DataNodeGroup#
     * @param key
     */
    initialize: function(key) {
        this.children = new Map();
    },

    /**
     * @memberOf DataNodeGroup#
     * @param depth
     */
    toArray: function(depth) {
        this.depth = depth;
        this.children = this.children.values;
        this.children.forEach(function(child) {
            child.toArray(depth + 1);
        });
        this.data[0] = this.computeDepthString();
    },

    /**
     * @memberOf DataNodeGroup#
     * @returns {string}
     */
    computeDepthString: function() {
        var string = Array(this.depth + 1).join(this.INDENT) +
            expandedMap[this.expanded] + ' ' +
            this.label;
        return string;
    },

    /**
     * @memberOf DataNodeGroup#
     * @returns {*}
     */
    getIndex: function() {
        if (this.index.length === 0) {
            this.index = this.computeIndex();
        }
        return this.index;
    },

    /**
     * @memberOf DataNodeGroup#
     * @returns {Array}
     */
    computeIndex: function() { // TODO: formerly computeAllRowIndexes
        var result = [];
        result.append = append;
        this.children.forEach(function(child) {
            result.append(child.getIndex());
        });
        return result;
    },

    /**
     * @memberOf DataNodeGroup#
     * @param drillDown
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @returns {boolean} If this call resulted in a state change.
     */
    toggleExpansionState: function(drillDown, expand) { /* aggregator */
        if (expand === undefined) {
            expand = !this.expanded;
        }
        var changed = this.expanded ^ expand;
        this.expanded = expand;
        this.data[0] = this.computeDepthString();
        if (this.expanded) {
            this.getRowData(drillDown);
        }
        return !!changed;
    },

    /**
     * @memberOf DataNodeGroup#
     * @param drillDown
     */
    getRowData: function(drillDown) {
        DataNodeBase.prototype.getRowData.call(this, drillDown); // call base class's version
        if (this.expanded) {
            this.children.forEach(function(child) {
                child.getRowData(drillDown);
            });
        }
    },

    /**
     * @memberOf DataNodeGroup#
     * @param aggregator
     */
    buildView: function(drillDown) {
        drillDown.view.push(this);
        if (this.expanded) {
            this.children.forEach(function(child) {
                child.buildView(drillDown);
            });
        }
    },

    /**
     * @memberOf DataNodeGroup#
     * @returns {number}
     */
    computeHeight: function() {
        var height = 1;

        if (this.expanded) {
            this.children.forEach(function(child) {
                height = height + child.computeHeight();
            });
        }

        return (this.height = height);
    },

    sortWith: function(sorter) {
        if (this.expanded) {
            sorter.sortGroup(this);
            this.children.forEach(function(child) {
                child.sortWith(sorter);
            });
        }
    },
    clearGroupSorts: function() {
        if (this.originalOrder) {
            for (var i = 0; i < this.originalOrder.length; i++) {
                this.children[i] = this.originalOrder[i];
            }
        }
        this.children.forEach(function(child) {
            child.clearGroupSorts();
        });
    }

});

/**
 * @private
 * @summary Array mixin to append another array to end of `this` one.
 * @desc Appends in place, unlike `this.concat()` which creates a new array.
 * Uses less memory than concat, important when `appendix` is huge.
 * > CAUTION: Mutates `this` array!
 * @param {Array} appendix
 * @returns {Array} Reference to `this` (for convenience)
 */
function append(appendix) {
    this.splice.bind(this, this.length, 0).apply(this, appendix);
    return this;
}

module.exports = DataNodeGroup;

},{"./DataNodeBase":19,"./util/Mappy":35}],21:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var stableSort = require('./util/stableSort').sort;

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataNodeGroupSorter = Base.extend('DataNodeGroupSorter', {

    /**
     * @memberOf DataNodeGroupSorter#
     */
    initialize: function(dataSource) {
        this.dataSource = dataSource;
        this.sorts = [];

    },
    /**
     *  @memberOf DataSourceSorterComposite#
     *  @param columnIndex
     *  @param direction
     */

    sortOn: function(columnIndex, direction) {
        this.sorts.push({ columnIndex: columnIndex, direction: direction });
    },
    /**
     *
     * @memberOf DataNodeGroupSorter#
     * @param {sorterFunction} [sorter] - If undefined, deletes sorter.
     */
    set: function(sorter) {
        if (sorter) {
            /**
             * @implements sorterInterfacei
             * @memberOf DataSourceSorterComposite#
             */
            this.sorter = sorter;
        } else {
            delete this.sorter;
        }
    },

    get: function() {
        return this.sorter;
    },

    /**
     * @memberOf DataNodeGroupSorter#
     */
    apply: function() {
        this.dataSource.sortGroups(this);
    },

    /**
     * @memberOf DataSourceSorterComposite#
     */
    clearSorts: function() {
        this.sorts.length = 0;
        this.dataSource.buildView();
    },

    sortGroup: function(group) {
        if (!group.originalOrder) {
            group.originalOrder = group.children.slice(0);
        }

        // get list of sorts from either API or use existing
        this.sorts = (this.sorter && this.sorter.prop('sorts')) || this.sorts;
        for (var i = this.sorts.length - 1; i >= 0; i--) {
            this.sortGroupOnEach(group, this.sorts[this.sorts.length - i - 1]);
        }
    },

    sortGroupOnEach: function(group, sortSpec) {
        // we actually sort the children here....
        var children = group.children.slice(0);
        var indexVector = [];

        for (var i = 0; i < children.length; i++) {
            indexVector[i] = i;
        }

        stableSort(indexVector, function(rowNumber) {
            var child = children[rowNumber];
            if (sortSpec.columnIndex === 0) {
                return child.label;
            }
            return child.data[sortSpec.columnIndex];
        }, sortSpec.direction);

        for (i = 0; i < children.length; i++) {
            group.children[i] = children[indexVector[i]];
        }
    }

});

DataNodeGroupSorter.prototype.applySorts = function() {
    (console.warn || console.log).call(console, 'applySorts deprecated; use apply');
    this.apply();
};

Object.defineProperty(DataNodeGroupSorter.prototype, 'type', { value: 'sorter' }); // read-only property

module.exports = DataNodeGroupSorter;

},{"./Base":18,"./util/stableSort":38}],22:[function(require,module,exports){
'use strict';

var DataNodeBase = require('./DataNodeBase');

/**
 * @constructor
 * @extends DataNodeBase
 */
var DataNodeLeaf = DataNodeBase.extend('DataNodeLeaf', {

    /**
     * @memberOf DataNodeLeaf#
     * @param {string} key
     */
    initialize: function(key) {
        this.hasChildren = false;
    },

    /**
     * @memberOf DataNodeLeaf#
     * @param depth
     */
    toArray: function(depth) {
        this.depth = depth;
        this.data[0] = this.computeDepthString();
    },

    /**
     * @memberOf DataNodeLeaf#
     * @returns {numer[]}
     */
    getIndex: function() {
        return this.index;
    },

    /**
     * @memberOf DataNodeLeaf#
     * @param drillDown
     */
    buildView: function(drillDown) {
        drillDown.addView(this);
    },

    /**
     * @memberOf DataNodeLeaf#
     * @param aggregator
     */
    getRowData: function(drillDown) {
        var index = this.getIndex();

        if (index.length) {
            var groupsOffset = Number(drillDown.hasGroups()),
                data = this.data,
                dataLen = drillDown.getColumnCount() + groupsOffset,
                i = 0,
                sorter = drillDown.sorterInstance;

            sorter.index = index;

            for (i; i < dataLen; i++) {
                data[groupsOffset + i] = sorter.getValue(i, 0);
            }
        }
    },

    /**
     * @memberOf DataNodeLeaf#
     * @returns {number}
     */
    computeHeight: function() {
        return 1;
    },

    sortWith: function(sorter) {
      // do nothing we have no children to sort
    },

    clearGroupSorts: function() {
      // do nothing we have no children to sort
    }

});

module.exports = DataNodeLeaf;

},{"./DataNodeBase":19}],23:[function(require,module,exports){
'use strict';

var DataNodeGroup = require('./DataNodeGroup');

/**
 * See {@link DataNodeGroup#initialize|initialize()} method for parameters.
 * @constructor
 * @extends DataNodeGroup
 */
var DataNodeTree = DataNodeGroup.extend('DataNodeTree', {

    /**
     * @memberOf DataNodeGroup#
     * @param {string} key
     */
    initialize: function(key) {
        this.height = 0;
        this.expanded = true;
    },

    /**
     * @memberOf DataNodeGroup#
     */
    toArray: function() {
        this.children = this.children.values;
        this.children.forEach(function(child) {
            child.toArray(0);
        });
    },

    /**
     * @memberOf DataNodeGroup#
     * @param drillDown
     */
    buildView: function(drillDown) {
        this.children.forEach(function(child) {
            child.buildView(drillDown);
        });
    },

    /**
     * @memberOf DataNodeGroup#
     * @returns {number}
     */
    computeHeight: function() {
        var height = 1;

        this.children.forEach(function(child) {
            height = height + child.computeHeight();
        });

        return (this.height = height);
    }

});

module.exports = DataNodeTree;

},{"./DataNodeGroup":20}],24:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var headerify = require('./util/headerify');

/**
 * @constructor
 * @param {object[]} data
 * @param {string[]} fields
 */
var DataSource = Base.extend('DataSource', {
    initialize: function(data, fields, calculators) {
        /**
         * @summary The array of data row objects.
         * @desc Access through {@link DataSource#getRow|getRow()}.
         * @name data
         * @type {object[]}
         * @memberOf DataSource#
         */
        this.data = data;

        /**
         * @summary The list of field names.
         * @desc These are all the members of the data row objects visible to Hypergrid.
         *
         * Access through {@link DataSource#getFields|getFields()}.
         * @name fields
         * @type {string[]}
         * @memberOf DataSource#
         */
        this.fields = fields || computeFieldNames(data[0]);

        /**
         * @summary The list of calculators that implement computed columns.
         * @desc Congruent to {@link DataSource#fields|fields}.
         *
         * Elements representing regular (non-computed) fields should contain `undefined`.
         * @name calculators
         * @type {function[]}
         * @memberOf DataSource#
         */
        this.calculators = calculators || Array(this.fields.length);
    },

    isNullObject: false,

    getDataIndex: function(y) {
        return y;
    },

    /**
     * @memberOf DataSource#
     * @param y
     * @returns {object[]}
     */
    getRow: function(y) {
        return this.data[y];
    },

        /**
     * @summary Find, replace, or update a row by it's primary key column.
     * @param {string|object} columnName - One of:
     * * _string_ - Column name. See `value`.
     * * _object_ - Hash of 0 or more key-value pairs to search for.
     * @param {string[]|*} [value] - One of:
     * _omitted_ - When `columnName` is a hash and you want to search all its keys.
     * _string[]_ - When `columnName` is a hash but you only want to search certain keys.
     * _otherwise_ - When `columnName` is a string. Value to search for.
     * Note that `null` is a valid search value.
     * @param {object|null|undefined} [replacement] - One of:
     * * _omitted_ - Ignored.
     * * _object_ - Replacement for the data row if found.
     * * `null` - Flag to delete the data row if found. The found data row is nonetheless returned.
     * * `undefined` - Flag to return index of found row instead of row object itself.
     * @returns {object|number|undefined} One of:
     * * `undefined` - data row not found
     * * _object_ - found data row object (will have been deleted if `replacement` was `null`)
     * * _number_ - index of found data row object in `this.data` (if `replacement` was `undefined`)
     * @todo Use a binary search (rather than `Array..find`) when column is known to be indexed (sorted).
     * @memberOf DataSource#
     */
    findRow: function findRow(columnName, value, replacement) {
        var result, index, keys, hash, args;

        if (typeof columnName === 'object') {
            hash = columnName;

            if (value instanceof Array) {
                args = 2;
                keys = value;
                if (keys.reduce(function(sum, key) {
                    if (key in hash) {
                        sum++;
                    }
                    return sum;
                }, 0) !== keys.length) {
                    throw 'Expected all keys given in 2nd arg to be found in hash given in 1st arg.';
                }
            } else {
                args = 1;
                keys = Object.keys(hash);
                replacement = value; // promote
            }

            if (keys.length === 1) {
                columnName = keys[0];
                value = hash[columnName];
                hash = undefined;
            } else if (keys.length) {
                result = this.data.find(function(row, idx) {
                    if (!row) {
                        return;
                    }
                    index = idx;
                    for (var key in keys) {
                        columnName = keys[key];
                        if (row[columnName] !== hash[columnName]) {
                            return; // bail
                        }
                    }
                    return true; // found!
                });
            }
        } else {
            if (arguments.length < 2) {
                throw 'Expected at least 2 arguments when first argument not object but found ' + arguments.length + '.';
            }
            args = 2;
        }

        if (!hash) {
            result = this.data.find(function(row, idx) {
                if (!row) { return; }
                index = idx;
                return row[columnName] === value;
            });
        }

        if (result) {
            this.foundRowIndex = index;
            if (replacement === null) {
                this.data.splice(index, 1);
            } else if (typeof replacement === 'object') {
                this.data[index] = replacement;
            } else if (replacement === undefined) {
                if (arguments.length > args) {
                    delete this.data[index];
                }
            } else {
                throw 'Expected null, undefined, or object but found ' + typeof replacement + '.';
            }
        } else {
            this.foundRowIndex = undefined;
        }

        return result;
    },

    /**
     * @memberOf DataSource#
     * @param x
     * @param y
     * @returns {*}
     */
    getValue: function(x, y) {
        var row = this.getRow(y);
        if (!row) {
            return null;
        }
        return row[this.fields[x]];
    },

    /**
     * @memberOf DataSource#
     * @param {number} x
     * @param {number} y
     * @param value
     */
    setValue: function(x, y, value) {
        this.getRow(y)[this.fields[x]] = value;
    },

    /**
     * @memberOf DataSource#
     * @returns {number}
     */
    getRowCount: function() {
        return this.data.length;
    },

    /**
     * @memberOf DataSource#
     * @returns {number}
     */
    getColumnCount: function() {
        return this.getFields().length;
    },

    /**
     * @memberOf DataSource#
     * @returns {number[]}
     */
    getFields: function() {
        return this.fields;
    },

    /**
     * @memberOf DataSource#
     * @returns {string[]}
     */
    getHeaders: function() {
        return (
            /**
             * @summary The list of header strings.
             * @desc Congruent to {@link DataSource#fields|fields}.
             *
             * Access through {@link DataSource#getHeaders|getHeaders()}.
             * @name headers
             * @type {string[]}
             * @memberOf DataSource#
             */
            this.headers = this.headers || this.getDefaultHeaders().map(function(each) {
                return headerify.transform(each);
            })
        );
    },

    /**
     * @memberOf DataSource#
     * @returns {string[]}
     */
    getDefaultHeaders: function() {
        return this.getFields();
    },

    /**
     * @memberOf DataSource#
     * @param {string[]} fields
     */
    setFields: function(fields) {
        this.fields = fields;
    },

    /**
     * @memberOf DataSource#
     * @param {string[]} headers
     */
    setHeaders: function(headers) {
        if (!(headers instanceof Array)) {
            error('setHeaders', 'param #1 `headers` not array');
        }
        this.headers = headers;
    },

    /**
     * @memberOf DataSource#
     */
    getGrandTotals: function() {
        //nothing here
    },

    /**
     * @memberOf DataSource#
     * @param arrayOfUniformObjects
     */
    setData: function(arrayOfUniformObjects) {
        this.data = arrayOfUniformObjects;
    }
});

function error(methodName, message) {
    throw new Error('DataSource.' + methodName + ': ' + message);
}

/**
 * @private
 * @param {object} object
 * @returns {string[]}
 */
function computeFieldNames(object) {
    if (!object) {
        return [];
    }
    return Object.getOwnPropertyNames(object || []).filter(function(e) {
        return e.substr(0, 2) !== '__';
    });
}

module.exports = DataSource;

},{"./Base":18,"./util/headerify":37}],25:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var DataSourceSorter = require('./DataSourceSorter');
var DataNodeTree = require('./AggregatorNodeTree');
var DataNodeGroup = require('./AggregatorNodeGroup');
var DataNodeLeaf = require('./AggregatorNodeLeaf');
var headerify = require('./util/headerify');

/**
 * @constructor
 * @param {DataSource} dataSource
 */
var DataSourceAggregator = Base.extend('DataSourceAggregator', {
    initialize: function(dataSource) {

        /**
         * @memberOf DataSourceAggregator#
         * @type {DataSource}
         */
        this.dataSource = dataSource;

        /**
         * @memberOf DataSourceAggregator#
         * @type {DataSource}
         */
        this.treeColumnIndex = 0;

        /**
         * @memberOf DataSourceAggregator#
         * @type {DataNodeTree}
         */
        this.tree = new DataNodeTree('Totals');

        /**
         * @memberOf DataSourceAggregator#
         * @type {number[]}
         * @default []
         */
        this.index = [];

        /**
         * @memberOf DataSourceAggregator#
         * @type {Array}
         * @default []
         */
        this.aggregates = [];

        /**
         * @memberOf DataSourceAggregator#
         * @type {Array}
         * @default []
         */
        this.groupBys = [];

        /**
         * @memberOf DataSourceAggregator#
         * @type {Array}
         * @default []
         */
        this.view = [];

        /**
         * @memberOf DataSourceAggregator#
         * @type {object}
         * @default {}
         */
        this.sorterInstance = {};

        /**
         * @memberOf DataSourceAggregator#
         * @type {boolean}
         * @default true
         */
        this.presortGroups = true;

        /**
         * @memberOf DataSourceAggregator#
         * @type {object}
         * @default {}
         */
        this.lastAggregate = {};

        this.setAggregates({});
    },

    isNullObject: false,


    /**
     * @memberOf DataSourceAggregator#
     * @param aggregations, groups
     */
    setAggregateGroups: function(aggregations, groups) {
        this.setGroupBys(groups);
        this.setAggregates(aggregations);
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param aggregations
     */
    setAggregates: function(aggregations) {
        this.lastAggregate = aggregations;
        this.clearAggregations();

        for (var key in aggregations) {
            this.addAggregate(key, aggregations[key]);
        }

    },

    getFields: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getFields();
        }
        var fields = this.getHeaders().map(function(e) {
            return e.toLowerCase().split(' ').join('_');
        });
        return fields;
    },

    getHeaders: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getHeaders();
        }
        var headers = this.aggregates.map(function(e) {
            return e.header;
        });
        if (this.hasGroups()) {
            headers.unshift('Tree');
        }
        return headers;
    },
    /**
     * @memberOf DataSourceAggregator#
     * @param label
     * @param func
     */
    addAggregate: function(label, func) {
        func.header = headerify.transform(label);
        this.aggregates.push(func);
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param columnIndexArray
     */
    setGroupBys: function(columnIndexArray) {
        var groupBys = this.groupBys;
        groupBys.length = 0;
        columnIndexArray.forEach(function(columnIndex) {
            groupBys.push(columnIndex);
        });
        this.setAggregates(this.lastAggregate);
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param index
     */
    addGroupBy: function(index) {
        this.groupBys.push(index);
    },

    /**
     * @memberOf DataSourceAggregator#
     * @returns {boolean}
     */
    hasGroups: function() {
        return !!this.groupBys.length;
    },

    /**
     * @memberOf DataSourceAggregator#
     * @returns {boolean}
     */
    hasAggregates: function() {
        return !!this.aggregates.length;
    },

    /**
     * @memberOf DataSourceAggregator#
     * @params [options]
     */
    apply: function(options) {
        options  = options || {};
        if (!options.rowClick && !options.columnSort){
            this.buildGroupTree();
        }
    },

    /**
     * @memberOf DataSourceAggregator#
     */
    clearGroups: function() {
        this.groupBys.length = 0;
    },

    /**
     * @memberOf DataSourceAggregator#
     */
    clearAggregations: function() {
        this.aggregates.length = 0;
    },

    /**
     * @memberOf DataSourceAggregator#
     */
    buildGroupTree: function() {
        var reversedGroupBys = this.groupBys.slice(0).reverse(),
            leafDepth = this.groupBys.length - 1,
            source = this.dataSource,
            rowCount = source.getRowCount(),
            tree = this.tree = new DataNodeTree('Totals');

        // first sort data
        if (this.presortGroups) {
            reversedGroupBys.forEach(function(groupBy) {
                source = new DataSourceSorter(source);
                source.sortOn(groupBy);
            });
        }

        for (var r = 0; r < rowCount; r++) {
            var path = tree;

            this.groupBys.forEach(function(g, c) { // eslint-disable-line no-loop-func
                var key = source.getValue(g, r),
                    factoryDataNode = (c === leafDepth) ? factoryDataNodeLeaf : factoryDataNodeGroup;
                path = path.children.getIfUndefined(key, factoryDataNode);
            });

            path.index.push(r);
        }

        this.sorterInstance = new DataSourceSorter(source);
        tree.toArray();
        tree.getRowData(this);
        this.buildView();
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param dataNode
     */
    addView: function(dataNode) {
        this.view.push(dataNode);
    },

    /**
     * @memberOf DataSourceAggregator#
     */
    buildView: function() {
        this.view.length = 0;
        this.tree.computeHeight();
        this.tree.buildView(this);
    },

    /**
     * @memberOf DataSourceAggregator#
     * @returns {*|boolean}
     */
    viewMakesSense: function() {
        return this.hasAggregates() && this.hasGroups();
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param {number} columnIndex
     * @returns {*|boolean}
     */
    isDrillDown: function(columnIndex) {
        var result = this.viewMakesSense();
        if (result && columnIndex) {
            result = columnIndex === this.treeColumnIndex;
        }
        return result;
    },

    getDataIndex: function(y) {
        return this.viewMakesSense() ? y : this.dataSource.getDataIndex(y);
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param x
     * @param y
     * @returns {*}
     */
    getValue: function(x, y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getValue(x, y);
        }
        var row = this.view[y];
        return row ? row.getValue(x) : null;
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param x
     * @param y
     * @param value
     * @returns {*}
     */
    setValue: function(x, y, value) {
        if (!this.viewMakesSense()) {
            return this.dataSource.setValue(x, y, value);
        }
    },

    /**
     * @memberOf DataSourceAggregator#
     * @returns {*}
     */
    getColumnCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getColumnCount();
        }
        return this.getHeaders().length;
    },

    /**
     * @memberOf DataSourceAggregator#
     * @returns {*}
     */
    getRowCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRowCount();
        }
        return this.view.length; //header column
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param y
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @param {number} [depth=Infinity] - One of:
     * * number > 0 - Apply only if row depth is above the given depth.
     * * number <= 0 - Apply only if row depth is below the given depth.
     * @returns {undefined|boolean} One of:
     * * `undefined` - row was not expandable
     * * `true` - row was expandable _and_ state changed
     * * `false` - row was expandable _but_ state did _not_ change
     */
    click: function(y, expand, depth) {
        if (!this.viewMakesSense()) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }
        var group = this.view[y], expandable, changed;
        if (
            group && (
                depth === undefined ||
                depth > 0 && group.depth < depth ||
                depth <= 0 && group.depth >= -depth
            )
        ) {
            changed = group.toggleExpansionState(this, expand);
            if ((expandable = group.children)) {
                this.buildView();
            }
        }

        return expandable ? changed : undefined;
    },

    /**
     * @memberOf DataSourceAggregator#
     * @returns {object[]}
     */
    getGrandTotals: function() {
        var view = this.tree;
        return [view.data];
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param y
     * @returns {*}
     */
    getRow: function(y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRow(y);
        }

        var rollups = this.view[y];

        return rollups ? rollups : this.tree;
    },

    /**
     * @memberOf DataSourceAggregator#
     * @param arrayOfUniformObjects
     */
    setData: function(arrayOfUniformObjects) {
        this.dataSource.setData(arrayOfUniformObjects);
        this.apply();
    },

    sortGroups: function(groupSorter) {
        this.tree.clearGroupSorts();
        this.tree.sortWith(groupSorter);
        this.buildView();
    }
});

function factoryDataNodeLeaf(key) {
    return new DataNodeLeaf(key);
}

function factoryDataNodeGroup(key) {
    return new DataNodeGroup(key);
}

Object.defineProperty(DataSourceAggregator.prototype, 'type', { value: 'aggregator' }); // read-only property

module.exports = DataSourceAggregator;

},{"./AggregatorNodeGroup":15,"./AggregatorNodeLeaf":16,"./AggregatorNodeTree":17,"./Base":18,"./DataSourceSorter":30,"./util/headerify":37}],26:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');
var stableSort = require('./util/stableSort');

/**
 * @classdesc Sorts on non-terminal tree node rows only (_i.e.,_ expandable rows with children).
 *
 * One of these sorters is created by {@link DataSourceTreeviewSorter} for each grouping level, starting with the maximum group level depth, and then one for each group level through the top level (0) sort depth.
 * @constructor
 * @param dataSource
 * @extends DataSourceIndexed
 */
var DataSourceDepthSorter = DataSourceIndexed.extend('DataSourceDepthSorter', {
    initialize: function(dataSource, treeView) {
        this.idColumnName = treeView.idColumn.name;
        this.parentIdColumnName = treeView.parentIdColumn.name;
    },

    /**
     * @desc Stable-sorts non-terminal tree node rows. Terminal (leaf) rows remain stable.
     * @param {number} groupLevel - If greater than row depth, sorts on an _edge value_ value, which is a value lexically inferior to (ascending sort) or superior to (descending sort) the row value.
     * Otherwise sorts on value of ancestor of this depth.
     *
     * @param {number} [direction=1] - One of:
     * `1` - Sort ascending.
     * `-1` - Sort descending.
     * @param {number} [columnIndex] - Sorts on the values in this column. Otherwise sorts on the row index.
     * @memberOf DataSourceDepthSorter#
     */
    sortOn: function(groupLevel, direction, columnIndex) {
        switch (direction) {
            case 0:
                this.clearIndex();
                break;

            case undefined:
            case 1:
            case -1:
                if (this.dataSource.getRowCount()) {
                    var getValue;

                    this.buildIndex();

                    // used in getValue:
                    this.depth = 0;
                    this.edge = direction === -1 ? +Infinity : -Infinity; // for numbers, date objects

                    if (columnIndex === undefined) {
                        getValue = getRowIndex.bind(this);
                    } else {
                        getValue = getColumnValue.bind(this);
                        this.columnName = this.dataSource.getFields()[columnIndex];
                        this.calculator = this.dataSource.getProperty('calculators')[columnIndex];
                        if (typeof getValue(0) === 'string') {
                            this.edge = direction === -1 ? '\uffff' : ''; // for strings
                        }
                    }

                    this.depth = groupLevel;
                    stableSort.sort(this.index, getValue, direction);
                }
                break;
        }
    }
});

function getRowIndex(rowIdx) {
    var parentID,
        dataRow = this.dataSource.getRow(rowIdx);

    if (dataRow.__DEPTH < this.depth) {
        return this.edge;
    }

    rowIdx = this.getDataIndex(rowIdx);

    // bubble up to group label of requested depth while either...
    while (
        // ...this is a leaf row
        dataRow.__EXPANDED === undefined ||
        // ...or: still deeper than the requested depth
        dataRow.__DEPTH > this.depth
    ) {
        parentID = dataRow[this.parentIdColumnName];
        if (parentID == null) { break; }
        dataRow = this.findRow(this.idColumnName, parentID);
        rowIdx = this.getProperty('foundRowIndex');
    }

    return rowIdx;
}

function getColumnValue(rowIdx) {
    var parentID,
        dataRow = this.dataSource.getRow(rowIdx);

    if (dataRow.__DEPTH < this.depth) {
        return this.edge;
    }

    // bubble up to group label of requested depth while either...
    while (
        // ...this is a leaf row
        dataRow.__EXPANDED === undefined ||
        // ...or: still deeper than the requested depth
        dataRow.__DEPTH > this.depth
    ) {
        parentID = dataRow[this.parentIdColumnName];
        if (parentID == null) { break; }
        dataRow = this.findRow(this.idColumnName, parentID);
    }

    return DataSourceIndexed.valOrFunc.call(dataRow, this.columnName, this.calculator);
}

module.exports = DataSourceDepthSorter;

},{"./DataSourceIndexed":29,"./util/stableSort":38}],27:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');

/**
 * @interface filterInterface
 */

/**
 * @name filterInterface#test
 * @method
 * @param {object} dataRow - Object representing a row in the grid containing all the fields listed in {@link DataSource#fields|fields}.
 * @returns {boolean}
 * * `true` - include in grid (row passes through filter)
 * * `false` - exclude from grid (row is blocked by filter)
 */

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceGlobalFilter = DataSourceIndexed.extend('DataSourceGlobalFilter', {

    /**
     *
     * @memberOf DataSourceGlobalFilter#
     * @param {filterFunction} [filter] - If undefined, deletes filter.
     */
    set: function(filter) {
        if (filter) {
            /**
             * @implements filterInterface
             * @memberOf DataSourceGlobalFilter#
             */
            this.filter = filter;
        } else {
            delete this.filter;
        }
    },

    get: function(filter) {
        return this.filter;
    },

    sortGroups: function(sorter){
        this.dataSource.sortGroups(sorter);
    },

    /**
     *
     * @memberOf DataSourceGlobalFilter#
     */
    apply: function() {
        if (this.filter && this.filter.test) {
            this.buildIndex(this.filterTest);
        } else {
            this.clearIndex();
        }
    },

    /**
     * @implements filterPredicate
     * @memberOf DataSourceGlobalFilter#
     */
    filterTest: function(r, rowObject) {
        return this.filter.test(rowObject);
    },


    /**
     *
     * @memberOf DataSourceGlobalFilter#
     * @returns {number}
     */
    getRowCount: function() {
        return this.filter && this.filter.test ? this.index.length : this.dataSource.getRowCount();
    }
});

Object.defineProperty(DataSourceGlobalFilter.prototype, 'type', { value: 'filter' }); // read-only property

module.exports = DataSourceGlobalFilter;

},{"./DataSourceIndexed":29}],28:[function(require,module,exports){
'use strict';

var Base = require('./Base');
var DataSourceSorter = require('./DataSourceSorter');
var DataNodeTree = require('./DataNodeTree');
var DataNodeGroup = require('./DataNodeGroup');
var DataNodeLeaf = require('./DataNodeLeaf');

/**
 * @constructor
 * @param {DataSource} dataSource
 */
var DataSourceGroupView = Base.extend('DataSourceGroupView', {
    initialize: function(dataSource) {

        /**
         * @memberOf DataSourceGroupView#
         * @type {DataSource}
         */
        this.dataSource = dataSource;

        /**
         * @memberOf DataSourceGroupView#
         * @type {DataNodeTree}
         */
        this.tree = new DataNodeTree('Group');

        /**
         * @memberOf DataSourceGroupView#
         * @type {number[]}
         * @default []
         */
        this.index = [];

        /**
         * @memberOf DataSourceGroupView#
         * @type {Array}
         * @default []
         */
        this.groupBys = [];

        /**
         * @memberOf DataSourceGroupView#
         * @type {Array}
         * @default []
         */
        this.view = [];

        /**
         * @memberOf DataSourceGroupView#
         * @type {object}
         * @default {}
         */
        this.treeColumnIndex = 0;

        /**
         * @memberOf DataSourceGroupView#
         * @type {object}
         * @default {}
         */
        this.sorterInstance = {};

        /**
         * @memberOf DataSourceGroupView#
         * @type {boolean}
         * @default true
         */
        this.presortGroups = true;

    },

    isNullObject: false,

    getFields: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getFields();
        }
        var fields = this.getHeaders().map(function(e) {
            return e.toLowerCase().split(' ').join('_');
        });
        return fields;
    },

    getHeaders: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getHeaders();
        }
        var headers = this.dataSource.getHeaders().slice(0);

        if (this.hasGroups()) {
            headers.unshift('Tree');
        }
        return headers;
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param columnIndexArray
     */
    setGroupBys: function(columnIndexArray) {
        var groupBys = this.groupBys;
        groupBys.length = 0;
        columnIndexArray.forEach(function(columnIndex) {
            groupBys.push(columnIndex);
        });
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param index
     */
    addGroupBy: function(index) {
        this.groupBys.push(index);
    },

    /**
     * @memberOf DataSourceGroupView#
     * @returns {boolean}
     */
    hasGroups: function() {
        return !!this.groupBys.length;
    },

    /**
     * @memberOf DataSourceGroupView#
     * @params [options]
     */
    apply: function(options) {
        options  = options || {};
        if (!options.rowClick && !options.columnSort){
            this.buildGroupTree();
        }
    },

    /**
     * @memberOf DataSourceGroupView#
     */
    clearGroups: function() {
        this.groupBys.length = 0;
    },

    /**
     * @memberOf DataSourceGroupView#
     */
    buildGroupTree: function() {
        var reversedGroupBys = this.groupBys.slice(0).reverse(),
            leafDepth = this.groupBys.length - 1,
            source = this.dataSource,
            rowCount = source.getRowCount(),
            tree = this.tree = new DataNodeTree('Group');

        // first sort data
        if (this.presortGroups) {
            reversedGroupBys.forEach(function(groupBy) {
                source = new DataSourceSorter(source);
                source.sortOn(groupBy);
            });
        }

        for (var r = 0; r < rowCount; r++) {
            var path = tree;

            this.groupBys.forEach(function(g, c) { // eslint-disable-line no-loop-func
                var key = source.getValue(g, r),
                    factoryDataNode = (c === leafDepth) ? factoryDataNodeLeaf : factoryDataNodeGroup;
                path = path.children.getIfUndefined(key, factoryDataNode);
            });

            path.index.push(r);
        }

        this.sorterInstance = new DataSourceSorter(source);
        tree.toArray();
        tree.getRowData(this);
        this.buildView();
        //this.dump();
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param dataNode
     */
    addView: function(dataNode) {
        this.view.push(dataNode);
    },

    /**
     * @memberOf DataSourceGroupView#
     */
    buildView: function() {
        this.view.length = 0;
        this.tree.computeHeight();
        this.tree.buildView(this);
    },

    /**
     * @memberOf DataSourceGroupView#
     * @returns {*|boolean}
     */
    viewMakesSense: function() {
        return this.hasGroups();
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param {number} columnIndex
     * @returns {*|boolean}
     */
    isDrillDown: function(columnIndex) {
        var result = this.viewMakesSense();
        if (result && columnIndex) {
            result = columnIndex === this.treeColumnIndex;
        }
        return result;
    },

    getDataIndex: function(y) {
        return this.viewMakesSense() ? y : this.dataSource.getDataIndex(y);
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param x
     * @param y
     * @returns {*}
     */
    getValue: function(x, y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getValue(x, y);
        }
        var row = this.view[y];
        return row ? row.getValue(x) : null;
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param x
     * @param y
     * @param value
     * @returns {*}
     */
    setValue: function(x, y, value) {
        if (!this.viewMakesSense()) {
            return this.dataSource.setValue(x, y, value);
        }
    },

    /**
     * @memberOf DataSourceGroupView#
     * @returns {*}
     */
    getColumnCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getColumnCount();
        }
        return this.getHeaders().length;
    },

    /**
     * @memberOf DataSourceGroupView#
     * @returns {*}
     */
    getRowCount: function() {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRowCount();
        }
        return this.view.length; //header column
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param y
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @param {number} [depth=Infinity] - One of:
     * * number > 0 - Apply only if row depth is above the given depth.
     * * number <= 0 - Apply only if row depth is below the given depth.
     * @returns {undefined|boolean} One of:
     * * `undefined` - row was not expandable
     * * `true` - row was expandable _and_ state changed
     * * `false` - row was expandable _but_ state did _not_ change
     */
    click: function(y, expand, depth) {
        if (!this.viewMakesSense()) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }
        var group = this.view[y], expandable, changed;
        if (
            group && (
                depth === undefined ||
                depth > 0 && group.depth < depth ||
                depth <= 0 && group.depth >= -depth
            )
        ) {
            changed = group.toggleExpansionState(this, expand);
            if ((expandable = group.children)) {
                this.buildView();
            }
        }

        return expandable ? changed : undefined;
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param headers
     */
    setHeaders: function(headers) {
        this.dataSource.setHeaders(headers);
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param fields
     * @returns {*}
     */
    setFields: function(fields) {
        return this.dataSource.setFields(fields);
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param y
     * @returns {*}
     */
    getRow: function(y) {
        if (!this.viewMakesSense()) {
            return this.dataSource.getRow(y);
        }

        var groups = this.view[y];

        return groups ? groups : this.tree;
    },

    /**
     * @memberOf DataSourceGroupView#
     * @param arrayOfUniformObjects
     */
    setData: function(arrayOfUniformObjects) {
        this.dataSource.setData(arrayOfUniformObjects);
        this.apply();
    },

    /**
     * @memberOf DataSourceGroupView#
     */
    getGrandTotals: function (){

    },

    sortGroups: function(groupSorter) {
        this.tree.clearGroupSorts();
        this.tree.sortWith(groupSorter);
        this.buildView();
    }
});

function factoryDataNodeLeaf(key) {
    return new DataNodeLeaf(key);
}

function factoryDataNodeGroup(key) {
    return new DataNodeGroup(key);
}

Object.defineProperty(DataSourceGroupView.prototype, 'type', { value: 'groupviewer' }); // read-only property

module.exports = DataSourceGroupView;

},{"./Base":18,"./DataNodeGroup":20,"./DataNodeLeaf":22,"./DataNodeTree":23,"./DataSourceSorter":30}],29:[function(require,module,exports){
'use strict';

var Base = require('./Base');

/**
 * @param dataSource
 * @constructor
 */
var DataSourceIndexed = Base.extend('DataSourceIndexed', {

    isNullObject: false,

    /**
     * @memberOf DataSourceIndexed#
     * @param dataSource
     */
    initialize: function(dataSource) {
        this.dataSource = dataSource;
        this.index = [];
    },

    /**
     * @memberOf DataSourceIndexed#
     * @param y
     * @returns {*}
     */
    transposeY: function(y) {
        return this.index.length ? this.index[y] : y;
    },

    getDataIndex: function(y) {
        return this.dataSource.getDataIndex(this.transposeY(y));
    },

    /**
     * @memberOf DataSourceIndexed#
     * @param y
     * @returns {object}
     */
    getRow: function(y) {
        return this.dataSource.getRow(this.transposeY(y));
    },

    /**
     * @memberOf DataSourceIndexed#
     * @param x
     * @param y
     * @returns {*|Mixed}
     */
    getValue: function(x, y) {
        return this.dataSource.getValue(x, this.transposeY(y));
    },

    /**
     * @memberOf DataSourceIndexed#
     * @param {number} x
     * @param {number} y
     * @param {*} value
     */
    setValue: function(x, y, value) {
        this.dataSource.setValue(x, this.transposeY(y), value);
    },

    /**
     * @memberOf DataSourceIndexed#
     * @returns {Number|*}
     */
    getRowCount: function() {
        return this.index.length || this.dataSource.getRowCount();
    },

    /**
     * @memberOf DataSourceIndexed#
     */
    clearIndex: function() {
        this.index.length = 0;
    },

    /**
     * @memberOf DataSourceIndexed#
     * @param {filterPredicate} predicate
     * @returns {number[]}
     */
    buildIndex: function(predicate) {
        var rowCount = this.dataSource.getRowCount(),
            index = this.index;

        this.clearIndex();

        for (var r = 0; r < rowCount; r++) {
            if (!predicate || predicate.call(this, r, this.dataSource.getRow(r))) {
                index.push(r);
            }
        }

        return index;
    }
});

/** @typedef {function} filterPredicate
 * @summary Applies filter to given row.
 * @this {DataSourceGlobalFilter}
 * @param {nubmer} r - Row index of row data within rows array `this.dataSource.data[]`.
 * @param {object} rowObject - Row data; element of `this.dataSource.data[]`.
 * @returns {boolean} Row qualifies (passes through filter).
 */

/**
 * Used by the sorters (`DataSourceSorter` and `DataSourceTreeviewSorter`).
 * @this {dataRowObject}
 * @param {string} columnName
 * @returns {*}
 */
DataSourceIndexed.valOrFunc = function(columnName, calculator) {
    var result;
    if (this) {
        result = this[columnName];
        calculator = (typeof result)[0] === 'f' && result || calculator;
        if (calculator) {
            result = calculator.call(this, columnName);
        }
    }
    return result;
};

module.exports = DataSourceIndexed;

},{"./Base":18}],30:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');
var stableSort = require('./util/stableSort');

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceSorter = DataSourceIndexed.extend('DataSourceSorter', {
    /**
     * @memberOf DataSourceSorter#
     * @param {number} columnIndex
     * @param {number} [direction=1]
     */
    sortOn: function(columnIndex, direction) {
        var dataSource = this.dataSource,
             columnSchema = dataSource.schema.find(function(columnSchema, i) {
                return i === columnIndex;
             }),
            columnName = columnSchema && columnSchema["name"],
            calculator = dataSource.schema[columnIndex].calculator;

        switch (direction) {
            case 0:
                this.clearIndex();
                break;

            case undefined:
            case 1:
            case -1:
                stableSort.sort(this.buildIndex(), getValue, direction,  dataSource.schema[columnIndex].type);
                break;
        }

        function getValue(rowIdx) {
            var dataRow = dataSource.getRow(rowIdx);
            return DataSourceIndexed.valOrFunc.call(dataRow, columnName, calculator);
        }
    }
});

module.exports = DataSourceSorter;

},{"./DataSourceIndexed":29,"./util/stableSort":38}],31:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');
var DataSourceSorter = require('./DataSourceSorter');

/**
 * @constructor
 * @extends DataSourceIndexed
 */
var DataSourceSorterComposite = DataSourceIndexed.extend('DataSourceSorterComposite', {

    /**
     * @memberOf DataSourceSorterComposite#
     */
    initialize: function() {
        /**
         * Caveats:
         *
         * 1. Columns should be uniquely represented (i.e., no repeats with same columnIndex)
         * 2. Columns should be added low- to high-order (i.e., most grouped columns come last)
         *
         * @type {number[]}
         * @memberOf DataSourceSorterComposite#
         */
        this.sorts = [];

        /**
         * @type {DataSource}
         * @memberOf DataSourceSorterComposite#
         */
        this.last = this.dataSource;
    },

    /**
     * @memberOf DataSourceSorterComposite#
     * @param {number} y
     * @returns {Object}
     */
    getRow: function(y) {
        return this.last.getRow(y);
    },

    /**
     * @memberOf DataSourceSorterComposite#
     * @param columnIndex
     * @param direction
     */
    sortOn: function(columnIndex, direction) {
        this.sorts.push({ columnIndex: columnIndex, direction: direction });
    },

    /**
     *
     * @memberOf DataSourceSorterComposite#
     * @param {sorterFunction} [sorter] - If undefined, deletes sorter.
     */
    set: function(sorter) {
        if (sorter) {
            /**
             * @implements sorterInterfacei
             * @memberOf DataSourceSorterComposite#
             */
            this.sorter = sorter;
        } else {
            delete this.sorter;
        }
    },

    get: function() {
        return this.sorter;
    },

    /**
     * @memberOf DataSourceSorterComposite#
     */
    apply: function() {
        var each = this.dataSource;
        // get list of sorts from either API or use existing
        this.sorts = (this.sorter && this.sorter.prop('sorts')) || this.sorts;

        if (this.sorts) {
            this.sorts.forEach(function(sortSpec) {
                each = new DataSourceSorter(each);
                each.sortOn(sortSpec.columnIndex, sortSpec.direction, sortSpec.type);
            });
            this.last = each;
        }
    },

    /**
     * @memberOf DataSourceSorterComposite#
     */
    clearSorts: function() {
        this.sorts.length = 0;
        this.last = this.dataSource;
    },

    getDataIndex: function(y) {
        return this.last.getDataIndex(y);
    },

    /**
     * @memberOf DataSourceSorterComposite#
     * @param {number} x
     * @param {number} y
     * @returns {*}
     */
    getValue: function(x, y) {
        return this.last.getValue(x, y);
    },

    /**
     * @memberOf DataSourceSorterComposite#
     * @param {number} x
     * @param {number} y
     * @param {*} value
     */
    setValue: function(x, y, value) {
        this.last.setValue(x, y, value);
    }
});

DataSourceSorterComposite.prototype.applySorts = function() {
    (console.warn || console.log).call(console, 'applySorts deprecated; use apply');
    this.apply();
};

Object.defineProperty(DataSourceSorterComposite.prototype, 'type', { value: 'sorter' }); // read-only property

module.exports = DataSourceSorterComposite;

},{"./DataSourceIndexed":29,"./DataSourceSorter":30}],32:[function(require,module,exports){
'use strict';

var DataSourceIndexed = require('./DataSourceIndexed');

var expandedMap = {
    true: '\u25bc', // BLACK DOWN-POINTING TRIANGLE aka '▼'
    false: '\u25b6', // BLACK RIGHT-POINTING TRIANGLE aka '▶'
    undefined: '' // for leaf rows
};

/** @typedef columnAddress
 * @property {string} name - The name of a column listed in the fields array. See the {@link DataSourceTreeview#getFields|getFields()} method.
 * @property {number} index - The index of the column in the fields array. See the {@link DataSourceTreeview#getFields|getFields()} method.
 */


/**
 * @classdesc For proper sorting, include `DataSourceTreeviewSorter` in your data source pipeline, _ahead of_ (closer to the data than) this data source.
 *
 * For proper filtering, include `DataSourceTreeviewFilter` in your data source pipeline, _ahead of_ `DataSourceTreeviewSorter`, if included; or at any rate ahead of this data source.
 * @constructor
 * @param dataSource
 * @extends DataSourceIndexed
 */
var DataSourceTreeview = DataSourceIndexed.extend('DataSourceTreeview', {

    /** @summary Initialize a new instance.
     * @desc Set up {@link DataSourceTreeviewSorter} access to this object. Access is provided to the whole object although only instance variables `joined`, `idColumn`, and `parentIdColumn` are needed by the sorter. The two ID columns are passed to the {@link DataSourceDepthSorter} constructor. (If dataSource is not the sorter, this is not used but harmless.)
     *
     * Note that all ancestor classes' `initialize` methods are called (top-down) before this one. See {@link http://npmjs.org/extend-me} for more info.
     * @param dataSource
     * @memberOf DataSourceTreeview#
     */
    initialize: function(dataSource) {
        while (dataSource) {
            if (/treeview/i.test(dataSource.$$CLASS_NAME)) {
                dataSource.treeview = this;
            }
            dataSource = dataSource.dataSource;
        }
    },

    /** @summary Reference to the primary key column address object.
     * @desc The primary key column uniquely identifies a data row.
     * Used to relate a child row to a parent row.
     *
     * Redefined each time tree-view is turned *ON* by a call to {@link DataSourceTreeview#setRelation|setRelation()}.
     * @param {number|string} indexOrName
     * @returns {columnAddress} Getter returns column address object; setter however always returns its input.
     */
    set idColumn(indexOrName) {
        this._idColumn = this.getColumnInfo(indexOrName || 'ID');
    },
    get idColumn() {
        return this._idColumn;
    },

    /** @summary Reference to the foreign key column address object.
     * @desc The foreign key column defines grouping; it relates this tree node row to its parent tree node row. Top-level tree nodes have no parent. In that case the value in the column is `null`.
     *
     * Redefined each time tree-view is turned *ON* by a call to {@link DataSourceTreeview#setRelation|setRelation()}.
     * @param {number|string} indexOrName
     * @returns {columnAddress} Getter returns column address object; setter however always returns its input.
     */
    set parentIdColumn(indexOrName) {
        this._parentIdColumn = this.getColumnInfo(indexOrName || 'parentID');
    },
    get parentIdColumn() {
        return this._parentIdColumn;
    },

    /** @summary Reference to the drill-down column address object.
     * @desc The drill-down column is the column that is indented and decorated with drill-down controls (triangles). A column with the given index or name must exist.
     *
     * Redefined each time tree-view is turned *ON* by a call to {@link DataSourceTreeview#setRelation|setRelation()}.
     * @param {number|string} indexOrName
     * @returns {columnAddress} Getter returns column address object; setter however always returns its input.
     */
    set treeColumn(indexOrName) {
        this._treeColumn = this.getColumnInfo(indexOrName || 'name');
    },
    get treeColumn() {
        return this._treeColumn;
    },

    /**
     /** @summary Reference to the group name column address object.
     * @desc The group name column is the column whose content describes the group. A column with the given index or name must exist.
     *
     * The treeview sorter treats the group name column differently than other columns,
     * apply a "group sort" to it, which means only the group rows (rows with children)
     * are sorted and the leaves are left alone (stable sorted).
     *
     * Normally refers to the same column as {@link DataSourceTreeview#treeColumn|treeColumn}.
     *
     * Redefined each time tree-view is turned *ON* by a call to {@link DataSourceTreeview#setRelation|setRelation()}.
     * @param {number|string} indexOrName
     * @returns {columnAddress} Getter returns column address object; setter however always returns its input.
     */
    set groupColumn(indexOrName) {
        this._groupColumn = this.getColumnInfo(indexOrName || this._treeColumn.name);
    },
    get groupColumn() {
        return this._groupColumn;
    },

    /**
     * TEMPORARY. This function included here until next version of base is published.
     * The change was to use schema rather than getFields().
     * (The current version in base is not in use because it's only used from here.)
     *
     * Get new object with name and index given the name or the index.
     * @param {string|number} columnOrIndex - Column name or index.
     * @returns {{name: string, index: number}}
     */
    getColumnInfo: function(columnOrIndex) {
        var name, index, result;

        if (typeof columnOrIndex === 'number') {
            index = columnOrIndex;
            name = this.schema[index].name;
        } else {
            name = columnOrIndex;
            index = this.schema.findIndex(function(columnSchema) {
                return columnSchema.name === name;
            });
        }

        if (name && index >= 0) {
            result = {
                name: name,
                index: index
            };
        }

        return result;
    },

    /**
     * @summary Toggle the tree-view.
     * @desc Calculates or recalculates nesting depth of each row and marks it as "expandable" iff it has children.
     *
     * If resetting previously set data, the state of expansion of all rows that still have children is retained. (All expanded rows will still be expanded when tree-view is turned back *ON*.)
     *
     * All of the columns referenced by the `options` properties `idColumn`, `parentIdColumn`, `treeColumn`, and `groupColumn` must exist. These four columns have default references (names) as listed below. The references may be overridden in `options` by supplying alternate column names or indexes.
     *
     * @param {boolean|object} [options] - Falsy value (or omitted) turns tree-view **OFF**. Truthy value turns tree-view **ON** using following options:
     * @param {number|string} [options.idColumn='ID'] - Name or index of the primary key column.
     * @param {number|string} [options.parentIdColumn='parentID'] - Name or index of the foreign key column for grouping.
     * @param {number|string} [options.treeColumn='name'] - Name or index of the drill-down column to decorate with triangles.
     * @param {number|string} [options.groupColumn=this._treeColumn.name] - Name or index of the column that contains the group names. This is normally the same as the drill-down column. You only need to specify a different value when you want the drill down to this column, such as when the drill-down is in a column of its own. See {@link http://openfin.github.io/fin-hypergrid/tree-view-separate-drill-down.html} for an example.
     * @returns {boolean} Joined state.
     *
     * @memberOf DataSourceTreeview#
     */
    setRelation: function(options) {
        var r, parentID, depth, leafRow, row, ID;

        // successful join requires that options object be given and that all columns exist
        if (options) {
            this.idColumn = options.idColumn;
            this.parentIdColumn = options.parentIdColumn;
            this.treeColumn = options.treeColumn;
            this.groupColumn = options.groupColumn;
            this.joined = !!(this.idColumn && this.parentIdColumn && this.treeColumn && this.groupColumn);
        }

        this.buildIndex(); // make all rows visible to getRow()

        r = this.getRowCount();
        if (this.joined) {
            // mutate data row with __DEPTH (all rows) and __EXPANDED (all "parent" rows)
            var idColumnName = this.idColumn.name,
                parentIdColumnName = this.parentIdColumn.name;

            this.maxDepth = 0;

            while (r--) {
                depth = 0;
                leafRow = this.getRow(r);
                row = leafRow;
                ID = row[idColumnName];

                while ((parentID = row[parentIdColumnName]) != null) {
                    row = this.findRow(idColumnName, parentID);
                    ++depth;
                }

                if (this.maxDepth < depth) {
                    this.maxDepth = depth;
                }

                leafRow.__DEPTH = depth;

                if (!this.findRow(parentIdColumnName, ID)) {
                    delete leafRow.__EXPANDED; // no longer expandable
                } else if (leafRow.__EXPANDED === undefined) { // retain previous setting for old rows
                    leafRow.__EXPANDED = false; // default for new row is unexpanded
                }
            }
        } else {
            // flatten the tree so group sorter sees it as a single group
            while (r--) {
                this.getRow(r).__DEPTH = 0;
            }
        }

        // look for DataSourceTreeviewFilter

        return this.joined;
    },

    /**
     * @summary Rebuild the index.
     * @desc Rebuild the index to show only "revealed" rows. (Rows that are not inside a collapsed parent node row.)
     * @memberOf DataSourceTreeview#
     */
    apply: function() {
        if (!this.viewMakesSense()) {
            this.clearIndex();
        } else {
            this.buildIndex(this.joined && rowIsRevealed);
        }
    },

    /**
     * @summary Get the value for the specified cell.
     * @desc Intercepts tree column values and indents and decorates them.
     * @param x
     * @param y
     * @returns {*}
     * @memberOf DataSourceTreeview#
     */
    getValue: function(x, y) {
        var value = DataSourceIndexed.prototype.getValue.call(this, x, y);

        if (this.viewMakesSense() && x === this._treeColumn.index) {
            var row = this.getRow(y);

            if (!(value === '' && row.__EXPANDED === undefined)) {
                value = Array(row.__DEPTH + 1).join('   ') + expandedMap[row.__EXPANDED] + value;
            }
        }

        return value;
    },

    viewMakesSense: function() {
        return this.joined;
    },
    /**
     * @memberOf DataSourceTreeview#
     * @param {number} columnIndex
     * @returns {*|boolean}
     */
    isDrillDown: function(columnIndex) {
        var result = this.viewMakesSense();
        if (result && columnIndex) {
            result = columnIndex === this.treeColumnIndex;
        }
        return result;
    },

    /**
     * @summary Handle a click event in the drill-down column.
     * @desc Operates only on the following rows:
     * * Expandable rows - Rows with a drill-down control.
     * * Revealed rows - Rows not hidden inside of collapsed drill-downs.
     * @param y - Revealed row number. (This is not the row ID.)
     * @param {boolean} [expand] - One of:
     * * `true` - Expand all rows that are currently collapsed.
     * * `false` - Collapse all rows that are currently expanded.
     * * `undefined` (or omitted) - Expand all currently collapsed rows; collapse all currently expanded rows.
     * @param {number} [depth=Infinity] - One of:
     * * number > 0 - Apply only if row depth is above the given depth.
     * * number <= 0 - Apply only if row depth is below the given depth.
     * @returns {undefined|boolean} One of:
     * * `undefined` - Row was not expandable.
     * * `true` - Row had drill-down _and_ state changed.
     * * `false` - Row had drill-down _but_ state did _not_ change.
     * @memberOf DataSourceTreeview#
     */
    click: function(y, expand, depth) {
        if (!this.viewMakesSense()) {
            return this.dataSource.click.apply(this.dataSource, arguments);
        }

        var changed, row = this.getRow(y);
        if (row && row.__EXPANDED !== undefined) {
            if (depth !== undefined && (
                depth > 0 && row.__DEPTH >= depth ||
                depth <= 0 && row.__DEPTH < -depth
            )) {
                changed = false;
            } else {
                if (expand === undefined) {
                    expand = !row.__EXPANDED;
                }
                changed = row.__EXPANDED && !expand || !row.__EXPANDED && expand;
                row.__EXPANDED = expand;
            }
        }
        return changed;
    },

    /**
     * @summary Expand nested drill-downs containing this row.
     * @param ID - The unique row ID.
     * @returns {boolean} If any rows expanded.
     * @memberOf DataSourceTreeview#
     */
    revealRow: function(ID) {
        if (!this.viewMakesSense()) {
            return this.dataSource.revealRow.apply(this.dataSource, arguments);
        }

        var row, parent, changed = false;
        while ((row = this.findRow(this._idColumn.name, ID))) {
            if (parent && row.__EXPANDED === false) {
                row.__EXPANDED = changed = true;
            }
            parent = true;
            ID = row[this._parentIdColumn.name];
        }
        return changed;
    }
});

function rowIsRevealed(r, row) {
    var parentID;

    // are any of the row's ancestors collapsed?
    while ((parentID = row[this._parentIdColumn.name]) != null) {
        // walk up through each parent...
        row = this.findRow(this._idColumn.name, parentID);
        if (row.__EXPANDED === false) { // an ancestor is collapsed
            return false; // exclude row from build
        }
    }

    // no ancestors were collapsed
    return true; // include row in build
}

Object.defineProperty(DataSourceTreeview.prototype, 'type', { value: 'treeviewer' }); // read-only property

module.exports = DataSourceTreeview;

},{"./DataSourceIndexed":29}],33:[function(require,module,exports){
'use strict';

var DataSourceGlobalFilter = require('./DataSourceGlobalFilter');

/**
 * @classdesc Should be positioned in the data source pipeline _ahead of_ (closer to the data than) the optional `DataSourceTreeviewSorter` and the required `DataSourceTreeview` (which sets `this.treeview`).
 * @constructor
 * @param dataSource
 * @extends DataSourceSorterComposite
 * @extends DataSourceGlobalFilter
 */
var DataSourceTreeviewFilter = DataSourceGlobalFilter.extend('DataSourceTreeviewFilter', {

    /**
     * @implements filterPredicate
     * @memberOf DataSourceGlobalFilter#
     */
    filterTest: function(r, rowObject) {
        return this.treeview.viewMakesSense() && rowObject.__EXPANDED !== undefined || this.filter.test(rowObject);
    }

});

module.exports = DataSourceTreeviewFilter;

},{"./DataSourceGlobalFilter":27}],34:[function(require,module,exports){
'use strict';

var DataSourceSorterComposite = require('./DataSourceSorterComposite');
var DataSourceDepthSorter = require('./DataSourceDepthSorter');
var DataSourceSorter = require('./DataSourceSorter');

/**
 * @classdesc Should be positioned in the data source pipeline _ahead of_ (closer to the data than) the required `DataSourceTreeview` (which sets `this.treeview`) but _behind_ the optional `DataSourceTreeviewFilter`.
 * @constructor
 * @param dataSource
 * @extends DataSourceSorterComposite
 */
var DataSourceTreeviewSorter = DataSourceSorterComposite.extend('DataSourceTreeviewSorter', {

    /**
     * @summary Rebuild the index.
     * @memberOf DataSourceSorterComposite#
     */
    apply: function() {
        var joined = this.treeview.viewMakesSense(),
            each = this.dataSource,
            last, // last sort spec ("first" sort) when and only when joined AND it is the group column
            lastIsGroup, columnIndex, direction;
        // get list of sorts from either API or use existing
        this.sorts = (this.sorter && this.sorter.prop('sorts')) || this.sorts;

        if (this.sorts.length) {
            if (joined) {
                last = this.sorts[this.sorts.length - 1];
                lastIsGroup = last.columnIndex === this.treeview.groupColumn.index;
            }

            this.sorts.forEach(function(sortSpec) {
                if (!(lastIsGroup && sortSpec === last)) {
                    each = new DataSourceSorter(each);
                    each.sortOn(sortSpec.columnIndex, sortSpec.direction);
                }
            });
        }

        if (joined) {
            if (lastIsGroup || this.sorts.length === 1) {
                columnIndex = last.columnIndex;
                direction = last.direction;
            } else {
                columnIndex = undefined;
                direction = 1;
            }

            // Finally, apply a "depth sort" to either the group column (if last) or the ID column to group it properly
            for (var depth = this.treeview.maxDepth; depth >= 0; --depth) {
                each = new DataSourceDepthSorter(each, this.treeview);
                each.sortOn(depth, direction, columnIndex);
            }
        }

        this.last = each;
    }

});

module.exports = DataSourceTreeviewSorter;

},{"./DataSourceDepthSorter":26,"./DataSourceSorter":30,"./DataSourceSorterComposite":31}],35:[function(require,module,exports){
'use strict';

/**
 * @constructor
 */
function Mappy() {
    this.keys = [];
    this.data = {};
    this.values = [];
}

Mappy.prototype = {

    constructor: Mappy.prototype.constructor, // preserve constructor

    /**
     * @memberOf Mappy#
     * @param key
     * @param value
     */
    set: function(key, value) {
        var hashCode = hash(key);
        if (!(hashCode in this.data)) {
            this.keys.push(key);
            this.values.push(value);
        }
        this.data[hashCode] = value;
    },

    /**
     * @memberOf Mappy#
     * @param key
     * @returns {*}
     */
    get: function(key) {
        var hashCode = hash(key);
        return this.data[hashCode];
    },

    /**
     *
     * @memberOf Mappy#
     * @param key
     * @param {function} ifUndefinedFunc - Value getter when value is otherwise undefined.
     * @returns {*}
     */
    getIfUndefined: function(key, ifUndefinedFunc) {
        var value = this.get(key);
        if (value === undefined) {
            value = ifUndefinedFunc(key);
            this.set(key, value);
        }
        return value;
    },

    size: function() {
        return this.keys.length;
    },

    /**
     * @memberOf Mappy#
     */
    clear: function() {
        this.keys.length = 0;
        this.values.length = 0;
        this.data = {};
    },

    /**
     * @memberOf Mappy#
     * @param key
     */
    delete: function(key) {
        var hashCode = hash(key);
        if (this.data[hashCode] !== undefined) {
            var index = betterIndexOf(this.keys, key);
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
            delete this.data[hashCode];
        }
    },

    /**
     * @memberOf Mappy#
     * @param {function} iteratee
     */
    forEach: function(iteratee) {
        if (typeof iteratee === 'function') {
            var keys = this.keys,
                self = this;
            keys.forEach(function(key) {
                var value = self.get(key);
                iteratee(value, key, self);
            });
        }
    },

    /**
     * @memberOf Mappy#
     * @param {function} iteratee
     * @returns {Mappy}
     */
    map: function(iteratee) {
        var keys = this.keys,
            newMap = new Mappy(),
            self = this;

        if (!(typeof iteratee === 'function')) {
            iteratee = reflection;
        }

        keys.forEach(function(key) {
            var value = self.get(key),
                transformed = iteratee(value, key, self);
            newMap.set(key, transformed);
        });
        return newMap;
    },

    /**
     * @memberOf Mappy#
     * @returns {Mappy}
     */
    copy: function() {
        var keys = this.keys,
            newMap = new Mappy(),
            self = this;
        keys.forEach(function(key) {
            var value = self.get(key);
            newMap.set(key, value);
        });
        return newMap;
    }

};

var OID_PREFIX = '.~.#%_'; //this should be something we never will see at the beginning of a string
var counter = 0;

function hash(key) {
    var typeOf = typeof key;

    switch (typeOf) {
        case 'number':
        case 'string':
        case 'boolean':
        case 'symbol':
            return OID_PREFIX + typeOf + '_' + key;

        case 'undefined':
            return 'UNDEFINED';

        case 'object':
            if (key === null) {
                return 'NULL';
            }
            // fall through when not null:
        case 'function':
            return (key.___finhash = key.___finhash || OID_PREFIX + counter++);
    }
}

// Object.is polyfill, courtesy of @WebReflection
var is = Object.is || function(a, b) {
    return a === b ? a !== 0 || 1 / a == 1 / b : a != a && b != b; // eslint-disable-line eqeqeq
};

function reflection(val) {
    return val;
}

// More reliable indexOf, courtesy of @WebReflection
function betterIndexOf(arr, value) {
    if (value != value || value === 0) { // eslint-disable-line eqeqeq
        var i = arr.length;
        while (i-- && !is(arr[i], value)) {
            // eslint-disable-line no-empty
        }
    } else {
        i = [].indexOf.call(arr, value);
    }
    return i;
}

module.exports = Mappy;

},{}],36:[function(require,module,exports){
'use strict';

/**
 * @module aggregations
 */

/**
 * @typedef {function} aggregationFunction
 * @summary A bound function.
 * @desc An aggregation function bound to the `columnIndex` value supplied to one of the above factory functions.
 * @param {object} group
 * @returns {*} Aggregated value.
 */

module.exports = {
    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    count: function(columnIndex) {
        return count;
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    sum: function(columnIndex) {
        return sum.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    min: function(columnIndex) {
        return minmax.bind(this, columnIndex, Math.min, Infinity);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    max: function(columnIndex) {
        return minmax.bind(this, columnIndex, Math.max, -Infinity);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    avg: function(columnIndex) {
        return avg.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    first: function(columnIndex) {
        return first.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    last: function(columnIndex) {
        return last.bind(this, columnIndex);
    },

    /**
     * @instance
     * @param {number} columnIndex
     * @returns {aggregationFunction} Bound function.
     */
    stddev: function(columnIndex) {
        return stddev.bind(this, columnIndex);
    }
};

function count(group) {
    return group.getRowCount();
}

function sum(columnIndex, group) {
    var r = group.getRowCount(),
        n = 0;

    while (r--) {
        n += group.getValue(columnIndex, r);
    }

    return n;
}

function minmax(columnIndex, method, n, group) {
    var r = group.getRowCount();

    while (r--) {
        n = method(n, group.getValue(columnIndex, r));
    }

    return n;
}

function avg(columnIndex, group) {
    return sum(columnIndex, group) / group.getRowCount();
}

function first(columnIndex, group) {
    return group.getValue(columnIndex, 0);
}

function last(columnIndex, group) {
    return group.getValue(columnIndex, group.getRowCount() - 1);
}

function stddev(columnIndex, group) {
    var rows = group.getRowCount(),
        mean = avg(columnIndex, group);

    for (var dev, r = rows, variance = 0; r--; variance += dev * dev) {
        dev = group.getValue(columnIndex, r) - mean;
    }

    return Math.sqrt(variance / rows);
}

},{}],37:[function(require,module,exports){
'use strict';

// NOTE: For backwards compatibility, `capitalize` is still a function, doubling now as the API.

function capitalize(string) {
    return (/[a-z]/.test(string) ? string : string.toLowerCase())
        .replace(/[\s\-_]*([^\s\-_])([^\s\-_]+)/g, replacer)
        .replace(/[A-Z]/g, ' $&')
        .trim();
}

function replacer(a, b, c) {
    return b.toUpperCase() + c;
}

function set(methodName) {
    capitalize.transform = capitalize[methodName];
}

function passthrough(string) {
    return string;
}

capitalize.transform = passthrough;
capitalize.set = set;
capitalize.passthrough = passthrough;
capitalize.capitalize = capitalize;

module.exports = capitalize;

},{}],38:[function(require,module,exports){
'use strict';

/**
 * Note that {@link module:stableSort#sort|sort()} is the only exposed method.
 * @module stableSort
 */

/**
 * @private
 * @instance
 * @param {function} comparator
 * @param {boolean} descending
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {function}
 */
function stabilize(comparator, descending, arr1, arr2) { // eslint-disable-line no-shadow
    var x = arr1[0];
    var y = arr2[0];

    if (x === y) {
        x = descending ? arr2[1] : arr1[1];
        y = descending ? arr1[1] : arr2[1];
    } else {
        if (y === null) {
            return -1;
        }
        if (x === null) {
            return 1;
        }
    }

    return comparator(x, y);
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function ascendingNumbers(x, y) {
    return x - y;
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function descendingNumbers(x, y) {
    return y - x;
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function ascendingAllOthers(x, y) {
    return x < y ? -1 : 1;
}

/**
 * @private
 * @instance
 * @param x
 * @param y
 * @returns {number}
 */
function descendingAllOthers(x, y) {
    return y < x ? -1 : 1;
}

/**
 * @private
 * @instance
 * @param typeOfData
 * @returns {function(this:ascending)}
 */
function ascending(typeOfData) {
    return stabilize.bind(this, typeOfData === 'number' ? ascendingNumbers : ascendingAllOthers, false);
}

/**
 * @private
 * @instance
 * @param typeOfData
 * @returns {function(this:descending)}
 */
function descending(typeOfData) {
    return stabilize.bind(this, typeOfData === 'number' ? descendingNumbers : descendingAllOthers, true);
}

/**
 * @instance
 * @param {number} index
 * @param {function} getValue
 * @param {number} [direction=1]
 */
function sort(index, getValue, direction, type) {

    var compare, i;

    // apply defaults
    if (direction === undefined) {
        direction = 1;
    }

    if (index.length) { // something to do
        switch (direction) {
            case 0:
                return; // bail: nothing to sort

            case undefined: // eslint-disable-line no-fallthrough
                direction = 1;
            case 1:  // eslint-disable-line no-fallthrough
                compare = ascending(type || typeof getValue(0));
                break;

            case -1:
                compare = descending(type || typeof getValue(0));
                break;
        }

        // set up the sort.....
        var tmp = new Array(index.length);

        // add the index for "stability"
        for (i = 0; i < index.length; i++) {
            tmp[i] = [getValue(i), i];
        }

        // do the actual sort
        tmp.sort(compare);

        // copy the sorted values into our index vector
        for (i = 0; i < index.length; i++) {
            index[i] = tmp[i][1];
        }
    }

}

exports.sort = sort;

},{}],39:[function(require,module,exports){
// list-dragon node module
// https://github.com/joneit/list-dragon

/* eslint-env node, browser */

'use strict';

var cssInjector = require('css-injector');
var format = require('templex');

var REVERT_TO_STYLESHEET_VALUE = null;  // null removes the style

var transform, timer, scrollVelocity, cssListDragon;

/* inject:css */
cssListDragon = 'div.dragon-list{position:relative;background-color:#fff}div.dragon-list>div,div.dragon-list>ul{position:absolute;left:0;right:0}div.dragon-list>div{text-align:center;background-color:#00796b;color:#fff;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);overflow:hidden;white-space:nowrap}div.dragon-list>ul{overflow-y:auto;bottom:0;margin:0;padding:0;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}div.dragon-list>ul>li,li.dragon-pop{white-space:nowrap;list-style-type:none;border:0 solid #f4f4f4;border-bottom:1px solid #e0e0e0;cursor:move;transition:border-top-width .2s}div.dragon-list>ul>li:last-child{height:0;border-bottom:none}li.dragon-pop{position:fixed;background-color:#fff;border:1px solid #e0e0e0;left:0;top:0;overflow-x:hidden;box-shadow:rgba(0,0,0,.188235) 0 10px 20px,rgba(0,0,0,.227451) 0 6px 6px}';
/* endinject */

/**
 * @constructor ListDragon
 *
 * @desc This object services a set of item lists that allow dragging and dropping items within and between lists in a set.
 *
 * Two strategies are supported:
 *
 * 1. Supply your own HTML markup and let the API build the item models for you.
 *    To use this strategy, script your HTML and provide one of these:
 *    * an array of all the list item (`<li>`) tags
 *    * a CSS selector that points to all the list item tags
 * 2. Supply your own item models and let the API build the HTML markup for you.
 *    To use this strategy, provide an array of model lists.
 *
 * The new ListDragon object's `modelLists` property references the array of model lists the API constructed for you in strategy #1 or the array of model lists you supplied for strategy #2.
 *
 * After the user performs a successful drag-and-drop operation, the position of the model references within the `modelLists` array is rearranged. (The models themselves are the original objects as supplied in the model lists; they are not rebuilt or altered in any way. Just the references to them are moved around.)
 *
 * @param {string|Element[]|modelListType[]} selectorOrModelLists - You must supply one of the items in **bold** below:
 *
 * 1. _For strategy #1 above (API creates models from supplied elements):_ All the list item (`<li>`) DOM elements of all the lists you want the new object to manage, as either:
 *    1. **A CSS selector;** _or_
 *    2. **An array of DOM elements**
 * 2. _For strategy #2 above (API creates elements from supplied models):_ **An array of model lists,** each of which is in one of the following forms:
 *    1. An array of item models (with various option properties hanging off of it); _and/or_
 *    2. A {@link modelListType} object with those same various option properties including the required `models` property containing that same array of item models.
 *
 * In either case (2.1 or 2.2), each element of such arrays of item models may take the form of:
 * * A string primitive; _or_
 * * A {@link itemModelType} object with a various option properties including the required `label` property containing a string primitive.
 *
 * Regarding these string primitives, each is either:
 * * A string to be displayed in the list item; _or_
 * * A format string with other property values merged in, the result of which is to be displayed in the list item.
 *
 * @param {object} [options={}] - You may supply "global" template variables here, representing the "outer scope," after first searching each model and then each model list.
 * @param {undefined|null|Element|string} [cssStylesheetReferenceElement] - Determines where to insert the stylesheet. (This is the only formal option.) Passed to css-injector, the overloads are (from css-injector docs):
 * * `undefined` type (or omitted): injects stylesheet at top of `<head>...</head>` element
 * * `null` value: injects stylesheet at bottom of `<head>...</head>` element
 * * `Element` type: injects stylesheet immediately before given element, wherever it is found.
 * * `string` type: injects stylesheet immediately before given first element found that matches the given css selector.
 */
function ListDragon(selectorOrModelLists, options) {

    if (!(this instanceof ListDragon)) {
        throw error('Not called with "new" keyword.');
    }

    var self = this, modelLists, items;

    options = options || {};

    if (typeof selectorOrModelLists === 'string') {
        items = toArray(document.querySelectorAll(selectorOrModelLists));
        modelLists = createModelListsFromListElements(items);
    } else if (selectorOrModelLists[0] instanceof Element) {
        items = toArray(selectorOrModelLists);
        modelLists = createModelListsFromListElements(items);
    } else {
        // param is array of model lists
        // build new <ul> element(s) for each list and put in `.modelLists`;
        // fill `.items` array with <li> elements from these new <ul> elements
        items = [];
        modelLists = createListElementsFromModelLists(selectorOrModelLists, options);
        modelLists.forEach(function (list) {
            items = items.concat(toArray(list.element.querySelectorAll('li')));
        });
    }

    // grab wheel events and don't let 'em bubble
    modelLists.forEach(function (modelList) {
        modelList.element.addEventListener('wheel', captureEvent);
    });

    items.forEach(function (itemElement, index) {
        var item = (itemElement !== itemElement.parentElement.lastElementChild)
            ? self.addEvt(itemElement, 'mousedown', itemElement, true)
            : { element: itemElement };

        /* `item.model` not currently needed so commented out here.
         * (Originally used for rebuilding modelLists for final
         * reporting, modelLists are now spliced on every successful
         * drag-and-drop operation so they're always up to date.)

         var origin = this.itemCoordinates(itemElement);
         item.model = this.modelLists[origin.list].models[origin.item];

         */

        items[index] = item;
    });

    transform = 'transform' in items[0].element.style
        ? 'transform' // Chrome 45 and Firefox 40
        : '-webkit-transform'; // Safari 8

    // set up the new object
    this.modelLists = modelLists;
    this.items = items;
    this.bindings = {};
    this.callback = {};

    cssInjector(cssListDragon, 'list-dragon-base', options.cssStylesheetReferenceElement);

}

ListDragon.prototype = {

    addEvt: function (target, type, listener, doNotBind) {
        var binding = {
            handler: handlers[type].bind(target, this),
            element: listener || window
        };

        if (!doNotBind) {
            this.bindings[type] = binding;
        }

        binding.element.addEventListener(type, binding.handler);

        return binding;
    },

    removeEvt: function (type) {
        var binding = this.bindings[type];
        delete this.bindings[type];
        binding.element.removeEventListener(type, binding.handler);
    },

    removeAllEventListeners: function () {
        // remove drag & drop events (mousemove, mouseup, and transitionend)
        for (var type in this.bindings) {
            var binding = this.bindings[type];
            binding.element.removeEventListener(type, binding.handler);
        }
        // remove the mousedown events from all list items
        this.items.forEach(function (item) {
            if (item.handler) {
                item.element.removeEventListener('mousedown', item.handler);
            }
        });
        // wheel events on the list elements
        this.modelLists.forEach(function (modelList) {
            modelList.element.removeEventListener('wheel', captureEvent);
        });
    },

    pointInListRects: function (point) {
        return this.modelLists.find(function (modelList) {
            var rect = modelList.element.getBoundingClientRect();

            rect = {
                left:   window.scrollX + rect.left,
                top:    window.scrollY + rect.top,
                right:  window.scrollX + rect.right,
                bottom: window.scrollY + rect.bottom,
                width:  rect.width,
                height: rect.height
            };

            modelList.rect = rect;

            if (pointInRect(point, rect)) {
                modelList.rect = rect;
                return true; // found
            } else {
                return false;
            }
        });
    },

    pointInItemRects: function (point, except1, except2) {
        return this.items.find(function (item) {
            var element = item.element;
            return (
                element !== except1 &&
                element !== except2 &&
                pointInRect(point, item.rect)
            );
        });
    },

    // get positions of all list items in page coords (normalized for window and list scrolling)
    getAllItemBoundingRects: function () {
        var modelLists = this.modelLists, height;
        this.items.forEach(function (item) {
            var itemElement = item.element,
                listElement = itemElement.parentElement,
                list = modelLists.find(function (list) { return list.element === listElement; });

            if (
                // omitted: default to true
                list.isDropTarget === undefined ||

                // function: use return value
                typeof list.isDropTarget === 'function' && list.isDropTarget() ||

                // otherwise: use truthiness of given value
                list.isDropTarget
            ) {
                var rect = itemElement.getBoundingClientRect(),
                    bottom = rect.bottom;

                if (itemElement === listElement.lastElementChild) {
                    bottom = listElement.getBoundingClientRect().bottom;
                    if (bottom < rect.top) {
                        bottom = rect.top + (height || 50);
                    }
                } else {
                    height = rect.height;
                }

                rect = {
                    left:   window.scrollX + rect.left,
                    right:  window.scrollX + rect.right,
                    top:    window.scrollY + rect.top    + listElement.scrollTop,
                    bottom: window.scrollY + bottom + listElement.scrollTop
                };

                item.rect = rect;
            }
        });
    },

    reinsert: function (target) {
        var style = target.style;
        style.width = style[transform] = style.transition = REVERT_TO_STYLESHEET_VALUE;

        target.classList.remove('dragon-pop');

        this.drop.style.transitionDuration = '0s';
        this.drop.style.borderTopWidth = REVERT_TO_STYLESHEET_VALUE;
        this.drop.parentElement.insertBefore(target, this.drop);

        delete this.drop;
    },

    // return an object { item: <item index within list>, list: <list index within list of lists> }
    itemCoordinates: function (item) {
        var listElement = item.parentElement,
            coords = { item: 0 };

        while ((item = item.previousElementSibling)) {
            ++coords.item;
        }

        this.modelLists.find(function (list, index) {
            coords.list = index;
            return list.element === listElement; // stop when we find the one we belong to
        });

        return coords;
    }

};

var handlers = {
    mousedown: function (dragon, evt) {

        evt.stopPropagation();
        evt.preventDefault();  //prevents user selection of rendered nodes during drag

        if (dragon.drop) {
            return;
        }

        var rect = this.getBoundingClientRect();

        dragon.rect = rect = {
            left:   Math.round(rect.left - 1),
            top:    Math.round(rect.top - 1),
            right:  Math.round(rect.right),
            bottom: Math.round(rect.bottom),
            width:  Math.round(rect.width),
            height: Math.round(rect.height)
        };

        dragon.pin = {
            x: window.scrollX + evt.clientX,
            y: window.scrollY + evt.clientY
        };

        dragon.origin = dragon.itemCoordinates(this);

        if (dragon.callback.grabbed) {
            dragon.callback.grabbed.call(this, dragon);
        }

        dragon.getAllItemBoundingRects();

        dragon.drop = this.nextElementSibling;
        dragon.drop.style.transitionDuration = '0s';
        dragon.drop.style.borderTopWidth = rect.height + 'px';

        this.style.width = rect.width + 'px';
        this.style.transitionDuration = '0s';
        this.style[transform] = translate(
            rect.left - window.scrollX,
            rect.top  - window.scrollY
        );
        this.classList.add('dragon-pop');
        this.style.zIndex = window.getComputedStyle(dragon.modelLists[0].container.parentElement).zIndex;

        if (!dragon.container) {
            // walk back to closest shadow root OR body tag OR root tag
            var container = this;
            while (container.parentNode) {
                container = container.parentNode;
                if (
                    typeof ShadowRoot !== 'undefined' && container instanceof ShadowRoot ||
                    container.tagName === 'BODY'
                ){
                    break;
                }
            }
            dragon.container = container;
        }

        dragon.container.appendChild(this);

        rect.left   += window.scrollX;
        rect.top    += window.scrollY;
        rect.right  += window.scrollX;
        rect.bottom += window.scrollY;

        dragon.addEvt(this, 'mousemove');
        dragon.addEvt(this, 'mouseup');
    },

    mousemove: function (dragon, evt) {
        dragon.drop.style.transition = REVERT_TO_STYLESHEET_VALUE;

        var hoverList = dragon.pointInListRects({ x: evt.clientX, y: evt.clientY }) || dragon.mostRecentHoverList;

        if (hoverList) {
            var dx = evt.clientX - dragon.pin.x,
                dy = evt.clientY - dragon.pin.y;

            dragon.mostRecentHoverList = hoverList;

            var maxScrollY = hoverList.element.scrollHeight - hoverList.rect.height,
                y = evt.clientY + window.scrollY,
                magnitude;

            if (maxScrollY > 0) {
                // list is scrollable (is taller than rect)
                if (hoverList.element.scrollTop > 0 && (magnitude = y - (hoverList.rect.top + 5)) < 0) {
                    // mouse near or above top and list is not scrolled to top yet
                    resetAutoScrollTimer(magnitude, 0, hoverList.element);
                } else if (hoverList.element.scrollTop < maxScrollY && (magnitude = y - (hoverList.rect.bottom - 1 - 5)) > 0) {
                    // mouse near or below bottom and list not scrolled to bottom yet
                    resetAutoScrollTimer(magnitude, maxScrollY, hoverList.element);
                } else {
                    // mouse inside
                    resetAutoScrollTimer();
                }
            }

            var other = dragon.pointInItemRects({
                x: evt.clientX,
                y: dragon.rect.bottom + window.scrollY + dy + hoverList.element.scrollTop
            }, this, dragon.drop);

            this.style[transform] = translate(
                dragon.rect.left - window.scrollX + dx,
                dragon.rect.top - window.scrollY + dy
            );

            if (other) {
                var element = other.element;
                element.style.transition = REVERT_TO_STYLESHEET_VALUE;
                element.style.borderTopWidth = dragon.drop.style.borderTopWidth;
                dragon.drop.style.borderTopWidth = null;
                dragon.drop = element;
            }
        }
    },

    mouseup: function (dragon, evt) {
        resetAutoScrollTimer();
        dragon.removeEvt('mousemove');
        dragon.removeEvt('mouseup');

        evt.stopPropagation();

        var newRect = this.getBoundingClientRect();

        if (
            window.scrollX + newRect.left === dragon.rect.left &&
            window.scrollY + newRect.top === dragon.rect.top
        ) {
            dragon.reinsert(this);
        } else {
            var dropRect = dragon.drop.getBoundingClientRect();

            dragon.addEvt(this, 'transitionend', this);
            this.style.transitionDuration = REVERT_TO_STYLESHEET_VALUE; //reverts to 200ms
            this.style.transitionProperty = transform;
            this.style[transform] = translate(
                dropRect.left - window.scrollX,
                dropRect.top - window.scrollY
            );
        }
    },

    transitionend: function (dragon, evt) {
        if (evt.propertyName === transform) {
            dragon.removeEvt('transitionend');
            dragon.reinsert(this);

            this.style.transitionProperty = REVERT_TO_STYLESHEET_VALUE; //reverts to border-top-width

            var originList = dragon.modelLists[dragon.origin.list];
            var model = originList.splice(dragon.origin.item, 1)[0];
            var destination = dragon.itemCoordinates(this);
            var destinationList = dragon.modelLists[destination.list];
            var interListDrop = originList !== destinationList;
            var listChanged = interListDrop || dragon.origin.item !== destination.item;
            destinationList.splice(destination.item, 0, model);

            if (listChanged) {
                originList.element.dispatchEvent(new CustomEvent('listchanged'));
                if (interListDrop) {
                    destinationList.element.dispatchEvent(new CustomEvent('listchanged'));
                }
            }

            if (dragon.callback.dropped) {
                dragon.callback.dropped.call(this, dragon);
            }
        }
    }
};

function resetAutoScrollTimer(magnitude, limit, element) {
    if (!magnitude) {
        clearInterval(timer);
        scrollVelocity = 0;
    } else {
        var changeDirection =
            scrollVelocity  <  0 && magnitude  >= 0 ||
            scrollVelocity === 0 && magnitude !== 0 ||
            scrollVelocity  >  0 && magnitude  <= 0;
        scrollVelocity = magnitude > 0 ? Math.min(50, magnitude) : Math.max(-50, magnitude);
        if (changeDirection) {
            clearInterval(timer);
            timer = setInterval(function (limit) {
                var scrollTop = element.scrollTop + scrollVelocity;
                if (scrollVelocity < 0 && scrollTop < limit || scrollVelocity > 0 && scrollTop > limit) {
                    element.scrollTop = limit;
                    clearInterval(timer);
                } else {
                    element.scrollTop = scrollTop;
                }
            }, 125);
        }
    }
}

function toArray(arrayLikeObject) {
    return Array.prototype.slice.call(arrayLikeObject);
}

function pointInRect(point, rect) {
    return rect.top <= point.y && point.y <= rect.bottom
        && rect.left <= point.x && point.x <= rect.right;
}

function translate(left, top) {
    return 'translate('
        + Math.floor(left + window.scrollX) + 'px,'
        + Math.floor(top + window.scrollY) + 'px)';
}

function htmlEncode(string) {
    var textNode = document.createTextNode(string);

    return document
        .createElement('a')
        .appendChild(textNode)
        .parentNode
        .innerHTML;
}

/**
 * Creates `<ul>...</ul>` elements and inserts them into an `element` property on each model.
 * @param {object} modelLists
 * @returns `modelLists`
 */
function createListElementsFromModelLists(modelLists, options) {
    var templateLabel = options.label || '{label}';

    modelLists.forEach(function (modelList, listIndex) {
        var listLabel = modelList.label || templateLabel,
            listHtmlEncode = modelList.htmlEncode !== undefined && modelList.htmlEncode || options.htmlEncode,
            container = document.createElement('div'),
            listElement = document.createElement('ul');

        if (modelList.models) {
            Object.keys(modelList).forEach(function (key) {
                if (key !== 'models') {
                    modelList.models[key] = modelList[key];
                }
            });
            modelLists[listIndex] = modelList = modelList.models;
        } else if (modelList instanceof Array) {
            modelList.models = modelList; // point to self
        } else {
            throw error('List [{1}] not an array of models (with or without additional properties) OR ' +
                'an object (with a `models` property containing an array of models).', listIndex);
        }

        modelList.forEach(function (model) {
            var modelLabel = model.label || listLabel,
                modelHtmlEncode = model.htmlEncode !== undefined && model.htmlEncode || listHtmlEncode,
                modelObject = typeof model === 'object' ? model : { label: model},
                label = format.call([modelObject, modelList, options], modelLabel),
                itemElement = document.createElement('li');

            itemElement.innerHTML = modelHtmlEncode ? htmlEncode(label) : label;

            listElement.appendChild(itemElement);
        });

        // append the final "fencepost" item -- drop target at bottom of list after all items
        var itemElement = document.createElement('li');
        itemElement.innerHTML = '&nbsp;';
        listElement.appendChild(itemElement);

        // append header to container
        if (modelList.title) {
            var header = document.createElement('div');
            header.innerHTML = listHtmlEncode ? htmlEncode(modelList.title) : modelList.title;
            container.appendChild(header);
        }

        container.appendChild(listElement);
        container.className = modelList.cssClassNames || options.cssClassNames || 'dragon-list';
        modelList.element = listElement;
        modelList.container = container;
    });

    return modelLists;
}

/**
 * Create a `.modelLists` array with these <li> elements' parent <ul> elements
 * @param {Element[]} listItemElements
 * @returns {Array}
 */
function createModelListsFromListElements(listItemElements) {
    var modelLists = [];

    listItemElements.forEach(function (itemElement) {
        var listElement = itemElement.parentElement,
            container = listElement.parentElement,
            models = [];
        if (!modelLists.find(function (list) { return list.element === listElement; })) {
            toArray(listElement.querySelectorAll('li')).forEach(function (itemElement) {
                if (itemElement !== listElement.lastElementChild) {
                    models.push(itemElement.innerHTML);
                }
            });
            models.element = listElement;
            models.container = container;
            modelLists.push(models);
        }
    });

    return modelLists;
}

function captureEvent(evt) {
    evt.stopPropagation();
}

function error() {
    return 'list-dragon: ' + format.apply(this, Array.prototype.slice.call(arguments));
}

// this interface consists solely of the prototypal object constructor
module.exports = ListDragon;

},{"css-injector":6,"templex":48}],40:[function(require,module,exports){
;(function () { // closure for web browsers

if (typeof module === 'object' && module.exports) {
  module.exports = LRUCache
} else {
  // just set the global for non-node platforms.
  this.LRUCache = LRUCache
}

function hOP (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key)
}

function naiveLength () { return 1 }

function LRUCache (options) {
  if (!(this instanceof LRUCache))
    return new LRUCache(options)

  if (typeof options === 'number')
    options = { max: options }

  if (!options)
    options = {}

  this._max = options.max
  // Kind of weird to have a default max of Infinity, but oh well.
  if (!this._max || !(typeof this._max === "number") || this._max <= 0 )
    this._max = Infinity

  this._lengthCalculator = options.length || naiveLength
  if (typeof this._lengthCalculator !== "function")
    this._lengthCalculator = naiveLength

  this._allowStale = options.stale || false
  this._maxAge = options.maxAge || null
  this._dispose = options.dispose
  this.reset()
}

// resize the cache when the max changes.
Object.defineProperty(LRUCache.prototype, "max",
  { set : function (mL) {
      if (!mL || !(typeof mL === "number") || mL <= 0 ) mL = Infinity
      this._max = mL
      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._max }
  , enumerable : true
  })

// resize the cache when the lengthCalculator changes.
Object.defineProperty(LRUCache.prototype, "lengthCalculator",
  { set : function (lC) {
      if (typeof lC !== "function") {
        this._lengthCalculator = naiveLength
        this._length = this._itemCount
        for (var key in this._cache) {
          this._cache[key].length = 1
        }
      } else {
        this._lengthCalculator = lC
        this._length = 0
        for (var key in this._cache) {
          this._cache[key].length = this._lengthCalculator(this._cache[key].value)
          this._length += this._cache[key].length
        }
      }

      if (this._length > this._max) trim(this)
    }
  , get : function () { return this._lengthCalculator }
  , enumerable : true
  })

Object.defineProperty(LRUCache.prototype, "length",
  { get : function () { return this._length }
  , enumerable : true
  })


Object.defineProperty(LRUCache.prototype, "itemCount",
  { get : function () { return this._itemCount }
  , enumerable : true
  })

LRUCache.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  var i = 0
  var itemCount = this._itemCount

  for (var k = this._mru - 1; k >= 0 && i < itemCount; k--) if (this._lruList[k]) {
    i++
    var hit = this._lruList[k]
    if (isStale(this, hit)) {
      del(this, hit)
      if (!this._allowStale) hit = undefined
    }
    if (hit) {
      fn.call(thisp, hit.value, hit.key, this)
    }
  }
}

LRUCache.prototype.keys = function () {
  var keys = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    keys[i++] = hit.key
  }
  return keys
}

LRUCache.prototype.values = function () {
  var values = new Array(this._itemCount)
  var i = 0
  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    values[i++] = hit.value
  }
  return values
}

LRUCache.prototype.reset = function () {
  if (this._dispose && this._cache) {
    for (var k in this._cache) {
      this._dispose(k, this._cache[k].value)
    }
  }

  this._cache = Object.create(null) // hash of items by key
  this._lruList = Object.create(null) // list of items in order of use recency
  this._mru = 0 // most recently used
  this._lru = 0 // least recently used
  this._length = 0 // number of items in the list
  this._itemCount = 0
}

LRUCache.prototype.dump = function () {
  var arr = []
  var i = 0

  for (var k = this._mru - 1; k >= 0 && i < this._itemCount; k--) if (this._lruList[k]) {
    var hit = this._lruList[k]
    if (!isStale(this, hit)) {
      //Do not store staled hits
      ++i
      arr.push({
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      });
    }
  }
  //arr has the most read first
  return arr
}

LRUCache.prototype.dumpLru = function () {
  return this._lruList
}

LRUCache.prototype.set = function (key, value, maxAge) {
  maxAge = maxAge || this._maxAge
  var now = maxAge ? Date.now() : 0
  var len = this._lengthCalculator(value)

  if (hOP(this._cache, key)) {
    if (len > this._max) {
      del(this, this._cache[key])
      return false
    }
    // dispose of the old one before overwriting
    if (this._dispose)
      this._dispose(key, this._cache[key].value)

    this._cache[key].now = now
    this._cache[key].maxAge = maxAge
    this._cache[key].value = value
    this._length += (len - this._cache[key].length)
    this._cache[key].length = len
    this.get(key)

    if (this._length > this._max)
      trim(this)

    return true
  }

  var hit = new Entry(key, value, this._mru++, len, now, maxAge)

  // oversized objects fall out of cache automatically.
  if (hit.length > this._max) {
    if (this._dispose) this._dispose(key, value)
    return false
  }

  this._length += hit.length
  this._lruList[hit.lu] = this._cache[key] = hit
  this._itemCount ++

  if (this._length > this._max)
    trim(this)

  return true
}

LRUCache.prototype.has = function (key) {
  if (!hOP(this._cache, key)) return false
  var hit = this._cache[key]
  if (isStale(this, hit)) {
    return false
  }
  return true
}

LRUCache.prototype.get = function (key) {
  return get(this, key, true)
}

LRUCache.prototype.peek = function (key) {
  return get(this, key, false)
}

LRUCache.prototype.pop = function () {
  var hit = this._lruList[this._lru]
  del(this, hit)
  return hit || null
}

LRUCache.prototype.del = function (key) {
  del(this, this._cache[key])
}

LRUCache.prototype.load = function (arr) {
  //reset the cache
  this.reset();

  var now = Date.now()
  //A previous serialized cache has the most recent items first
  for (var l = arr.length - 1; l >= 0; l-- ) {
    var hit = arr[l]
    var expiresAt = hit.e || 0
    if (expiresAt === 0) {
      //the item was created without expiration in a non aged cache
      this.set(hit.k, hit.v)
    } else {
      var maxAge = expiresAt - now
      //dont add already expired items
      if (maxAge > 0) this.set(hit.k, hit.v, maxAge)
    }
  }
}

function get (self, key, doUse) {
  var hit = self._cache[key]
  if (hit) {
    if (isStale(self, hit)) {
      del(self, hit)
      if (!self._allowStale) hit = undefined
    } else {
      if (doUse) use(self, hit)
    }
    if (hit) hit = hit.value
  }
  return hit
}

function isStale(self, hit) {
  if (!hit || (!hit.maxAge && !self._maxAge)) return false
  var stale = false;
  var diff = Date.now() - hit.now
  if (hit.maxAge) {
    stale = diff > hit.maxAge
  } else {
    stale = self._maxAge && (diff > self._maxAge)
  }
  return stale;
}

function use (self, hit) {
  shiftLU(self, hit)
  hit.lu = self._mru ++
  self._lruList[hit.lu] = hit
}

function trim (self) {
  while (self._lru < self._mru && self._length > self._max)
    del(self, self._lruList[self._lru])
}

function shiftLU (self, hit) {
  delete self._lruList[ hit.lu ]
  while (self._lru < self._mru && !self._lruList[self._lru]) self._lru ++
}

function del (self, hit) {
  if (hit) {
    if (self._dispose) self._dispose(hit.key, hit.value)
    self._length -= hit.length
    self._itemCount --
    delete self._cache[ hit.key ]
    shiftLU(self, hit)
  }
}

// classy, since V8 prefers predictable objects.
function Entry (key, value, lu, length, now, maxAge) {
  this.key = key
  this.value = value
  this.lu = lu
  this.length = length
  this.now = now
  if (maxAge) this.maxAge = maxAge
}

})()

},{}],41:[function(require,module,exports){
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
      case '#':
      case '^':
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case '/':
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
    case -1:
      match = this.tail;
      this.tail = '';
      break;
    case 0:
      match = '';
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.2.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

}));

},{}],42:[function(require,module,exports){
/* object-iterators.js - Mini Underscore library
 * by Jonathan Eiten
 *
 * The methods below operate on objects (but not arrays) similarly
 * to Underscore (http://underscorejs.org/#collections).
 *
 * For more information:
 * https://github.com/joneit/object-iterators
 */

'use strict';

/**
 * @constructor
 * @summary Wrap an object for one method call.
 * @Desc Note that the `new` keyword is not necessary.
 * @param {object|null|undefined} object - `null` or `undefined` is treated as an empty plain object.
 * @return {Wrapper} The wrapped object.
 */
function Wrapper(object) {
    if (object instanceof Wrapper) {
        return object;
    }
    if (!(this instanceof Wrapper)) {
        return new Wrapper(object);
    }
    this.originalValue = object;
    this.o = object || {};
}

/**
 * @name Wrapper.chain
 * @summary Wrap an object for a chain of method calls.
 * @Desc Calls the constructor `Wrapper()` and modifies the wrapper for chaining.
 * @param {object} object
 * @return {Wrapper} The wrapped object.
 */
Wrapper.chain = function (object) {
    var wrapped = Wrapper(object); // eslint-disable-line new-cap
    wrapped.chaining = true;
    return wrapped;
};

Wrapper.prototype = {
    /**
     * Unwrap an object wrapped with {@link Wrapper.chain|Wrapper.chain()}.
     * @return {object|null|undefined} The value originally wrapped by the constructor.
     * @memberOf Wrapper.prototype
     */
    value: function () {
        return this.originalValue;
    },

    /**
     * @desc Mimics Underscore's [each](http://underscorejs.org/#each) method: Iterate over the members of the wrapped object, calling `iteratee()` with each.
     * @param {function} iteratee - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function is undefined; an `.each` loop cannot be broken out of (use {@link Wrapper#find|.find} instead).
     * @param {object} [context] - If given, `iteratee` is bound to this object. In other words, this object becomes the `this` value in the calls to `iteratee`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {Wrapper} The wrapped object for chaining.
     * @memberOf Wrapper.prototype
     */
    each: function (iteratee, context) {
        var o = this.o;
        Object.keys(o).forEach(function (key) {
            iteratee.call(this, o[key], key, o);
        }, context || o);
        return this;
    },

    /**
     * @desc Mimics Underscore's [find](http://underscorejs.org/#find) method: Look through each member of the wrapped object, returning the first one that passes a truth test (`predicate`), or `undefined` if no value passes the test. The function returns the value of the first acceptable member, and doesn't necessarily traverse the entire object.
     * @param {function} predicate - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function should be truthy if the member passes the test and falsy otherwise.
     * @param {object} [context] - If given, `predicate` is bound to this object. In other words, this object becomes the `this` value in the calls to `predicate`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} The found property's value, or undefined if not found.
     * @memberOf Wrapper.prototype
     */
    find: function (predicate, context) {
        var o = this.o;
        var result;
        if (o) {
            result = Object.keys(o).find(function (key) {
                return predicate.call(this, o[key], key, o);
            }, context || o);
            if (result !== undefined) {
                result = o[result];
            }
        }
        return result;
    },

    /**
     * @desc Mimics Underscore's [filter](http://underscorejs.org/#filter) method: Look through each member of the wrapped object, returning the values of all members that pass a truth test (`predicate`), or empty array if no value passes the test. The function always traverses the entire object.
     * @param {function} predicate - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function should be truthy if the member passes the test and falsy otherwise.
     * @param {object} [context] - If given, `predicate` is bound to this object. In other words, this object becomes the `this` value in the calls to `predicate`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} An array containing the filtered values.
     * @memberOf Wrapper.prototype
     */
    filter: function (predicate, context) {
        var o = this.o;
        var result = [];
        if (o) {
            Object.keys(o).forEach(function (key) {
                if (predicate.call(this, o[key], key, o)) {
                    result.push(o[key]);
                }
            }, context || o);
        }
        return result;
    },

    /**
     * @desc Mimics Underscore's [map](http://underscorejs.org/#map) method: Produces a new array of values by mapping each value in list through a transformation function (`iteratee`). The function always traverses the entire object.
     * @param {function} iteratee - For each member of the wrapped object, this function is called with three arguments: `(value, key, object)`. The return value of this function is concatenated to the end of the new array.
     * @param {object} [context] - If given, `iteratee` is bound to this object. In other words, this object becomes the `this` value in the calls to `predicate`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} An array containing the filtered values.
     * @memberOf Wrapper.prototype
     */
    map: function (iteratee, context) {
        var o = this.o;
        var result = [];
        if (o) {
            Object.keys(o).forEach(function (key) {
                result.push(iteratee.call(this, o[key], key, o));
            }, context || o);
        }
        return result;
    },

    /**
     * @desc Mimics Underscore's [reduce](http://underscorejs.org/#reduce) method: Boil down the values of all the members of the wrapped object into a single value. `memo` is the initial state of the reduction, and each successive step of it should be returned by `iteratee()`.
     * @param {function} iteratee - For each member of the wrapped object, this function is called with four arguments: `(memo, value, key, object)`. The return value of this function becomes the new value of `memo` for the next iteration.
     * @param {*} [memo] - If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
     * @param {object} [context] - If given, `iteratee` is bound to this object. In other words, this object becomes the `this` value in the calls to `iteratee`. (Otherwise, the `this` value will be the unwrapped object.)
     * @return {*} The value of `memo` "reduced" as per `iteratee`.
     * @memberOf Wrapper.prototype
     */
    reduce: function (iteratee, memo, context) {
        var o = this.o;
        if (o) {
            Object.keys(o).forEach(function (key, idx) {
                memo = (!idx && memo === undefined) ? o[key] : iteratee(memo, o[key], key, o);
            }, context || o);
        }
        return memo;
    },

    /**
     * @desc Mimics Underscore's [extend](http://underscorejs.org/#extend) method: Copy all of the properties in each of the `source` object parameter(s) over to the (wrapped) destination object (thus mutating it). It's in-order, so the properties of the last `source` object will override properties with the same name in previous arguments or in the destination object.
     * > This method copies own members as well as members inherited from prototype chain.
     * @param {...object|null|undefined} source - Values of `null` or `undefined` are treated as empty plain objects.
     * @return {Wrapper|object} The wrapped destination object if chaining is in effect; otherwise the unwrapped destination object.
     * @memberOf Wrapper.prototype
     */
    extend: function (source) {
        var o = this.o;
        Array.prototype.slice.call(arguments).forEach(function (object) {
            if (object) {
                for (var key in object) {
                    o[key] = object[key];
                }
            }
        });
        return this.chaining ? this : o;
    },

    /**
     * @desc Mimics Underscore's [extendOwn](http://underscorejs.org/#extendOwn) method: Like {@link Wrapper#extend|extend}, but only copies its "own" properties over to the destination object.
     * @param {...object|null|undefined} source - Values of `null` or `undefined` are treated as empty plain objects.
     * @return {Wrapper|object} The wrapped destination object if chaining is in effect; otherwise the unwrapped destination object.
     * @memberOf Wrapper.prototype
     */
    extendOwn: function (source) {
        var o = this.o;
        Array.prototype.slice.call(arguments).forEach(function (object) {
            Wrapper(object).each(function (val, key) { // eslint-disable-line new-cap
                o[key] = val;
            });
        });
        return this.chaining ? this : o;
    }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) { // eslint-disable-line no-extend-native
        if (this === null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

module.exports = Wrapper;

},{}],43:[function(require,module,exports){
'use strict';

/** @module overrider */

/**
 * Mixes members of all `sources` into `target`, handling getters and setters properly.
 *
 * Any number of `sources` objects may be given and each is copied in turn.
 *
 * @example
 * var overrider = require('overrider');
 * var target = { a: 1 }, source1 = { b: 2 }, source2 = { c: 3 };
 * target === overrider(target, source1, source2); // true
 * // target object now has a, b, and c; source objects untouched
 *
 * @param {object} object - The target object to receive sources.
 * @param {...object} [sources] - Object(s) containing members to copy to `target`. (Omitting is a no-op.)
 * @returns {object} The target object (`target`)
 */
function overrider(target, sources) { // eslint-disable-line no-unused-vars
    for (var i = 1; i < arguments.length; ++i) {
        mixIn.call(target, arguments[i]);
    }

    return target;
}

/**
 * Mix `this` members into `target`.
 *
 * @example
 * // A. Simple usage (using .call):
 * var mixInTo = require('overrider').mixInTo;
 * var target = { a: 1 }, source = { b: 2 };
 * target === overrider.mixInTo.call(source, target); // true
 * // target object now has both a and b; source object untouched
 *
 * @example
 * // B. Semantic usage (when the source hosts the method):
 * var mixInTo = require('overrider').mixInTo;
 * var target = { a: 1 }, source = { b: 2, mixInTo: mixInTo };
 * target === source.mixInTo(target); // true
 * // target object now has both a and b; source object untouched
 *
 * @this {object} Target.
 * @param target
 * @returns {object} The target object (`target`)
 * @memberOf module:overrider
 */
function mixInTo(target) {
    var descriptor;
    for (var key in this) {
        if ((descriptor = Object.getOwnPropertyDescriptor(this, key))) {
            Object.defineProperty(target, key, descriptor);
        }
    }
    return target;
}

/**
 * Mix `source` members into `this`.
 *
 * @example
 * // A. Simple usage (using .call):
 * var mixIn = require('overrider').mixIn;
 * var target = { a: 1 }, source = { b: 2 };
 * target === overrider.mixIn.call(target, source) // true
 * // target object now has both a and b; source object untouched
 *
 * @example
 * // B. Semantic usage (when the target hosts the method):
 * var mixIn = require('overrider').mixIn;
 * var target = { a: 1, mixIn: mixIn }, source = { b: 2 };
 * target === target.mixIn(source) // true
 * // target now has both a and b (and mixIn); source untouched
 *
 * @param source
 * @returns {object} The target object (`this`)
 * @memberOf overrider
 * @memberOf module:overrider
 */
function mixIn(source) {
    var descriptor;
    for (var key in source) {
        if ((descriptor = Object.getOwnPropertyDescriptor(source, key))) {
            Object.defineProperty(this, key, descriptor);
        }
    }
    return this;
}

overrider.mixInTo = mixInTo;
overrider.mixIn = mixIn;

module.exports = overrider;

},{}],44:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var REGEXP_INDIRECTION = /^(\w+)\((\w+)\)$/;  // finds complete pattern a(b) where both a and b are regex "words"

/** @typedef {object} valueItem
 * You should supply both `name` and `alias` but you could omit one or the other and whichever you provide will be used for both.
 * > If you only give the `name` property, you might as well just give a string for {@link menuItem} rather than this object.
 * @property {string} [name=alias] - Value of `value` attribute of `<option>...</option>` element.
 * @property {string} [alias=name] - Text of `<option>...</option>` element.
 * @property {string} [type] One of the keys of `this.converters`. If not one of these (including `undefined`), field values will be tested with a string comparison.
 * @property {boolean} [hidden=false]
 */

/** @typedef {object|menuItem[]} submenuItem
 * @summary Hierarchical array of select list items.
 * @desc Data structure representing the list of `<option>...</option>` and `<optgroup>...</optgroup>` elements that make up a `<select>...</select>` element.
 *
 * > Alternate form: Instead of an object with a `menu` property containing an array, may itself be that array. Both forms have the optional `label` property.
 * @property {string} [label] - Defaults to a generated string of the form "Group n[.m]..." where each decimal position represents a level of the optgroup hierarchy.
 * @property {menuItem[]} submenu
 */

/** @typedef {string|valueItem|submenuItem} menuItem
 * May be one of three possible types that specify either an `<option>....</option>` element or an `<optgroup>....</optgroup>` element as follows:
 * * If a `string`, specifies the text of an `<option>....</option>` element with no `value` attribute. (In the absence of a `value` attribute, the `value` property of the element defaults to the text.)
 * * If shaped like a {@link valueItem} object, specifies both the text and value of an `<option....</option>` element.
 * * If shaped like a {@link submenuItem} object (or its alternate array form), specifies an `<optgroup>....</optgroup>` element.
 */

/**
 * @summary Builds a new menu pre-populated with items and groups.
 * @desc This function creates a new pop-up menu (a.k.a. "drop-down"). This is a `<select>...</select>` element, pre-populated with items (`<option>...</option>` elements) and groups (`<optgroup>...</optgroup>` elements).
 * > Bonus: This function also builds `input type=text` elements.
 * > NOTE: This function generates OPTGROUP elements for subtrees. However, note that HTML5 specifies that OPTGROUP elemnents made not nest! This function generates the markup for them but they are not rendered by most browsers, or not completely. Therefore, for now, do not specify more than one level subtrees. Future versions of HTML may support it. I also plan to add here options to avoid OPTGROUPS entirely either by indenting option text, or by creating alternate DOM nodes using `<li>` instead of `<select>`, or both.
 * @memberOf popMenu
 *
 * @param {Element|string} el - Must be one of (case-sensitive):
 * * text box - an `HTMLInputElement` to use an existing element or `'INPUT'` to create a new one
 * * drop-down - an `HTMLSelectElement` to use an existing element or `'SELECT'` to create a new one
 * * submenu - an `HTMLOptGroupElement` to use an existing element or `'OPTGROUP'` to create a new one (meant for internal use only)
 *
 * @param {menuItem[]} [menu] - Hierarchical list of strings to add as `<option>...</option>` or `<optgroup>....</optgroup>` elements. Omitting creates a text box.
 *
 * @param {null|string} [options.prompt=''] - Adds an initial `<option>...</option>` element to the drop-down with this value in parentheses as its `text`; and empty string as its `value`. Default is empty string, which creates a blank prompt; `null` suppresses prompt altogether.
 *
 * @param {boolean} [options.sort] - Whether to alpha sort or not. If truthy, sorts each optgroup on its `label`; and each select option on its text (its `alias` if given; or its `name` if not).
 *
 * @param {string[]} [options.blacklist] - Optional list of menu item names to be ignored.
 *
 * @param {number[]} [options.breadcrumbs] - List of option group section numbers (root is section 0). (For internal use.)
 *
 * @param {boolean} [options.append=false] - When `el` is an existing `<select>` Element, giving truthy value adds the new children without first removing existing children.
 *
 * @returns {Element} Either a `<select>` or `<optgroup>` element.
 */
function build(el, menu, options) {
    options = options || {};

    var prompt = options.prompt,
        blacklist = options.blacklist,
        sort = options.sort,
        breadcrumbs = options.breadcrumbs || [],
        path = breadcrumbs.length ? breadcrumbs.join('.') + '.' : '',
        subtreeName = popMenu.subtree,
        groupIndex = 0,
        tagName;

    if (el instanceof Element) {
        tagName = el.tagName;
        if (!options.append) {
            el.innerHTML = ''; // remove all <option> and <optgroup> elements
        }
    } else {
        tagName = el;
        el = document.createElement(tagName);
    }

    if (menu) {
        var add, newOption;
        if (tagName === 'SELECT') {
            add = el.add;
            if (prompt) {
                newOption = new Option(prompt, '');
                newOption.innerHTML += '&hellip;';
                el.add(newOption);
            } else if (prompt !== null) {
                el.add(new Option());
            }
        } else {
            add = el.appendChild;
            el.label = prompt;
        }

        if (sort) {
            menu = menu.slice().sort(itemComparator); // sorted clone
        }

        menu.forEach(function(item) {
            // if item is of form a(b) and there is an function a in options, then item = options.a(b)
            if (options && typeof item === 'string') {
                var indirection = item.match(REGEXP_INDIRECTION);
                if (indirection) {
                    var a = indirection[1],
                        b = indirection[2],
                        f = options[a];
                    if (typeof f === 'function') {
                        item = f(b);
                    } else {
                        throw 'build: Expected options.' + a + ' to be a function.';
                    }
                }
            }

            var subtree = item[subtreeName] || item;
            if (subtree instanceof Array) {

                var groupOptions = {
                    breadcrumbs: breadcrumbs.concat(++groupIndex),
                    prompt: item.label || 'Group ' + path + groupIndex,
                    options: sort,
                    blacklist: blacklist
                };

                var optgroup = build('OPTGROUP', subtree, groupOptions);

                if (optgroup.childElementCount) {
                    el.appendChild(optgroup);
                }

            } else if (typeof item !== 'object') {

                if (!(blacklist && blacklist.indexOf(item) >= 0)) {
                    add.call(el, new Option(item));
                }

            } else if (!item.hidden) {

                var name = item.name || item.alias;
                if (!(blacklist && blacklist.indexOf(name) >= 0)) {
                    add.call(el, new Option(
                        item.alias || item.name,
                        name
                    ));
                }

            }
        });
    } else {
        el.type = 'text';
    }

    return el;
}

function itemComparator(a, b) {
    a = a.alias || a.name || a.label || a;
    b = b.alias || b.name || b.label || b;
    return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * @summary Recursively searches the context array of `menuItem`s for a named `item`.
 * @memberOf popMenu
 * @this Array
 * @param {object} [options]
 * @param {string} [options.keys=[popMenu.defaultKey]] - Properties to search each menuItem when it is an object.
 * @param {boolean} [options.caseSensitive=false] - Ignore case while searching.
 * @param {string} value - Value to search for.
 * @returns {undefined|menuItem} The found item or `undefined` if not found.
 */
function lookup(options, value) {
    if (arguments.length === 1) {
        value = options;
        options = undefined;
    }

    var shallow, deep, item, prop,
        keys = options && options.keys || [popMenu.defaultKey],
        caseSensitive = options && options.caseSensitive;

    value = toString(value, caseSensitive);

    shallow = this.find(function(item) {
        var subtree = item[popMenu.subtree] || item;

        if (subtree instanceof Array) {
            return (deep = lookup.call(subtree, options, value));
        }

        if (typeof item !== 'object') {
            return toString(item, caseSensitive) === value;
        } else {
            for (var i = 0; i < keys.length; ++i) {
                prop = item[keys[i]];
                if (prop && toString(prop, caseSensitive) === value) {
                    return true;
                }
            }
        }
    });

    item = deep || shallow;

    return item && (item.name ? item : { name: item });
}

function toString(s, caseSensitive) {
    var result = '';
    if (s) {
        result += s; // convert s to string
        if (!caseSensitive) {
            result = result.toUpperCase();
        }
    }
    return result;
}

/**
 * @summary Recursively walks the context array of `menuItem`s and calls `iteratee` on each item therein.
 * @desc `iteratee` is called with each item (terminal node) in the menu tree and a flat 0-based index. Recurses on member with name of `popMenu.subtree`.
 *
 * The node will always be a {@link valueItem} object; when a `string`, it is boxed for you.
 *
 * @memberOf popMenu
 *
 * @this Array
 *
 * @param {function} iteratee - For each item in the menu, `iteratee` is called with:
 * * the `valueItem` (if the item is a primative string, it is wrapped up for you)
 * * a 0-based `ordinal`
 *
 * The `iteratee` return value can be used to replace the item, as follows:
 * * `undefined` - do nothing
 * * `null` - splice out the item; resulting empty submenus are also spliced out (see note)
 * * anything else - replace the item with this value; if value is a subtree (i.e., an array) `iteratee` will then be called to walk it as well (see note)
 *
 * > Note: Returning anything (other than `undefined`) from `iteratee` will (deeply) mutate the original `menu` so you may want to copy it first (deeply, including all levels of array nesting but not the terminal node objects).
 *
 * @returns {number} Number of items (terminal nodes) in the menu tree.
 */
function walk(iteratee) {
    var menu = this,
        ordinal = 0,
        subtreeName = popMenu.subtree,
        i, item, subtree, newVal;

    for (i = menu.length - 1; i >= 0; --i) {
        item = menu[i];
        subtree = item[subtreeName] || item;

        if (!(subtree instanceof Array)) {
            subtree = undefined;
        }

        if (!subtree) {
            newVal = iteratee(item.name ? item : { name: item }, ordinal);
            ordinal += 1;

            if (newVal !== undefined) {
                if (newVal === null) {
                    menu.splice(i, 1);
                    ordinal -= 1;
                } else {
                    menu[i] = item = newVal;
                    subtree = item[subtreeName] || item;
                    if (!(subtree instanceof Array)) {
                        subtree = undefined;
                    }
                }
            }
        }

        if (subtree) {
            ordinal += walk.call(subtree, iteratee);
            if (subtree.length === 0) {
                menu.splice(i, 1);
                ordinal -= 1;
            }
        }
    }

    return ordinal;
}

/**
 * @summary Format item name with it's alias when available.
 * @memberOf popMenu
 * @param {string|valueItem} item
 * @returns {string} The formatted name and alias.
 */
function formatItem(item) {
    var result = item.name || item;
    if (item.alias) {
        result = '"' + item.alias + '" (' + result + ')';
    }
    return result;
}


function isGroupProxy(s) {
    return REGEXP_INDIRECTION.test(s);
}

/**
 * @namespace
 */
var popMenu = {
    build: build,
    walk: walk,
    lookup: lookup,
    formatItem: formatItem,
    isGroupProxy: isGroupProxy,
    subtree: 'submenu',
    defaultKey: 'name'
};

module.exports = popMenu;

},{}],45:[function(require,module,exports){
'use strict';

/* eslint-env node, browser */

/**
 * Creates a new read-only property and attaches it to the provided context.
 * @private
 * @param {string} name - Name for new property.
 * @param {*} [value] - Value of new property.
 */
function addReadOnlyProperty(name, value) {
    Object.defineProperty(this, name, {
        value: value,
        writable: false,
        enumerable: true,
        configurable: false
    });
}

/**
 * @constructor Point
 *
 * @desc This object represents a single point in an abstract 2-dimensional matrix.
 *
 * The unit of measure is typically pixels.
 * (If used to model computer graphics, vertical coordinates are typically measured downwards
 * from the top of the window. This convention however is not inherent in this object.)
 *
 * Note: This object should be instantiated with the `new` keyword.
 *
 * @param {number} x - the new point's `x` property
 * @param {number} y - the new point's `y` property
 */
function Point(x, y) {

    /**
     * @name x
     * @type {number}
     * @summary This point's horizontal coordinate.
     * @desc Created upon instantiation by the {@link Point|constructor}.
     * @memberOf Point.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'x', Number(x) || 0);

    /**
     * @name y
     * @type {number}
     * @summary This point's vertical coordinate.
     * @desc Created upon instantiation by the {@link Point|constructor}.
     * @memberOf Point.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'y', Number(y) || 0);

}

Point.prototype = {

    /**
     * @returns {Point} A new point which is this point's position increased by coordinates of given `offset`.
     * @param {Point} offset - Horizontal and vertical values to add to this point's coordinates.
     * @memberOf Point.prototype
     */
    plus: function(offset) {
        return new Point(
            this.x + offset.x,
            this.y + offset.y
        );
    },

    /**
     * @returns {Point} A new point which is this point's position increased by given offsets.
     * @param {number} [offsetX=0] - Value to add to this point's horizontal coordinate.
     * @param {number} [offsetY=0] - Value to add to this point's horizontal coordinate.
     * @memberOf Point.prototype
     */
    plusXY: function(offsetX, offsetY) {
        return new Point(
            this.x + (offsetX || 0),
            this.y + (offsetY || 0)
        );
    },

    /**
     * @returns {Point} A new point which is this point's position decreased by coordinates of given `offset`.
     * @param {Point} offset - Horizontal and vertical values to subtract from this point's coordinates.
     * @memberOf Point.prototype
     */
    minus: function(offset) {
        return new Point(
            this.x - offset.x,
            this.y - offset.y
        );
    },

    /**
     * @returns {Point} A new `Point` positioned to least x and least y of this point and given `offset`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    min: function(point) {
        return new Point(
            Math.min(this.x, point.x),
            Math.min(this.y, point.y)
        );
    },

    /**
     * @returns {Point} A new `Point` positioned to greatest x and greatest y of this point and given `point`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    max: function(point) {
        return new Point(
            Math.max(this.x, point.x),
            Math.max(this.y, point.y)
        );
    },

    /**
     * @returns {number} Distance between given `point` and this point using Pythagorean Theorem formula.
     * @param {Point} point - A point from which to compute the distance to this point.
     * @memberOf Point.prototype
     */
    distance: function(point) {
        var deltaX = point.x - this.x,
            deltaY = point.y - this.y;

        return Math.sqrt(
            deltaX * deltaX +
            deltaY * deltaY
        );
    },

    /**
     * _(Formerly: `equal`.)_
     * @returns {boolean} `true` iff _both_ coordinates of this point are exactly equal to those of given `point`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    equals: function(point) {
        var result = false;

        if (point) {
            result =
                this.x === point.x &&
                this.y === point.y;
        }

        return result;
    },

    /**
     * @returns {boolean} `true` iff _both_ coordinates of this point are greater than those of given `point`.
     * @param {Point} point - A point to compare to this point
     * @memberOf Point.prototype
     */
    greaterThan: function(point) {
        return (
            this.x > point.x &&
            this.y > point.y
        );
    },

    /**
     * @returns {boolean} `true` iff _both_ coordinates of this point are less than those of given `point`.
     * @param {Point} point - A point to compare to this point
     * @memberOf Point.prototype
     */
    lessThan: function(point) {
        return (
            this.x < point.x &&
            this.y < point.y
        );
    },

    /**
     * _(Formerly `greaterThanEqualTo`.)_
     * @returns {boolean} `true` iff _both_ coordinates of this point are greater than or equal to those of given `point`.
     * @param {Point} point - A point to compare to this point
     * @memberOf Point.prototype
     */
    greaterThanOrEqualTo: function(point) {
        return (
            this.x >= point.x &&
            this.y >= point.y
        );
    },

    /**
     * _(Formerly `lessThanEqualTo`.)_
     * @returns {boolean} `true` iff _both_ coordinates of this point are less than or equal to those of given `point`.
     * @param {Point} point - A point to compare to this point.
     * @memberOf Point.prototype
     */
    lessThanOrEqualTo: function(point) {
        return (
            this.x <= point.x &&
            this.y <= point.y
        );
    },

    /**
     * _(Formerly `isContainedWithinRectangle`.)_
     * @param rect {Rectangle} - Rectangle to test this point against.
     * @returns {boolean} `true` iff this point is within given `rect`.
     * @memberOf Point.prototype
     */
    within: function(rect) {
        var minX = rect.origin.x,
            maxX = minX + rect.extent.x;
        var minY = rect.origin.y,
            maxY = minY + rect.extent.y;

        if (rect.extent.x < 0) {
            minX = maxX;
            maxX = rect.origin.x;
        }

        if (rect.extent.y < 0) {
            minY = maxY;
            maxY = rect.origin.y;
        }

        return (
            minX <= this.x && this.x < maxX &&
            minY <= this.y && this.y < maxY
        );
    }
};

Point.prototype.EQ = Point.prototype.equals;
Point.prototype.GT = Point.prototype.greaterThan;
Point.prototype.LT = Point.prototype.lessThan;
Point.prototype.GE = Point.prototype.greaterThanOrEqualTo;
Point.prototype.LE = Point.prototype.lessThanOrEqualTo;


/**
 * @constructor Rectangle
 *
 * @desc This object represents a rectangular area within an abstract 2-dimensional matrix.
 *
 * The unit of measure is typically pixels.
 * (If used to model computer graphics, vertical coordinates are typically measured downwards
 * from the top of the window. This convention however is not inherent in this object.)
 *
 * Normally, the `x` and `y` parameters to the constructor describe the upper left corner of the rect.
 * However, negative values of `width` and `height` will be added to the given `x` and `y`. That is,
 * a negative value of the `width` parameter will extend the rect to the left of the given `x` and
 * a negative value of the `height` parameter will extend the rect above the given `y`.
 * In any case, after instantiation the following are guaranteed to always be true:
 * * The `extent`, `width`, and `height` properties _always_ give positive values.
 * * The `origin`, `top`, and `left` properties _always_ reflect the upper left corner.
 * * The `corner`, `bottom`, and `right` properties _always_ reflect the lower right corner.
 *
 * Note: This object should be instantiated with the `new` keyword.
 *
 * @param {number} [x=0] - Horizontal coordinate of some corner of the rect.
 * @param {number} [y=0] - Vertical coordinate of some corner of the rect.
 * @param {number} [width=0] - Width of the new rect. May be negative (see above).
 * @param {number} [height=0] - Height of the new rect. May be negative (see above).
 */
function Rectangle(x, y, width, height) {

    x = Number(x) || 0;
    y = Number(y) || 0;
    width = Number(width) || 0;
    height = Number(height) || 0;

    if (width < 0) {
        x += width;
        width = -width;
    }

    if (height < 0) {
        y += height;
        height = -height;
    }

    /**
     * @name origin
     * @type {Point}
     * @summary Upper left corner of this rect.
     * @desc Created upon instantiation by the {@linkplain Rectangle|constructor}.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'origin', new Point(x, y));

    /**
     * @name extent
     * @type {Point}
     * @summary this rect's width and height.
     * @desc Unlike the other `Point` properties, `extent` is not a global coordinate pair; rather it consists of a _width_ (`x`, always positive) and a _height_ (`y`, always positive).
     *
     * This object might be more legitimately typed as something like `Area` with properties `width` and `height`; however we wanted it to be able to use it efficiently with a point's `plus` and `minus` methods (that is, without those methods having to check and branch on the type of its parameter).
     *
     * Created upon instantiation by the {@linkplain Rectangle|constructor}.
     * @see The {@link Rectangle#corner|corner} method.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'extent', new Point(width, height));

    /**
     * @name corner
     * @type {Point}
     * @summary Lower right corner of this rect.
     * @desc This is a calculated value created upon instantiation by the {@linkplain Rectangle|constructor}. It is `origin` offset by `extent`.
     *
     * **Note:** These coordinates actually point to the pixel one below and one to the right of the rect's actual lower right pixel.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'corner', new Point(x + width, y + height));

    /**
     * @name center
     * @type {Point}
     * @summary Center of this rect.
     * @desc Created upon instantiation by the {@linkplain Rectangle|constructor}.
     * @memberOf Rectangle.prototype
     * @abstract
     */
    addReadOnlyProperty.call(this, 'center', new Point(x + (width / 2), y + (height / 2)));

}

Rectangle.prototype = {

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Minimum vertical coordinate of this rect.
     * @memberOf Rectangle.prototype
     */
    get top() {
        return this.origin.y;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Minimum horizontal coordinate of this rect.
     * @memberOf Rectangle.prototype
     */
    get left() {
        return this.origin.x;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Maximum vertical coordinate of this rect + 1.
     * @memberOf Rectangle.prototype
     */
    get bottom() {
        return this.corner.y;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Maximum horizontal coordinate of this rect + 1.
     * @memberOf Rectangle.prototype
     */
    get right() {
        return this.corner.x;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Width of this rect (always positive).
     * @memberOf Rectangle.prototype
     */
    get width() {
        return this.extent.x;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Height of this rect (always positive).
     * @memberOf Rectangle.prototype
     */
    get height() {
        return this.extent.y;
    },

    /**
     * @type {number}
     * @desc _(Formerly a function; now a getter.)_
     * @summary Area of this rect.
     * @memberOf Rectangle.prototype
     */
    get area() {
        return this.width * this.height;
    },

    /**
     * @returns {Rectangle} A copy of this rect but with horizontal position reset to given `x` and no width.
     * @param {number} x - Horizontal coordinate of the new rect.
     * @memberOf Rectangle.prototype
     */
    flattenXAt: function(x) {
        return new Rectangle(x, this.origin.y, 0, this.extent.y);
    },

    /**
     * @returns {Rectangle} A copy of this rect but with vertical position reset to given `y` and no height.
     * @param {number} y - Vertical coordinate of the new rect.
     * @memberOf Rectangle.prototype
     */
    flattenYAt: function(y) {
        return new Rectangle(this.origin.x, y, this.extent.x, 0);
    },

    /**
     * @returns {boolean} `true` iff given `point` entirely contained within this rect.
     * @param {Point} pointOrRect - The point or rect to test for containment.
     * @memberOf Rectangle.prototype
     */
    contains: function(pointOrRect) {
        return pointOrRect.within(this);
    },

    /**
     * _(Formerly `isContainedWithinRectangle`.)_
     * @returns {boolean} `true` iff `this` rect is entirely contained within given `rect`.
     * @param {Rectangle} rect - Rectangle to test against this rect.
     * @memberOf Rectangle.prototype
     */
    within: function(rect) {
        return (
            rect.origin.lessThanOrEqualTo(this.origin) &&
            rect.corner.greaterThanOrEqualTo(this.corner)
        );
    },

    /**
     * _(Formerly: `insetBy`.)_
     * @returns {Rectangle} That is enlarged/shrunk by given `padding`.
     * @param {number} padding - Amount by which to increase (+) or decrease (-) this rect
     * @see The {@link Rectangle#shrinkBy|shrinkBy} method.
     * @memberOf Rectangle.prototype
     */
    growBy: function(padding) {
        return new Rectangle(
            this.origin.x + padding,
            this.origin.y + padding,
            this.extent.x - padding - padding,
            this.extent.y - padding - padding);
    },

    /**
     * @returns {Rectangle} That is enlarged/shrunk by given `padding`.
     * @param {number} padding - Amount by which to decrease (+) or increase (-) this rect.
     * @see The {@link Rectangle#growBy|growBy} method.
     * @memberOf Rectangle.prototype
     */
    shrinkBy: function(padding) {
        return this.growBy(-padding);
    },

    /**
     * @returns {Rectangle} Bounding rect that contains both this rect and the given `rect`.
     * @param {Rectangle} rect - The rectangle to union with this rect.
     * @memberOf Rectangle.prototype
     */
    union: function(rect) {
        var origin = this.origin.min(rect.origin),
            corner = this.corner.max(rect.corner),
            extent = corner.minus(origin);

        return new Rectangle(
            origin.x, origin.y,
            extent.x, extent.y
        );
    },

    /**
     * iterate over all points within this rect, invoking `iteratee` for each.
     * @param {function(number,number)} iteratee - Function to call for each point.
     * Bound to `context` when given; otherwise it is bound to this rect.
     * Each invocation of `iteratee` is called with two arguments:
     * the horizontal and vertical coordinates of the point.
     * @param {object} [context=this] - Context to bind to `iteratee` (when not `this`).
     * @memberOf Rectangle.prototype
     */
    forEach: function(iteratee, context) {
        context = context || this;
        for (var x = this.origin.x, x2 = this.corner.x; x < x2; x++) {
            for (var y = this.origin.y, y2 = this.corner.y; y < y2; y++) {
                iteratee.call(context, x, y);
            }
        }
    },

    /**
     * @returns {Rectangle} One of:
     * * _If this rect intersects with the given `rect`:_
     *      a new rect representing that intersection.
     * * _If it doesn't intersect and `ifNoneAction` defined:_
     *      result of calling `ifNoneAction`.
     * * _If it doesn't intersect and `ifNoneAction` undefined:_
     *      `null`.
     * @param {Rectangle} rect - The rectangle to intersect with this rect.
     * @param {function(Rectangle)} [ifNoneAction] - When no intersection, invoke and return result.
     * Bound to `context` when given; otherwise bound to this rect.
     * Invoked with `rect` as sole parameter.
     * @param {object} [context=this] - Context to bind to `ifNoneAction` (when not `this`).
     * @memberOf Rectangle.prototype
     */
    intersect: function(rect, ifNoneAction, context) {
        var result = null,
            origin = this.origin.max(rect.origin),
            corner = this.corner.min(rect.corner),
            extent = corner.minus(origin);

        if (extent.x > 0 && extent.y > 0) {
            result = new Rectangle(
                origin.x, origin.y,
                extent.x, extent.y
            );
        } else if (typeof ifNoneAction === 'function') {
            result = ifNoneAction.call(context || this, rect);
        }

        return result;
    },

    /**
     * @returns {boolean} `true` iff this rect overlaps with given `rect`.
     * @param {Rectangle} rect - The rectangle to intersect with this rect.
     * @memberOf Rectangle.prototype
     */
    intersects: function(rect) {
        return (
            rect.corner.x > this.origin.x &&
            rect.corner.y > this.origin.y &&
            rect.origin.x < this.corner.x &&
            rect.origin.y < this.corner.y
        );
    }
};

// Interface
exports.Point = Point;
exports.Rectangle = Rectangle;

},{}],46:[function(require,module,exports){
'use strict';

/* eslint-env node, browser */

(function (module) {  // eslint-disable-line no-unused-expressions

    // This closure supports NodeJS-less client side includes with <script> tags. See https://github.com/joneit/mnm.

    /**
     * @constructor RangeSelectionModel
     *
     * @desc This object models selection of "cells" within an abstract single-dimensional matrix.
     *
     * Disjoint selections can be built with calls to the following methods:
     * * {@link RangeSelectionModel#select|select(start, stop)} - Add a range to the matrix.
     * * {@link RangeSelectionModel#deselect|deselect(start, stop)} - Remove a range from the matrix.
     *
     * Two more methods are available:
     * * Test a cell to see if it {@link RangeSelectionModel#isSelected|isSelected(cell)}
     * * {@link RangeSelectionModel#clear|clear()} the matrix
     *
     * Internally, the selection is run-length-encoded. It is therefore a "sparse" matrix
     * with undefined bounds. A single data property called `selection` is an array that
     * contains all the "runs" (ranges) of selected cells albeit in no particular order.
     * This property should not normally need to be accessed directly.
     *
     * Note: This object should be instantiated with the `new` keyword.
     *
     * @returns {RangeSelectionModel} Self (i.e., `this` object).
     */
    function RangeSelectionModel() {
        /**
         * @name selection
         * @type {Array.Array.number}
         * @summary Unordered list of runs.
         * @desc A "run" is defined as an Array(2) where:
         * * element [0] is the beginning of the run
         * * element [1] is the end of the run (inclusive) and is always >= element [0]
         * The order of the runs within is undefined.
         * @memberOf RangeSelectionModel.prototype
         * @abstract
         */
        this.selection = [];

        //we need to be able to go back in time
        //the states field
        this.states = [];

        //clone and store my current state
        //so we can unwind changes if need be
        this.storeState = function () {
            var sels = this.selection;
            var state = [];
            var copy;
            for (var i = 0; i < sels.length; i++) {
                copy = [].concat(sels[i]);
                state.push(copy);
            }
            this.states.push(state);
        };
    }

    RangeSelectionModel.prototype = {

        /**
         * @summary Add a contiguous run of points to the selection.
         * @desc Insert a new run into `this.selection`.
         * The new run will be merged with overlapping and adjacent runs.
         *
         * The two parameters may be given in either order.
         * The start and stop elements in the resulting run will however always be ordered.
         * (However, note that the order of the runs within `this.selection` is itself always unordered.)
         *
         * Note that `this.selection` is updated in place, preserving validity of any external references.
         * @param {number} start - Start of run. May be greater than `stop`.
         * @param {number} [stop=stop] - End of run (inclusive). May be less than `start`.
         * @returns {RangeSelectionModel} Self (i.e., `this`), for chaining.
         * @memberOf RangeSelectionModel.prototype
         */
        select: function (start, stop) {
            this.storeState();
            var run = makeRun(start, stop);
            var splicer = [0, 1];
            this.selection.forEach(function (each) {
                if (overlaps(each, run) || abuts(each, run)) {
                    run = merge(each, run);
                } else {
                    splicer.push(each);
                }
            });
            splicer.push(run);
            splicer[1] = this.selection.length;
            this.selection.splice.apply(this.selection, splicer); // update in place to preserve external references
            return this;
        },

        /**
         * @summary Remove a contiguous run of points from the selection.
         * @desc Truncate and/or remove run(s) from `this.selection`.
         * Removing part of existing runs will (correctly) shorten them or break them into two fragments.
         *
         * The two parameters may be given in either order.
         *
         * Note that `this.selection` is updated in place, preserving validity of any external references.
         * @param {number} start - Start of run. May be greater than `stop`.
         * @param {number} [stop=stop] - End of run (inclusive). May be less than `start`.
         * @returns {RangeSelectionModel} Self (i.e., `this`), for chaining.
         * @memberOf RangeSelectionModel.prototype
         */
        deselect: function (start, stop) {
            var run = makeRun(start, stop);
            var splicer = [0, 0];
            this.selection.forEach(function (each) {
                if (overlaps(each, run)) {
                    var pieces = subtract(each, run);
                    splicer = splicer.concat(pieces);
                } else {
                    splicer.push(each);
                }
            });
            splicer[1] = this.selection.length;
            this.selection.splice.apply(this.selection, splicer); // update in place to preserve external references
            return this;
        },

        /**
         * @summary Empties `this.selection`, effectively removing all runs.
         * @returns {RangeSelectionModel} Self (i.e., `this`), for chaining.
         * @memberOf RangeSelectionModel.prototype
         */
        clear: function () {
            this.states.length = 0;
            this.selection.length = 0;
            return this;
        },

        clearMostRecentSelection: function () {
            if (this.states.length === 0) {
                return;
            }
            this.selection = this.states.pop();
        },

        /**
         * @summary Determines if the given `cell` is selected.
         * @returns {boolean} `true` iff given `cell` is within any of the runs in `this.selection`.
         * @param {number} cell - The cell to test for inclusion in the selection.
         * @memberOf RangeSelectionModel.prototype
         */
        isSelected: function (cell) {
            return this.selection.some(function (each) {
                return each[0] <= cell && cell <= each[1];
            });
        },

        isEmpty: function (){
            return this.selection.length === 0;
        },

        /**
         * @summary Return the indexes that are selected.
         * @desc Return the indexes that are selected.
         * @returns {Array.Array.number}
         * @memberOf RangeSelectionModel.prototype
         */
        getSelections: function (){
            var result = [];
            this.selection.forEach(function (each) {
                for (var i = each[0]; i <= each[1]; i++) {
                    result.push(i);
                }
            });
            result.sort(function (a, b){
                return a - b;
            });
            return result;
        }

    };

    /**
     * @private
     * @summary Preps `start` and `stop` params into order array
     * @function makeRun
     * @desc Utility function called by both `select()` and `deselect()`.
     * @param {number|number[]} start - Start of run. if array, `start` and `stop` are taken from first two elements.
     * @param {number} [stop=start] - End of run (inclusive).
     */
    function makeRun(start, stop) {
        return (
            start instanceof Array
                ? makeRun.apply(this, start) // extract params from given array
                : stop === undefined
                ? [ start, start ] // single param is a run that stops where it starts
                : start <= stop
                ? [ start, stop ]
                : [ stop, start ] // reverse descending params into ascending order
        );
    }

    /**
     * @private
     * @function overlaps
     * @returns {boolean} `true` iff `run1` overlaps `run2`
     * @summary Comparison operator that determines if given runs overlap with one another.
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * Overlap is defined to include the case where one run completely contains the other.
     *
     * Note: This operator is commutative.
     * @param {number[]} run1 - first run
     * @param {number[]} run2 - second run
     */
    function overlaps(run1, run2) {
        return (
            run1[0] <= run2[0] && run2[0] <= run1[1] || // run2's start is within run1 OR...
            run1[0] <= run2[1] && run2[1] <= run1[1] || // run2's stop is within run1 OR...
            run2[0] <  run1[0] && run1[1] <  run2[1]    // run2 completely contains run1
        );
    }

    /**
     * @private
     * @function abuts
     * @summary Comparison operator that determines if given runs are consecutive with one another.
     * @returns {boolean} `true` iff `run1` is consecutive with `run2`
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * Note: This operator is commutative.
     * @param {number[]} run1 - first run
     * @param {number[]} run2 - second run
     */
    function abuts(run1, run2) {
        return (
            run1[1] === run2[0] - 1 || // run1's top immediately precedes run2's start OR...
            run2[1] === run1[0] - 1    // run2's top immediately precedes run1's start
        );
    }

    /**
     * @private
     * @function subtract
     * @summary Operator that subtracts one run from another.
     * @returns {Array.Array.number} The remaining pieces of `minuend` after removing `subtrahend`.
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * This function _does not assumes_ that `overlap()` has already been called with the same runs and has returned `true`.
     *
     * Returned array contains 0, 1, or 2 runs which are the portion(s) of `minuend` that do _not_ include `subtrahend`.
     *
     * Caveat: This operator is *not* commutative.
     * @param {number[]} minuend - a run from which to "subtract" `subtrahend`
     * @param {number[]} subtrahend - a run to "subtracted" from `minuend`
     */
    function subtract(minuend, subtrahend) {
        var m0 = minuend[0];
        var m1 = minuend[1];
        var s0 = subtrahend[0];
        var s1 = subtrahend[1];
        var result = [];

        if (s0 <= m0 && s1 < m1) {
            //subtrahend extends before minuend: return remaining piece of `minuend`
            result.push([s1 + 1, m1]);
        } else if (s0 > m0 && s1 >= m1) {
            //subtrahend extends after minuend: return remaining piece of `minuend`
            result.push([m0, s0 - 1]);
        } else if (m0 < s0 && s1 < m1) {
            //completely inside: return 2 smaller pieces resulting from the hole
            result.push([m0, s0 - 1]);
            result.push([s1 + 1, m1]);
        } else if (s1 < m0 || s0 > m1) {
            // completely outside: return `minuend` untouched
            result.push(minuend);
        }

        //else subtrahend must completely overlap minuend so return no pieces

        return result;
    }


    // Local utility functions

    /**
     * @private
     * @function merge
     * @summary Operator that merges given runs.
     * @returns {number[]} A single merged run.
     * @desc Both parameters are assumed to be _ordered_ arrays.
     *
     * The runs are assumed to be overlapping or adjacent to one another.
     *
     * Note: This operator is commutative.
     * @param {number[]} run1 - a run to merge with `run2`
     * @param {number[]} run2 - a run to merge with `run1`
     */
    function merge(run1, run2) {
        var min = Math.min(Math.min.apply(Math, run1), Math.min.apply(Math, run2));
        var max = Math.max(Math.max.apply(Math, run1), Math.max.apply(Math, run2));
        return [min, max];
    }

    // Interface
    module.exports = RangeSelectionModel;
})(
    typeof module === 'object' && module || (window.RangeSelectionModel = {}),
    typeof module === 'object' && module.exports || (window.RangeSelectionModel.exports = {})
) || (
    typeof module === 'object' || (window.RangeSelectionModel = window.RangeSelectionModel.exports)
);

/* About the above IIFE:
 * This file is a "modified node module." It functions as usual in Node.js *and* is also usable directly in the browser.
 * 1. Node.js: The IIFE is superfluous but innocuous.
 * 2. In the browser: The IIFE closure serves to keep internal declarations private.
 * 2.a. In the browser as a global: The logic in the actual parameter expressions + the post-invocation expression
 * will put your API in `window.RangeSelectionModel`.
 * 2.b. In the browser as a module: If you predefine a `window.module` object, the results will be in `module.exports`.
 * The bower component `mnm` makes this easy and also provides a global `require()` function for referencing your module
 * from other closures. In either case, this works with both NodeJs-style export mechanisms -- a single API assignment,
 * `module.exports = yourAPI` *or* a series of individual property assignments, `module.exports.property = property`.
 *
 * Before the IIFE runs, the actual parameter expressions are executed:
 * 1. If `window` object undefined, we're in NodeJs so assume there is a `module` object with an `exports` property
 * 2. If `window` object defined, we're in browser
 * 2.a. If `module` object predefined, use it
 * 2.b. If `module` object undefined, create a `RangeSelectionModel` object
 *
 * After the IIFE returns:
 * Because it always returns undefined, the expression after the || will execute:
 * 1. If `window` object undefined, then we're in NodeJs so we're done
 * 2. If `window` object defined, then we're in browser
 * 2.a. If `module` object predefined, we're done; results are in `moudule.exports`
 * 2.b. If `module` object undefined, redefine`RangeSelectionModel` to be the `RangeSelectionModel.exports` object
 */

},{}],47:[function(require,module,exports){
// tabz node module
// https://github.com/joneit/tabz

/* eslint-env node, browser */

'use strict';

var cssInjector = require('css-injector');

/**
 * Register/deregister click handler on all tab collections.
 * @param {Element} [options.root=document] - Where to look for tab panels (`.tabz` elements) containing tabs and folders.
 * @param {boolean} [options.unhook=false] - Remove event listener from tab panels (`.tabz` elements).
 * @param {Element} [options.referenceElement] - Passed to cssInjector's insertBefore() call.
 * @param {string} [options.defaultTabSelector='.default-tab'] - .classname or #id of the tab to select by default
 * @param {object} [options.onEnable] - Handler implementation. See {@link Tabz#onEnable|onEnable}.
 * @param {object} [options.onDisable] - Handler implementation. See {@link Tabz#onDisable|onEnable}.
 * @param {object} [options.onEnabled] - Handler implementation. See {@link Tabz#onEnabled|onEnable}.
 * @param {object} [options.onDisabled] - Handler implementation. See {@link Tabz#onDisabled|onEnable}.
 * @constructor
 */
function Tabz(options) {
    var i, el;

    options = options || {};
    var root = options.root || document,
        unhook = options.unhook,
        referenceElement = options.referenceElement,
        defaultTabSelector = options.defaultTabSelector || '.default-tab';

    if (!unhook) {
        var css;
        /* inject:css */
        css = '.tabz{position:relative;visibility:hidden;height:100%}.tabz>header{position:relative;display:inline-block;background-color:#fff;margin-left:1em;padding:5px .6em;border:1px solid #666;border-bottom-color:transparent;border-radius:6px 6px 0 0;cursor:default;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.tabz>header+section{position:absolute;display:none;background-color:#fff;margin-top:-1px;padding:8px;border:1px solid #666;border-radius:6px;left:0;right:0;bottom:0;top:0;z-index:0}.tabz>header+section.tabz-enable{z-index:1}.tabz>header.tabz-enable{z-index:2}.tabz-bg0{background-color:#eee!important}.tabz-bg1{background-color:#eef!important}.tabz-bg2{background-color:#efe!important}.tabz-bg3{background-color:#eff!important}.tabz-bg4{background-color:#fee!important}.tabz-bg5{background-color:#fef!important}.tabz-bg6{background-color:#ffe!important}';
        /* endinject */

        if (!referenceElement) {
            // find first <link> or <style> in <head>
            var headStuff = document.querySelector('head').children;
            for (i = 0; !referenceElement && i < headStuff.length; ++i) {
                el = headStuff[i];
                if (el.tagName === 'STYLE' || el.tagName === 'LINK' && el.rel === 'stylesheet') {
                    referenceElement = el;
                }
            }
        }
        cssInjector(css, 'tabz-css-base', referenceElement);

        for (var key in options) {
            if (this[key] === noop) {
                this[key] = options[key];
            }
        }

        /**
         * @summary The context of this tab object.
         * @desc The context may encompass any number of tab panels (`.tabz` elements).
         * @type {HTMLDocumen|HTMLElement}
         */
        this.root = root;

        // enable first tab on each tab panel (`.tabz` element)
        forEachEl('.tabz>header:first-of-type,.tabz>section:first-of-type', function(el) {
            el.classList.add('tabz-enable');
        }, root);

        // enable default tab and all its parents (must be a tab)
        this.tabTo(root.querySelector('.tabz > header' + defaultTabSelector));

        setTimeout(function() {
            forEachEl('.tabz > section', function(el) {

                // Step 1: A bug in older versions of Chrome (like v40) that inserted a break at mark-up location of an absolute positioned block. The work-around is to hide those blocks until after first render; then show them. I don't know why this works but it does. Seems to be durable.
                el.style.display = 'block';

                // Step 2: Adjust absolute top of each rendered folder to the bottom of its tab
                el.style.top = el.previousElementSibling.getBoundingClientRect().bottom - el.parentElement.getBoundingClientRect().top + 'px';

            }, root);
        }, 0);
    }

    var method = unhook ? 'removeEventListener' : 'addEventListener';
    var boundClickHandler = onclick.bind(this);
    forEachEl('.tabz', function(tabBar) {
        tabBar.style.visibility = 'visible';
        tabBar[method]('click', boundClickHandler);
    }, root);
}

function onclick(evt) {
    click.call(this, evt.currentTarget, evt.target);
}

/**
 * @summary Selects the given tab.
 * @desc If it is a nested tab, also reveals all its ancestor tabs.
 * @param {string|HTMLElement} [el] - May be one of:
 * * `HTMLElement`
 *   * `<header>` - tab element
 *   * `<section>` - folder element
 * * `string` - CSS selector to one of the above
 * * falsy - fails silently
 * @memberOf Tabz.prototype
 */
Tabz.prototype.tabTo = function(el) {
    while ((el = this.tab(el))) {
        click.call(this, el.parentElement, el);
        el = el.parentElement.parentElement; // loop to click on each containing tab...
    }
};

/**
 * Current selected tab.
 * @param {HTMLElement|number} el - An element that is (or is within) the tab panel (`.tabz` element) to look in.
 * @returns {undefined|HTMLElement} Returns tab (`<header>`) element.  Returns `undefined` if `el` is neither of the above or an out of range index.
 */
Tabz.prototype.enabledTab = function(el) {
    el = this.panel(el);
    return el && el.querySelector(':scope>header.tabz-enable');
};

/**
 * @summary Get tab element.
 * @desc Get tab element if given tab or folder element; or an element within such; or find tab.
 * @param {string|Element} [el] - May be one of:
 * * a tab (a `<header>` element)
 * * a folder (a `<section>` element)
 * * an element within one of the above
 * * `string` - CSS selector to one of the above, searching within the root or document
 * @returns {null|Element} tab (`<header>...</header>`) element or `null` if not found
 * @memberOf Tabz.prototype
 */
Tabz.prototype.tab = function(el) {
    el = lookForEl.call(this, el);
    return !(el instanceof HTMLElement) ? null : el.tagName === 'HEADER' ? el : el.tagName === 'SECTION' ? el.previousElementSibling : null;
};

/**
 * @summary Get folder element.
 * @desc Get folder element if given tab or folder element; or an element within such; or find folder.
 * @param {string|Element} [el] - May be one of:
 * * a tab (a `<header>` element)
 * * a folder (a `<section>` element)
 * * an element within one of the above
 * * `string` - CSS selector to one of the above, searching within the root or document
 * @returns {null|Element} tab (`<header>...</header>`) element or `null` if not found
 * @memberOf Tabz.prototype
 */
Tabz.prototype.folder = function(el) {
    el = lookForEl.call(this, el);
    return !(el instanceof HTMLElement) ? null : el.tagName === 'SECTION' ? el : el.tagName === 'HEADER' ? el.nextElementSibling : null;
};

/**
 * @summary Get tab panel element.
 * @desc Get panel element if given tab panel element; or an element within a tab panel; or find tab panel.
 * @param {string|Element} [el] - May be one of:
 * * a tab panel (an `HTMLElement` with class `tabz`)
 * * an element within a tab panel
 * * `string` - CSS selector to one a tab panel, searching within the root or document
 * @returns {null|Element} tab panel element or `null` if not found
 * @memberOf Tabz.prototype
 */
Tabz.prototype.panel = function(el) {
    while (el && !el.classList.contains('tabz')) {
        el = el.parentElement;
    }
    return !(el instanceof HTMLElement) ? null : el.classList.contains('tabz') ? el : null;
};

function lookForEl(el) {
    if (el instanceof Element) {
        while (el && el.tagName !== 'HEADER' && el.tagName !== 'SECTION') {
            el = el.parentElement;
        }
    } else {
        el = this.root.querySelector(el);
    }
    return el;
}

/** Enables the tab/folder pair of the clicked tab.
 * Disables all the other pairs in this scope which will include the previously enabled pair.
 * @private
 * @this Tabz
 * @param {Element} div - The tab panel (`.tabz` element) that's handling the click event.
 * @param {Element} target - The element that received the click.
 * @returns {undefined|Element} The `<header>` element (tab) the was clicked; or `undefined` when click was not within a tab.
 */
function click(div, target) {
    var newTab, oldTab;

    forEachEl(':scope>header:not(.tabz-enable)', function(tab) { // todo: use a .find() polyfill here
        if (tab.contains(target)) {
            newTab = tab;
        }
    }, div);

    if (newTab) {
        oldTab = this.enabledTab(div);
        toggleTab.call(this, oldTab, false);
        toggleTab.call(this, newTab, true);
    }

    return newTab;
}

/**
 * @private
 * @this Tabz
 * @param {Element} tab - The `<header>` element of the tab to enable or disable.
 * @param {boolean} enable - Enable (vs. disable) the tab.
 */
function toggleTab(tab, enable) {
    if (tab) {
        var folder = this.folder(tab),
            method = enable ? 'onEnable' : 'onDisable';

        this[method].call(this, tab, folder);

        tab.classList.toggle('tabz-enable', enable);
        folder.classList.toggle('tabz-enable', enable);

        method += 'd';
        this[method].call(this, tab, folder);
    }
}

/**
 * @typedef tabEvent
 * @type {function}
 * @param {tabEventObject}
 */

/**
 * @typedef tabEventObject
 * @property {Tabz} tabz - The tab object issuing the callback.
 * @property {Element} target - The tab (`<header>` element).
 */

/**
 * Called before a previously disabled tab is enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onEnable = noop;

/**
 * Called before a previously enabled tab is disabled by another tab being enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onDisable = noop;

/**
 * Called after a previously disabled tab is enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onEnabled = noop;

/**
 * Called after a previously enabled tab is disabled by another tab being enabled.
 * @type {tabEvent}
 * @abstract
 * @memberOf Tabz.prototype
 */
Tabz.prototype.onDisabled = noop;

function noop() {} // null pattern

function forEachEl(selector, iteratee, context) {
    return Array.prototype.forEach.call((context || document).querySelectorAll(selector), iteratee);
}


module.exports = Tabz;

},{"css-injector":6}],48:[function(require,module,exports){
// templex node module
// https://github.com/joneit/templex

/* eslint-env node */

/**
 * Merges values of execution context properties named in template by {prop1},
 * {prop2}, etc., or any javascript expression incorporating such prop names.
 * The context always includes the global object. In addition you can specify a single
 * context or an array of contexts to search (in the order given) before finally
 * searching the global context.
 *
 * Merge expressions consisting of simple numeric terms, such as {0}, {1}, etc., deref
 * the first context given, which is assumed to be an array. As a convenience feature,
 * if additional args are given after `template`, `arguments` is unshifted onto the context
 * array, thus making first additional arg available as {1}, second as {2}, etc., as in
 * `templex('Hello, {1}!', 'World')`. ({0} is the template so consider this to be 1-based.)
 *
 * If you prefer something other than braces, redefine `templex.regexp`.
 *
 * See tests for examples.
 *
 * @param {string} template
 * @param {...string} [args]
 */
function templex(template) {
    var contexts = this instanceof Array ? this : [this];
    if (arguments.length > 1) { contexts.unshift(arguments); }
    return template.replace(templex.regexp, templex.merger.bind(contexts));
}

templex.regexp = /\{(.*?)\}/g;

templex.with = function (i, s) {
    return 'with(this[' + i + ']){' + s + '}';
};

templex.cache = [];

templex.deref = function (key) {
    if (!(this.length in templex.cache)) {
        var code = 'return eval(expr)';

        for (var i = 0; i < this.length; ++i) {
            code = templex.with(i, code);
        }

        templex.cache[this.length] = eval('(function(expr){' + code + '})'); // eslint-disable-line no-eval
    }
    return templex.cache[this.length].call(this, key);
};

templex.merger = function (match, key) {
    // Advanced features: Context can be a list of contexts which are searched in order.
    var replacement;

    try {
        replacement = isNaN(key) ? templex.deref.call(this, key) : this[0][key];
    } catch (e) {
        replacement = '{' + key + '}';
    }

    return replacement;
};

// this interface consists solely of the templex function (and it's properties)
module.exports = templex;

},{}],49:[function(require,module,exports){
'use strict';

/**
 * @constructor
 * @desc Extend from this base class using `Base.extend` per example.
 * @example
 * var prototype = { ... };
 * var descendantClass = Base.extend(prototype};
 * @classdesc This is an abstract base class available for all Hypergrid classes.
 */
var Base = require('extend-me').Base;

Base.prototype.deprecated = require('./lib/deprecated');
Base.prototype.HypergridError = require('./lib/error');

/**
 * Convenience function for getting the value when that value can be defined as a function that needs to be called to get the actual (primitive) value.
 * @param value
 * @returns {*}
 */
Base.prototype.unwrap = function(value) {
    if (typeof value === 'function') {
        value = value();
    }
    return value;
};

/**
 * @method
 * @summary Mixes source members into calling context.
 * @desc Context is typically either an instance or the (shared) prototype of a "class" extended from {@link Base} (see examples).
 *
 * Typically used by plug-ins.
 * @example
 * // define instance members: myGrid.fix(), etc.
 * myGrid.mixIn({ fix: function() {...}, ... });
 * @example
 * // define prototype members: Hypergrid.prototype.fix(), etc.
 * Hypergrid.prototype.mixIn({ fix: function() {...}, ... });
 * @See {@link https://joneit.github.io/overrider/module-overrider.htm#.mixIn}
 * @param {object} source
 */
Base.prototype.mixIn = require('overrider').mixIn;


module.exports = Base;

},{"./lib/deprecated":117,"./lib/error":118,"extend-me":7,"overrider":43}],50:[function(require,module,exports){
/* eslint-env browser */

'use strict';

require('./lib/polyfills'); // Installs misc. polyfills into global objects, as needed

var FinBar = require('finbars');
var Canvas = require('fincanvas');
var Point = require('rectangular').Point;
var Rectangle = require('rectangular').Rectangle;
var _ = require('object-iterators'); // fyi: installs the Array.prototype.find polyfill, as needed

var Base = require('./Base');
var defaults = require('./defaults');
var Renderer = require('./lib/Renderer');
var SelectionModel = require('./lib/SelectionModel');
var stylesheet = require('./lib/stylesheet');
var Localization = require('./lib/Localization');
//var behaviors = require('./behaviors');
var CellRenderers = require('./cellRenderers');
var CellEditors = require('./cellEditors');
var BehaviorJSON = require('./behaviors/JSON');

var themeInitialized = false,
    gridTheme = Object.create(defaults),
    globalProperties = Object.create(gridTheme);

var warned = {};

/**s
 * @constructor
 * @param {string|Element} [container] - CSS selector or Element
 * @param {object} [options]
 * @param {function} [options.Behavior=behaviors.JSON] - A behavior constructor or instance
 * @param {function[]} [options.pipeline] - A list function constructors to use for passing data through a series of transforms to occur on reindex call
 * @param {function|object[]} [options.data] - Passed to behavior constructor. May be:
 * * An array of congruent raw data objects
 * * A function returning same
 * @param {function|menuItem[]} [options.schema=derivedSchema] - Passed to behavior constructor. May be:
 * * A schema array
 * * A function returning a schema array. Called at filter reset time with behavior as context.
 * * Omit to generate a basic schema from `this.behavior.columns`.
 * @param {Behavior} [options.Behavior=JSON] - A grid behavior (descendant of Behavior "class").
 * @param {pluginSpec|pluginSpec[]} [options.plugins]
 * @param {DataModels[]} [options.subgrids]
 * @param {string} [options.localization=Hypergrid.localization]
 * @param {string|Element} [options.container] - CSS selector or Element
 * @param {string|string[]} [options.localization.locale=Hypergrid.localization.locale] - The default locale to use when an explicit `locale` is omitted from localizer constructor calls. Passed to Intl.NumberFomrat` and `Intl.DateFomrat`. See {@ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|Locale identification and negotiation} for more information.
 * @param {string} [options.localization.numberOptions=Hypergrid.localization.numberOptions] - Options passed to `Intl.NumberFomrat` for creating the basic "number" localizer.
 * @param {string} [options.localization.dateOptions=Hypergrid.localization.dateOptions] - Options passed to `Intl.DateFomrat` for creating the basic "date" localizer.
 * @param {object} [options.schema]
 * @param {object} [options.margin] - optional canvas margins
 * @param {string} [options.margin.top=0]
 * @param {string} [options.margin.right=0]
 * @param {string} [options.margin.bottom=0]
 * @param {string} [options.margin.left=0]
 * @param {object} [options.boundingRect] - optional grid container argument
 * @param {string} [options.boundingRect.height=300]
 * @param {string} [options.boundingRect.width=300]
 * @param {string} [options.boundingRect.postion=relative]
 */
var Hypergrid = Base.extend('Hypergrid', {
    initialize: function(container, options) {
        if (!themeInitialized) {
            themeInitialized = true;
            gridTheme = buildTheme(gridTheme);
        }

        //Optional container argument
        if (!(typeof container === 'string') && !(container instanceof HTMLElement)) {
            options = container;
            container = null;
        }

        this.options = options = options || {};

        // Install shared plug-ins (those with a `preinstall` method)
        Object.getPrototypeOf(this).installPlugins(options.plugins);

        this.lastEdgeSelection = [0, 0];
        this.lnfProperties = Object.create(globalProperties);
        this.isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1;
        this.selectionModel = new SelectionModel(this);
        this.renderOverridesCache = {};
        this.allowEventHandlers = true;
        this.dragExtent = new Point(0, 0);
        this.numRows = 0;
        this.numColumns = 0;
        this.clearMouseDown();
        this.setFormatter(options.localization);

        /**
         * @name cellRenderers
         * @type {CellRenderer}
         * @memberOf Hypergrid.prototype
         */
        this.cellRenderers = new CellRenderers();

        /**
         * @name cellEditors
         * @type {CellEditor}
         * @memberOf Hypergrid.prototype
         */
        this.cellEditors = new CellEditors(this);

        //Set up the container for a grid instance
        container = container || options.container;
        container = container || findOrCreateContainer(options.boundingRect);
        this.setContainer(container);

        if (this.options.Behavior) {
            this.setBehavior(this.options); // also sets this.options.pipeline and this.options.data
        } else if (this.options.data) {
            this.setData(this.options.data, this.options); // if no behavior has yet been set, `setData` sets a default behavior and this.options.pipeline
        }

        /**
         * @name plugins
         * @summary Dictionary of named instance plug-ins.
         * @desc See examples for how to reference (albeit there is normally no need to reference plugins directly).
         *
         * For the dictionary of _shared_ plugins, see {@link Hypergrid.plugins|plugins} (a property of the constructor).
         * @example
         * var instancePlugins = myGrid.plugins;
         * var instancePlugins = this.plugins // internal use
         * var myInstancePlugin = myGrid.plugins.myInstancePlugin;
         * @type {object}
         * @memberOf Hypergrid.prototype
         */
        this.plugins = {};

        // Install instance plug-ins (those that are constructors OR have an `install` method)
        this.installPlugins(options.plugins);

        // Listen for propagated mouseclicks. Used for aborting edit mode.
        document.addEventListener('mousedown', this.mouseCatcher = function() {
            this.abortEditing();
        }.bind(this));
    },

    terminate: function() {
        document.removeEventListener('mousedown', this.mouseCatcher);
    },

    registerCellEditor: function(Constructor, name) {
        return this.deprecated('registerCellEditor(Constructor, name)', 'cellEditors.add(name, Constructor)', '1.0.6', arguments);
    },
    createCellEditor: function(name) {
        return this.deprecated('createCellEditor(name)', 'cellEditors.create(name)', '1.0.6', arguments);
    },
    getCellProvider: function(name) {
        return this.deprecated('getCellProvider()', 'cellRenderers', '1.0.6', arguments);
    },
    registerLocalizer: function(name, localizer, baseClassName, newClassName) {
        return this.deprecated('registerLocalizer(name, localizer, baseClassName, newClassName)', 'localization.add(name, localizer)', '1.0.6', arguments,
            'STRUCTURAL CHANGE: No longer supports deriving and registering a new cell editor class. Use .cellEditors.get(baseClassName).extend(newClassName || name, {...}) for that.');
    },
    getRenderer: function() {
        return this.deprecated('getRenderer()', 'renderer', '1.1.0');
    },

    /**
     *
     * A null object behavior serves as a place holder.
     * @type {object}
     * @memberOf Hypergrid.prototype
     */
    behavior: null,

    /**
     * Cached resulan}
     * @memberOf Hypergrid.prototype
     */
    isWebkit: true,

    /**
     * The pixel location of an initial mousedown click, either for editing a cell or for dragging a selection.
     * @type {Point}
     * @memberOf Hypergrid.prototype
     */
    mouseDown: [],

    /**
     * The extent from the mousedown point during a drag operation.
     * @type {Point}
     * @memberOf Hypergrid.prototype
     */

    dragExtent: null,

    /**
     * A float value between 0.0 - 1.0 of the vertical scroll position.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    vScrollValue: 0,

    /**
     * A float value between 0.0 - 1.0 of the horizontal scroll position.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    hScrollValue: 0,

    /**
     * @property {fin-hypergrid-selection-model} selectionModel - A [fin-hypergrid-selection-model](module-._selection-model.html) instance.
     * @memberOf Hypergrid.prototype
     */
    selectionModel: null,

    /**
     * @property {fin-hypergrid-cell-editor} cellEditor - The current instance of [fin-hypergrid-cell-editor](module-cell-editors_base.html).
     * @memberOf Hypergrid.prototype
     */
    cellEditor: null,

    /**
     * @property {fin-vampire-bar} sbHScroller - An instance of {@link https://github.com/openfin/finbars|FinBar}.
     * @memberOf Hypergrid.prototype
     */
    sbHScroller: null,

    /**
     * @property {fin-vampire-bar} sbVScroller - An instance of {@link https://github.com/openfin/finbars|FinBar}.
     * @memberOf Hypergrid.prototype
     */
    sbVScroller: null,

    /**
     * The previous value of sbVScrollVal.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    sbPrevVScrollValue: null,

    /**
     * The previous value of sbHScrollValue.
     * @type {number}
     * @memberOf Hypergrid.prototype
     */
    sbPrevHScrollValue: null,

    /**
     * is the short term memory of what column I might be dragging around
     * @type {object}
     * @memberOf Hypergrid.prototype
     */

    renderOverridesCache: {},

    /**
     * The pixel location of the current hovered cell.
     * @todo Need to detect hovering over bottom totals.
     * @type {Point}
     * @memberOf Hypergrid.prototype
     */
    hoverCell: null,

    scrollingNow: false,

    lastEdgeSelection: null,

    /**
     * @memberOf Hypergrid.prototype
     */
    setAttribute: function(attribute, value) {
        this.div.setAttribute(attribute, value);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear out all state and data of a grid instance.
     */
    reset: function() {
        this.lastEdgeSelection = [0, 0];
        this.lnfProperties = Object.create(globalProperties);
        this.selectionModel = new SelectionModel(this);
        this.renderOverridesCache = {};
        this.clearMouseDown();
        this.dragExtent = new Point(0, 0);

        this.numRows = 0;
        this.numColumns = 0;

        this.vScrollValue = 0;
        this.hScrollValue = 0;

        this.cancelEditing();

        this.sbPrevVScrollValue = null;
        this.sbPrevHScrollValue = null;

        this.hoverCell = null;
        this.scrollingNow = false;
        this.lastEdgeSelection = [0, 0];

        this.behavior.reset();
        this.renderer.reset();
        this.getCanvas().resize();
        this.behaviorChanged();

        this.refreshProperties();
    },

    /** @typedef {object|function|Array} pluginSpec
     * @desc One of:
     * * simple API - a plain object with an `install` method
     * * object API - an object constructor
     * * array:
     *    * first element is an optional name for the API or the newly instantiated object
     *    * next element (or first element when not a string) is the simple or object API
     *    * remaining arguments are optional arguments for the object constructor
     * * falsy value such as `undefined` - ignored
     *
     * The API may have a `name` or `$$CLASS_NAME` property.
     */
    /**
     * @summary Install plugins.
     * @desc Plugin installation:
     * * Each simple API is installed by calling it's `install` method with `this` as first arg + any additional args listed in the `pluginSpec` (when it is an array).
     * * Each object API is installed by instantiating it's constructor with `this` as first arg + any additional args listed in the `pluginSpec` (when it is an array).
     *
     * The resulting plain object or instantiated objects may be named by (in priority order):
     * 1. if `pluginSpec` contains an array and first element is a string
     * 2. object has a `name` property
     * 3. object has a `$$CLASS_NAME` property
     *
     * If named, a reference to each object is saved in `this.plugins`. If the plug-in is unnamed, no reference is kept.
     *
     * There are two types of plugin installations:
     * * Preinstalled plugins which are installed on the prototype. These are simple API plugins with a `preinstall` method called with the `installPlugins` calling context as the first argument. Preinstallations are automatically performed whenever a grid is instantiated (at the beginning of the constructor), by calling `installPlugins` with `Hypergrid.prototype` as the calling context.
     * * Regular plugins which are installed on the instance. These are simple API plugins with an `install` method, as well as all object API plugins (constructors), called with the `installPlugins` calling context as the first argument. These installations are automatically performed whenever a grid is instantiated (at the end of the constructor), called with the new grid instance as the calling context.
     *
     * Plugins may have both `preinstall` _and_ `install` methods, in which case both will be called. However, note that in any case, `install` methods on object API plugins are ignored.
     *
     * @this {Hypergrid|Hypergrid.prototype}
     * @param {pluginSpec|pluginSpec[]} [plugins] - The plugins to install. This call is a no-op if omitted.
     */
    installPlugins: function(plugins) {
        var shared = this === Hypergrid.prototype; // Do shared ("preinstalled") plugins (if any)

        if (!plugins) {
            return;
        } else if (!Array.isArray(plugins)) {
            plugins = [plugins];
        }

        plugins.forEach(function(plugin) {
            var name, args, hash;

            if (!plugin) {
                return; // ignore falsy plugin spec
            }

            // set first arg to constructor to `this` (the grid instance)
            // set first arg to `install` method to `this` (the grid instance)
            // set first arg to `preinstall` method to `this` (the Hypergrid prototype)
            args = [this];

            if (Array.isArray(plugin)) {
                if (!plugin.length) {
                    plugin = undefined;
                } else if (typeof plugin[0] !== 'string') {
                    args = args.concat(plugin.slice(1));
                    plugin = plugin[0];
                } else if (plugin.length >= 2) {
                    args = args.concat(plugin.slice(2));
                    name = plugin[0];
                    plugin = plugin[1];
                } else {
                    plugin = undefined;
                }
            }

            if (!plugin) {
                return; // ignore empty array or array with single string element
            }

            // Derive API name if not given in pluginSpec
            name = name || plugin.name || plugin.$$CLASS_NAME;
            if (name) {
                // Translate first character to lower case
                name = name.substr(0, 1).toLowerCase() + name.substr(1);
            }

            if (shared) {
                // Execute the `preinstall` method
                hash = this.constructor.plugins;
                if (plugin.preinstall && !hash[name]) {
                    plugin.preinstall.apply(plugin, args);
                }
            } else { // instance plug-ins:
                hash = this.plugins;
                if (typeof plugin === 'function') {
                    // Install "object API" by instantiating
                    args.unshift(null); // context for the `bind` call
                    plugin = new (Function.prototype.bind.apply(plugin, args));
                } else if (plugin.install) {
                    // Install "simple API" by calling its `install` method
                    plugin.install.apply(plugin, args);
                } else if (!plugin.preinstall) {
                    throw new Base.prototype.HypergridError('Expected plugin (a constructor; or an API with a `preinstall` method and/or an `install` method).');
                }
            }

            if (name) {
                hash[name] = plugin;
            }

        }, this);
    },

    /**
     * @summary Uninstall all uninstallable plugins or just named plugins.
     * @desc Calls `uninstall` on plugins that define such a method.
     *
     * To uninstall "preinstalled" plugins, call with `Hypergrid.prototype` as context.
     *
     * For convenience, the following args are passed to the call:
     * * `this` - the plugin to be uninstalled
     * * `grid` - the hypergrid object
     * * `key` - name of the plugin to be uninstalled (_i.e.,_ key in `plugins`)
     * * `plugins` - the plugins hash (a.k.a. `grid.plugins`)
     * @param {string|stirng[]} [pluginNames] If provided, limit uninstall to the named plugin (string) or plugins (string[]).
     */
    uninstallPlugins: function(pluginNames) {
        if (!pluginNames) {
            pluginNames = [];
        } else if (!Array.isArray(pluginNames)) {
            pluginNames = [pluginNames];
        }
        _(this.plugins).each(function(plugin, key, plugins) {
            if (
                plugins.hasOwnProperty(key) &&
                pluginNames.indexOf(key) >= 0 &&
                plugin.uninstall
            ) {
                plugin.uninstall(this, key, plugins);
            }
        }, this);
    },

    getProperties: function() {
        return this.deprecated('getProperties()', 'properties', '1.2.0');
    },

    _getProperties: function() {
        return this.lnfProperties;
    },

    computeCellsBounds: function() {
        this.renderer.computeCellsBounds();
    },

    setFormatter: function(options) {
        options = options || {};
        this.localization = new Localization(
            options.locale || Hypergrid.localization.locale,
            options.numberOptions || Hypergrid.localization.numberOptions,
            options.dateOptions || Hypergrid.localization.dateOptions
        );
    },
    getFormatter: function(localizerName) {
        return this.localization.get(localizerName).format;
    },

    formatValue: function(localizerName, value) {
        var formatter = this.getFormatter(localizerName);
        return formatter(value);
    },

    isRowResizeable: function() {
        return this.properties.rowResize;
    },

    isCheckboxOnlyRowSelections: function() {
        return this.properties.checkboxOnlyRowSelections;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Point} The cell over which the cursor is hovering.
     */
    getHoverCell: function() {
        return this.deprecated('getHoverCell()', 'hoverCell', 'v1.2.0');
    },


    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the cell under the cursor.
     * @param {Point} point
     */
    setHoverCell: function(point) {
        var me = this.hoverCell;
        var newPoint = new Point(point.x, point.y);
        if (me && me.equals(newPoint)) {
            return;
        }
        this.hoverCell = newPoint;
        if (me) { this.fireSyntheticOnCellExitEvent(me); } //Exit first
        this.fireSyntheticOnCellEnterEvent(newPoint);
        this.repaint();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Ammend properties for all hypergrids in this process.
     * @param {object} properties - A simple properties hash.
     */
    addGlobalProperties: function(properties) {
        //we check for existence to avoid race condition in initialization
        if (!globalProperties) {
            var self = this;
            setTimeout(function() {
                self.addGlobalProperties(properties);
            }, 10);
        } else {
            this._addGlobalProperties(properties);
        }

    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Amend properties for all hypergrids in this process.
     * @param {object} properties - A simple properties hash.
     * @private
     */
    _addGlobalProperties: function(properties) {
        _(properties).each(function(property, key) {
            globalProperties[key] = property;
        });
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Utility function to push out properties if we change them.
     * @param {object} properties - An object of various key value pairs.
     */
    refreshProperties: function() {
        var state = this.properties;
        this.selectionModel.multipleSelections = state.multipleSelections;

        // this.canvas = this.shadowRoot.querySelector('fin-canvas');
        //this.canvas = new Canvas(this.divCanvas, this.renderer); //TODO: Do we really need to be recreating it here?

        this.computeCellsBounds();
        this.checkScrollbarVisibility();
        this.behavior.defaultRowHeight = null;
        if (this.isColumnAutosizing()) {
            this.behavior.autosizeAllColumns();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Amend properties for this hypergrid only.
     * @param {object} moreProperties - A simple properties hash.
     */
    addProperties: function(moreProperties) {
        var properties = this.properties;
        addDeepProperties(properties, moreProperties);
        this.refreshProperties();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {object} The state object for remembering our state.
     * @see [Memento pattern](http://en.wikipedia.org/wiki/Memento_pattern)
     */
    getPrivateState: function() {
        return this.deprecate('getPrivateState()', 'properties', '1.2.0');
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the state object to return to the given user configuration.
     * @param {object} state - A memento object.
     * @see [Memento pattern](http://en.wikipedia.org/wiki/Memento_pattern)
     */
    setState: function(state) {
        var self = this;
        this.behavior.setState(state);
        this.refreshProperties();
        setTimeout(function() {
            self.behaviorChanged();
            self.synchronizeScrollingBoundaries();
        }, 100);
    },

    getState: function() {
        return this.behavior.getState();
    },
    /**
     * @memberOf Hypergrid.prototype
     * @returns {object} The initial mouse position on a mouse down event for cell editing or a drag operation.
     * @memberOf Hypergrid.prototype
     */
    getMouseDown: function() {
        var last = this.mouseDown.length - 1;
        if (last < 0) {
            return null;
        }
        return this.mouseDown[last];
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Remove the last item from the mouse down stack.
     */
    popMouseDown: function() {
        if (this.mouseDown.length !== 0) {
            this.mouseDown.length = this.mouseDown.length - 1;
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Empty out the mouse down stack.
     */
    clearMouseDown: function() {
        this.mouseDown = [new Point(-1, -1)];
        this.dragExtent = null;
    },

    /**
     * Set the mouse point that initiated a cell edit or drag operation.
     * @param {Point} point
     * @memberOf Hypergrid.prototype
     */
    setMouseDown: function(point) {
        this.mouseDown.push(point);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Point} The extent point of the current drag selection rectangle.
     */
    getDragExtent: function() {
        return this.dragExtent;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set the extent point of the current drag selection operation.
     * @param {Point} point
     */
    setDragExtent: function(point) {
        this.dragExtent = point;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc This function is a callback from the HypergridRenderer sub-component. It is called after each paint of the canvas.
     */
    gridRenderedNotification: function() {
        if (this.cellEditor) {
            this.cellEditor.gridRenderedNotification();
        }
        this.checkColumnAutosizing();
        this.fireSyntheticGridRenderedEvent();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The grid has just been rendered, make sure the column widths are optimal.
     */
    checkColumnAutosizing: function() {
        var behavior = this.behavior;
        behavior.autoSizeRowNumberColumn();
        if (this.isColumnAutosizing() && behavior.checkColumnAutosizing(false)) {
            setTimeout(function() {
                behavior.grid.synchronizeScrollingBoundaries();
            });
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Conditionally copy to clipboard.
     * @desc If we have focus, copy our current selection data to the system clipboard.
     * @param {event} event - The copy system event.
     */
    checkClipboardCopy: function(event) {
        if (this.hasFocus()) {
            event.preventDefault();
            var csvData = this.getSelectionAsTSV();
            event.clipboardData.setData('text/plain', csvData);
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} We have any selections.
     */
    hasSelections: function() {
        if (!this.getSelectionModel) {
            return; // were not fully initialized yet
        }
        return this.selectionModel.hasSelections();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {string} Tab separated value string from the selection and our data.
     */
    getSelectionAsTSV: function() {
        var sm = this.selectionModel;
        if (sm.hasSelections()) {
            var selections = this.getSelectionMatrix();
            selections = selections[selections.length - 1];
            return this.getMatrixSelectionAsTSV(selections);
        } else if (sm.hasRowSelections()) {
            return this.getMatrixSelectionAsTSV(this.getRowSelectionMatrix());
        } else if (sm.hasColumnSelections()) {
            return this.getMatrixSelectionAsTSV(this.getColumnSelectionMatrix());
        }
    },

    getMatrixSelectionAsTSV: function(selections) {
        var result = '';

        //only use the data from the last selection
        if (selections.length) {
            var width = selections.length,
                height = selections[0].length,
                area = width * height,
                lastCol = width - 1,
                //Whitespace will only be added on non-singular rows, selections
                whiteSpaceDelimiterForRow = (height > 1 ? '\n' : '');

            //disallow if selection is too big
            if (area > 20000) {
                alert('selection size is too big to copy to the paste buffer'); // eslint-disable-line no-alert
                return '';
            }

            for (var h = 0; h < height; h++) {
                for (var w = 0; w < width; w++) {
                    result += selections[w][h] + (w < lastCol ? '\t' : whiteSpaceDelimiterForRow);
                }
            }
        }

        return result;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} We have focus.
     */
    hasFocus: function() {
        return this.getCanvas().hasFocus();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear all the selections.
     */
    clearSelections: function() {
        var dontClearRows = this.isCheckboxOnlyRowSelections();
        this.selectionModel.clear(dontClearRows);
        this.clearMouseDown();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear the most recent selection.
     */
    clearMostRecentSelection: function() {
        var dontClearRows = this.isCheckboxOnlyRowSelections();
        this.selectionModel.clearMostRecentSelection(dontClearRows);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear the most recent column selection.
     */
    clearMostRecentColumnSelection: function() {
        this.selectionModel.clearMostRecentColumnSelection();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Clear the most recent row selection.
     */
    clearMostRecentRowSelection: function() {
        //this.selectionModel.clearMostRecentRowSelection(); // commented off as per GRID-112
    },

    clearRowSelection: function() {
        this.selectionModel.clearRowSelection();
        this.behavior.dataModel.clearSelectedData();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Select given region.
     * @param {number} ox - origin x
     * @param {number} oy - origin y
     * @param {number} ex - extent x
     * @param {number} ex - extent y
     */
    select: function(ox, oy, ex, ey) {
        if (ox < 0 || oy < 0) {
            //we don't select negative area
            //also this means there is no origin mouse down for a selection rect
            return;
        }
        this.selectionModel.select(ox, oy, ex, ey);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} Given point is selected.
     * @param {number} x - The horizontal coordinate.
     * @param {number} y - The vertical coordinate.
     */
    isSelected: function(x, y) {
        return this.selectionModel.isSelected(x, y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The given column is selected anywhere in the entire table.
     * @param {number} y - The row index.
     */
    isCellSelectedInRow: function(y) {
        return this.selectionModel.isCellSelectedInRow(y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The given row is selected anywhere in the entire table.
     * @param {number} x - The column index.
     */
    isCellSelectedInColumn: function(x) {
        return this.selectionModel.isCellSelectedInColumn(x);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set the Behavior (model) object for this grid control.
     * @desc This can be done dynamically.
     * @param {object} options - _(See {@link behaviors.JSON#setData}.)_
     * @param {Behavior} [options.behavior=BehaviorJSON] - The behavior (model) can be either a constructor or an instance.
     * @param {dataRowObject[]} [options.data] - _(See {@link behaviors.JSON#setData}.)_
     * @param {pipelineSchema} [options.pipeline] - New pipeline description.
     */
    setBehavior: function(options) {
        var Behavior = options.Behavior || BehaviorJSON;
        this.behavior = new Behavior(this, options);
        this.initCanvas();
        this.initScrollbars();
        this.refreshProperties();
        this.behavior.reindex();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set the underlying datasource.
     * @desc This can be done dynamically.
     * @param {function|object[]} dataRows - May be:
     * * An array of congruent raw data objects.
     * * A function returning same.
     * @param {object} [options] - _(See {@link behaviors.JSON#setData}.)_
     */
    setData: function(dataRows, options) {
        if (!this.behavior) {
            // If we get hear it means:
            // 1. `Behavior` option wasn't given to constructor.
            // 2. `setBehavior` wasn't called explicitly.
            // So we call it now to set the default behavior (by not specifying a `Behavior`) with the unused constructor `pipeline` option.
            this.setBehavior({ pipeline: this.options.pipeline });
        }
        this.behavior.setData(dataRows, options);
        this.behavior.changed();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary _(See {@link Hypergrid.prototype#setData}.)_
     * @desc Binds the data and reshapes the grid (new column objects created)
     * @param {function|object[]} dataRows - May be:
     * * An array of congruent raw data objects.
     * * A function returning same.
     * @param {object} [options]
     */
    updateData: function(dataRows, options){
        if (!this.behavior){
            this.setData(dataRows, options);
        } else {
            this.behavior.updateData(dataRows, options);
            this.behavior.changed();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @param {object} [pipelines] - New pipeline description. _(See {@link dataModels.JSON#setPipeline}.)_
     * @param {object} [options] - _(See {@link dataModels.JSON#setPipeline}.)_
     */
    setPipeline: function(DataSources, options){
        this.behavior.setPipeline(DataSources, options);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc I've been notified that the behavior has changed.
     */
    behaviorChanged: function() {
        if (this.divCanvas) {
            if (this.numColumns !== this.getColumnCount() || this.numRows !== this.getRowCount()) {
                this.numColumns = this.getColumnCount();
                this.numRows = this.getRowCount();
                this.behaviorShapeChanged();
            } else {
                this.behaviorStateChanged();
            }
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The dimensions of the grid data have changed. You've been notified.
     */
    behaviorShapeChanged: function() {
        if (this.divCanvas) {
            this.synchronizeScrollingBoundaries();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The dimensions of the grid data have changed. You've been notified.
     */
    behaviorStateChanged: function() {
        if (this.divCanvas) {
            this.computeCellsBounds();
            this.repaint();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Rectangle} My bounds.
     */
    getBounds: function() {
        return this.renderer.getBounds();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {string} The value of a lnf property.
     * @param {string} key - A look-and-feel key.
     */
    resolveProperty: function(key) {
        // todo: when we remove this method, also remove forwards from Behavior.js and Renderer.js
        if (!warned.resolveProperty) {
            warned.resolveProperty = true;
            console.warn('resolveProperty(key) deprecated as of v1.2.0 in favor of grid.properties[key] and will be removed in a future version.');
        }
        return this.properties[key];
    },

    repaint: function() {
        var now = this.properties.repaintImmediately;
        var canvas = this.getCanvas();
        if (canvas) {
            if (now === true) {
                canvas.paintNow();
            } else {
                canvas.repaint();
            }
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Paint immediately in this microtask.
     */
    paintNow: function() {
        this.getCanvas().paintNow();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} In HiDPI mode (has an attribute as such).
     */
    useHiDPI: function() {
        return this.properties.useHiDPI !== false;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set the container for a grid instance
     * @private
     */
    setContainer: function(div) {
        this.initContainer(div);
        this.initRenderer();
        // injectGridElements.call(this);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Initialize container
     * @private
     */
    initContainer: function(div) {
        if (typeof div === 'string') {
            div = document.querySelector(div);
        }

        //Default Position and height to ensure DnD works
        if (!div.style.position) {
            div.style.position = null; // revert to stylesheet value
        }

        if (div.clientHeight < 1) {
            div.style.height = null; // revert to stylesheet value
        }

        stylesheet.inject('grid');

        //prevent the default context menu for appearing
        div.oncontextmenu = function(event) {
            event.stopPropagation();
            event.preventDefault();
            return false;
        };

        div.removeAttribute('tabindex');

        div.classList.add('hypergrid-container');
        div.id = div.id || 'hypergrid' + (document.querySelectorAll('.hypergrid-container').length - 1 || '');

        this.div = div;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Initialize drawing surface.
     * @private
     */
    initCanvas: function() {
        if (this.divCanvas) {
            return;
        }

        var self = this,
            margin = this.options.margin || {},
            divCanvas = this.divCanvas = document.createElement('div'),
            style = divCanvas.style;

        style.position = 'absolute';
        style.top = margin.top || 0;
        style.right = margin.right || 0;
        style.bottom = margin.bottom || 0;
        style.left = margin.left || 0;

        this.div.appendChild(divCanvas);

        this.canvas = new Canvas(divCanvas, this.renderer);
        this.canvas.canvas.classList.add('hypergrid');
        this.canvas.canvas.style.backgroundColor = this.properties.lineColor;
        this.canvas.resize();

        function getMouseEvent(e) {
            return Object.defineProperty(
                self.getGridCellFromMousePoint(e.detail.mouse),
                'primitiveEvent',
                {
                    value: e,
                    enumerable: false,
                    configurable: true,
                    writable: true
                }
            );
        }

        this.canvas.resizeNotification = function() {
            self.resized();
        };

        this.addEventListener('fin-canvas-mousemove', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            self.delegateMouseMove(getMouseEvent(e));
        });

        this.addEventListener('fin-canvas-mousedown', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            if (!self.abortEditing()) {
                event.stopPropagation();
                return;
            }
            var mouseEvent = getMouseEvent(e);
            mouseEvent.keys = e.detail.keys;
            self.mouseDownState = mouseEvent;
            self.delegateMouseDown(mouseEvent);
            self.fireSyntheticMouseDownEvent(mouseEvent);
            self.repaint();
        });

        this.addEventListener('fin-canvas-click', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            var mouseEvent = getMouseEvent(e);
            mouseEvent.keys = e.detail.keys; // todo: this was in fin-tap but wasn't here
            self.fireSyntheticClickEvent(mouseEvent);
            self.delegateClick(mouseEvent);
        });

        this.addEventListener('fin-canvas-mouseup', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            self.dragging = false;
            if (self.isScrollingNow()) {
                self.setScrollingNow(false);
            }
            if (self.columnDragAutoScrolling) {
                self.columnDragAutoScrolling = false;
            }
            var mouseEvent = getMouseEvent(e);
            self.delegateMouseUp(mouseEvent);
            if (self.mouseDownState) {
                self.fireSyntheticButtonPressedEvent(self.mouseDownState);
            }
            self.mouseDownState = null;
            self.fireSyntheticMouseUpEvent(mouseEvent);
        });

        this.addEventListener('fin-canvas-dblclick', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            var mouseEvent = getMouseEvent(e);
            self.fireSyntheticDoubleClickEvent(mouseEvent, e);
            self.delegateDoubleClick(mouseEvent);
        });

        this.addEventListener('fin-canvas-drag', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            self.dragging = true;
            self.delegateMouseDrag(getMouseEvent(e));
        });

        this.addEventListener('fin-canvas-keydown', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            self.fireSyntheticKeydownEvent(e);
            self.delegateKeyDown(e);
        });

        this.addEventListener('fin-canvas-keyup', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            self.fireSyntheticKeyupEvent(e);
            self.delegateKeyUp(e);
        });

        this.addEventListener('fin-canvas-wheelmoved', function(e) {
            self.delegateWheelMoved(getMouseEvent(e));
        });

        this.addEventListener('fin-canvas-mouseout', function(e) {
            if (self.properties.readOnly) {
                return;
            }
            self.delegateMouseExit(getMouseEvent(e));
        });

        this.addEventListener('fin-canvas-context-menu', function(e) {
            self.delegateContextMenu(getMouseEvent(e));
        });

        //Register a listener for the copy event so we can copy our selected region to the pastebuffer if conditions are right.
        document.body.addEventListener('copy', function(evt) {
            self.checkClipboardCopy(evt);
        });
    },

    convertViewPointToDataPoint: function(unscrolled) {
        return this.behavior.convertViewPointToDataPoint(unscrolled);
    },

    convertDataPointToViewPoint: function(dataPoint) {
        return this.behavior.convertDataPointToViewPoint(dataPoint);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Add an event listener to me.
     * @param {string} eventName - The type of event we are interested in.
     * @param {function} callback - The event handler.
     */
    addEventListener: function(eventName, callback) {
        var self = this;
        var decorator = function(e) {
            if (self.allowEventHandlers){
                callback(e);
            }
        };
        this.canvas.addEventListener(eventName, decorator);
    },

    allowEvents: function(allow){
        if ((this.allowEventHandlers = !!allow)){
            this.behavior.featureChain.attachChain();
        } else {
            this.behavior.featureChain.detachChain();
        }

        this.behavior.changed();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Set for `scrollingNow` field.
     * @param {boolean} isItNow - The type of event we are interested in.
     */
    setScrollingNow: function(isItNow) {
        this.scrollingNow = isItNow;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The `scrollingNow` field.
     */
    isScrollingNow: function() {
        return this.scrollingNow;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The index of the column divider under the mouse coordinates.
     * @param {MouseEvent} mouseEvent - The event to interogate.
     */
    overColumnDivider: function(mouseEvent) {
        return this.renderer.overColumnDivider(mouseEvent.primitiveEvent.detail.mouse.x);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The index of the row divider under the mouse coordinates.
     * @param {MouseEvent} mouseEvent - The event to interogate.
     */
    overRowDivider: function(mouseEvent) {
        return this.renderer.overRowDivider(mouseEvent.primitiveEvent.detail.mouse.y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Switch the cursor for a grid instance.
     * @param {string} cursorName - A well know cursor name.
     * @see [cursor names](http://www.javascripter.net/faq/stylesc.htm)
     */
    beCursor: function(cursorName) {
        if (!cursorName) {
            cursorName = 'default';
        }
        this.div.style.cursor = cursorName;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate the wheel moved event to the behavior.
     * @param {Event} event - The pertinent event.
     */
    delegateWheelMoved: function(event) {
        this.behavior.onWheelMoved(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate MouseExit to the behavior (model).
     * @param {Event} event - The pertinent event.
     */
    delegateMouseExit: function(event) {
        this.behavior.handleMouseExit(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate MouseExit to the behavior (model).
     * @param {Event} event - The pertinent event.
     */
    delegateContextMenu: function(event) {
        this.behavior.onContextMenu(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate MouseMove to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseMove: function(mouseDetails) {
        this.behavior.onMouseMove(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate mousedown to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseDown: function(mouseDetails) {
        this.behavior.handleMouseDown(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate mouseup to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseUp: function(mouseDetails) {
        this.behavior.onMouseUp(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate click to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateClick: function(mouseDetails) {
        this.behavior.onClick(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Delegate mouseDrag to the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateMouseDrag: function(mouseDetails) {
        this.behavior.onMouseDrag(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc We've been doubleclicked on. Delegate through the behavior (model).
     * @param {mouseDetails} mouseDetails - An enriched mouse event from fin-canvas.
     */
    delegateDoubleClick: function(mouseDetails) {
        this.behavior.onDoubleClick(this, mouseDetails);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Generate a function name and call it on self.
     * @desc This should also be delegated through Behavior keeping the default implementation here though.
     * @param {event} event - The pertinent event.
     */
    delegateKeyDown: function(event) {
        this.behavior.onKeyDown(this, event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Generate a function name and call it on self.
     * @desc This should also be delegated through Behavior keeping the default implementation here though.
     * @param {event} event - The pertinent event.
     */
    delegateKeyUp: function(event) {
        this.behavior.onKeyUp(this, event);
    },

    /**
     * @summary Shut down the current cell editor and save the edited value.
     * @returns {boolean} One of:
     * * `false` - Editing BUT could not abort.
     * * `true` - Not editing OR was editing AND abort was successful.
     * @memberOf Hypergrid.prototype
     */
    stopEditing: function() {
        return !this.cellEditor || this.cellEditor.stopEditing();
    },

    /**
     * @summary Shut down the current cell editor without saving the edited val
     * @returns {boolean} One of:
     * * `false` - Editing BUT could not abort.
     * * `true` - Not editing OR was editing AND abort was successful.
     * @memberOf Hypergrid.prototype
     */
    cancelEditing: function() {
        return !this.cellEditor || this.cellEditor.cancelEditing();
    },

    /**
     * @summary Give cell editor opportunity to cancel (or something) instead of stop .
     * @returns {boolean} One of:
     * * `false` - Editing BUT could not abort.
     * * `true` - Not editing OR was editing AND abort was successful.
     * @memberOf Hypergrid.prototype
     */
    abortEditing: function() {
        return !this.cellEditor || (
            this.cellEditor.abortEditing ? this.cellEditor.abortEditing() : this.cellEditor.stopEditing()
        );
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Rectangle} The pixel coordinates of just the center 'main" data area.
     */
    getDataBounds: function() {
        var b = this.canvas.bounds;
        return new Rectangle(0, 0, b.origin.x + b.extent.x, b.origin.y + b.extent.y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Canvas} Our fin-canvas instance.
     */
    getCanvas: function() {
        return this.canvas;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Open the cell-editor for the cell at the given coordinates.
     * @param {Point} editPoint - The grid cell coordinate mixed with the data row coordinate.
     * @return {undefined|CellEditor} The cellEditor determined from the cell's render properties, which may be modified by logic added by overriding {@link DataModel#getCellEditorAt|getCellEditorAt}.
     */
    editAt: function(event) {
        var cellEditor;

        if (arguments.length === 2) {
            return this.deprecated('editAt(cellEditor, event)', 'editAt(event)', '1.0.6', arguments);
        }

        this.abortEditing(); // if another editor is open, close it first

        if (
            event.isGridColumn &&
            event.getCellProperty(event.isGridRow ? 'editable' : 'filterable')
        ) {
            this.setMouseDown(event.gridCell);
            this.setDragExtent(new Point(0, 0));

            cellEditor = this.getCellEditorAt(event);
            if (cellEditor) {
                cellEditor.beginEditing();
            }
        }

        return cellEditor;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @param {number} columnIndex - The column index in question.
     * @returns {boolean} The given column is fully visible.
     */
    isColumnVisible: function(columnIndex) {
        return this.renderer.isColumnVisible(columnIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @param {number} r - The raw row index in question.
     * @returns {boolean} The given row is fully visible.
     */
    isDataRowVisible: function(r) {
        return this.renderer.isRowVisible(r);
    },

    /**
     * @todo refac and move to CellEvent
     * @memberOf Hypergrid.prototype
     * @param {number} c - The column index in question.
     * @param {number} rn - The grid row index in question.
     * @returns {boolean} The given cell is fully is visible.
     */
    isDataVisible: function(c, rn) {
        return this.isDataRowVisible(rn) && this.isColumnVisible(c);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll in the `offsetX` direction if column index `colIndex` is not visible.
     * @param {number} colIndex - The column index in question.
     * @param {number} offsetX - The direction and magnitude to scroll if we need to.
     * @return {boolean} Column is visible.
     */
    insureModelColIsVisible: function(colIndex, offsetX) {
        var maxCols = this.getColumnCount() - 1, // -1 excludes partially visible columns
            indexToCheck = colIndex + (offsetX > 0),
            visible = !this.isColumnVisible(indexToCheck) || colIndex === maxCols;

        if (visible) {
            //the scroll position is the leftmost column
            this.scrollBy(offsetX, 0);
        }

        return visible;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll in the `offsetY` direction if column index c is not visible.
     * @param {number} rowIndex - The column index in question.
     * @param {number} offsetX - The direction and magnitude to scroll if we need to.
     * @return {boolean} Row is visible.
     */
    insureModelRowIsVisible: function(rowIndex, offsetY) {
        var maxRows = this.getRowCount() - 1, // -1 excludes partially visible rows
            indexToCheck = rowIndex + (offsetY > 0),
            visible = !this.isDataRowVisible(indexToCheck) || rowIndex === maxRows;

        if (visible) {
            //the scroll position is the topmost row
            this.scrollBy(0, offsetY);
        }

        return visible;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll horizontal and vertically by the provided offsets.
     * @param {number} offsetX - Scroll in the x direction this much.
     * @param {number} offsetY - Scroll in the y direction this much.
     */
    scrollBy: function(offsetX, offsetY) {
        this.scrollHBy(offsetX);
        this.scrollVBy(offsetY);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll vertically by the provided offset.
     * @param {number} offsetY - Scroll in the y direction this much.
     */
    scrollVBy: function(offsetY) {
        var max = this.sbVScroller.range.max;
        var oldValue = this.getVScrollValue();
        var newValue = Math.min(max, Math.max(0, oldValue + offsetY));
        if (newValue !== oldValue) {
            this.setVScrollValue(newValue);
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Scroll horizontally by the provided offset.
     * @param {number} offsetX - Scroll in the x direction this much.
     */
    scrollHBy: function(offsetX) {
        var max = this.sbHScroller.range.max;
        var oldValue = this.getHScrollValue();
        var newValue = Math.min(max, Math.max(0, oldValue + offsetX));
        if (newValue !== oldValue) {
            this.setHScrollValue(newValue);
        }
    },

    scrollToMakeVisible: function(c, r) {
        var delta,
            dw = this.renderer.dataWindow,
            fixedColumnCount = this.properties.fixedColumnCount,
            fixedRowCount = this.properties.fixedRowCount;

        if (
            c >= fixedColumnCount && // scroll only if target not in fixed columns
            (
                // target is to left of scrollable columns; negative delta scrolls left
                (delta = c - dw.origin.x) < 0 ||

                // target is to right of scrollable columns; positive delta scrolls right
                // Note: The +1 forces right-most column to scroll left (just in case it was only partially in view)
                (delta = c - dw.corner.x + 1) > 0
            )
        ) {
            this.sbHScroller.index += delta;
        }

        if (
            r >= fixedRowCount && // scroll only if target not in fixed rows
            (
                // target is above scrollable rows; negative delta scrolls up
                (delta = r - dw.origin.y) < 0 ||

                // target is below scrollable rows; positive delta scrolls down
                (delta = r - dw.corner.y) > 0
            )
        ) {
            this.sbVScroller.index += delta;
        }
    },

    selectCellAndScrollToMakeVisible: function(c, r) {
        this.selectCell(c, r, true);
        this.scrollToMakeVisible(c, r);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Answer which data cell is under a pixel value mouse point.
     * @param {mousePoint} mouse - The mouse point to interrogate.
     */

    getGridCellFromMousePoint: function(mouse) {
        return this.renderer.getGridCellFromMousePoint(mouse);
    },

    /**
     * @param {Point} gridCell - The pixel location of the mouse in physical grid coordinates.
     * @returns {Rectangle} The pixel based bounds rectangle given a data cell point.
     * @memberOf Hypergrid.prototype
     */
    getBoundsOfCell: function(gridCell) {
        var b = this.renderer.getBoundsOfCell(gridCell.x, gridCell.y);

        //convert to a proper rectangle
        return new Rectangle(b.x, b.y, b.width, b.height);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc This is called by the fin-canvas when a resize occurs.
     */
    resized: function() {
        this.synchronizeScrollingBoundaries();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary A click event occurred.
     * @desc Determine the cell and delegate to the behavior (model).
     * @param {MouseEvent} event - The mouse event to interrogate.
     * @returns {boolean|undefined} Changed. Specifically, one of:
     * * `undefined` row had no drill-down control
     * * `true` drill-down changed
     * * `false` drill-down unchanged (was already in requested state)
     */
    cellClicked: function(event) {
        var result = false;

        //click occurred in background area
        if (
            event.gridCell.x <= this.getColumnCount() &&
            event.gridCell.y <= this.getRowCount()
        ) {
            result = this.behavior.cellClicked(event);

            if (result !== undefined) {
                this.behavior.changed();
            }
        }

        return result;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @param {number} c - grid column index.
     * @param {string[]} keys
     */
    fireSyntheticColumnSortEvent: function(c, keys) {
        var event = new CustomEvent('fin-column-sort', {
            detail: {
                column: c,
                keys: keys
            }
        });
        this.canvas.dispatchEvent(event);
    },

    fireSyntheticEditorKeyUpEvent: function(inputControl, keyEvent) {
        var clickEvent = new CustomEvent('fin-editor-keyup', {
            detail: {
                input: inputControl,
                keyEvent: keyEvent,
                char: this.canvas.getCharMap()[keyEvent.keyCode][keyEvent.shiftKey ? 1 : 0]
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticEditorKeyDownEvent: function(inputControl, keyEvent) {
        var clickEvent = new CustomEvent('fin-editor-keydown', {
            detail: {
                input: inputControl,
                keyEvent: keyEvent,
                char: this.canvas.getCharMap()[keyEvent.keyCode][keyEvent.shiftKey ? 1 : 0]
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticEditorKeyPressEvent: function(inputControl, keyEvent) {
        var clickEvent = new CustomEvent('fin-editor-keypress', {
            detail: {
                input: inputControl,
                keyEvent: keyEvent,
                char: this.canvas.getCharMap()[keyEvent.keyCode][keyEvent.shiftKey ? 1 : 0]
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticEditorDataChangeEvent: function(inputControl, oldValue, newValue) {
        var clickEvent = new CustomEvent('fin-editor-data-change', {
            detail: {
                input: inputControl,
                oldValue: oldValue,
                newValue: newValue
            },
            cancelable: true
        });
        return this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-row-selection-changed` event.
     */
    fireSyntheticRowSelectionChangedEvent: function() {
        var selectionEvent = new CustomEvent('fin-row-selection-changed', {
            detail: {
                rows: this.getSelectedRows(),
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections(),
            }
        });
        this.canvas.dispatchEvent(selectionEvent);
    },

    fireSyntheticColumnSelectionChangedEvent: function() {
        var selectionEvent = new CustomEvent('fin-column-selection-changed', {
            detail: {
                rows: this.getSelectedRows(),
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections()
            }
        });
        this.canvas.dispatchEvent(selectionEvent);
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and dispatch a `fin-selection-changed` event.
     */
    selectionChanged: function() {
        var selectedRows = this.getSelectedRows();
        var selectionEvent = new CustomEvent('fin-selection-changed', {
            detail: {
                rows: selectedRows,
                columns: this.getSelectedColumns(),
                selections: this.selectionModel.getSelections(),
            }
        });
        this.canvas.dispatchEvent(selectionEvent);
    },

    getRowSelection: function(includeHiddenColumns) {
        var column, rows, getColumn,
            self = this,
            selectedRowIndexes = this.selectionModel.getSelectedRows(),
            numColumns = this.getColumnCount(),
            result = {};

        if (includeHiddenColumns) {
            numColumns += this.getHiddenColumns().length;
            getColumn = this.behavior.getColumn;
        } else {
            getColumn = this.behavior.getActiveColumn;
        }
        getColumn = getColumn.bind(this.behavior);

        for (var c = 0; c < numColumns; c++) {
            column = getColumn(c);
            rows = result[column.name] = new Array(selectedRowIndexes.length);
            selectedRowIndexes.forEach(getValue);
        }

        function getValue(selectedRowIndex, j) {
            var dataRow = self.getRow(selectedRowIndex);
            rows[j] = valOrFunc.call(dataRow, column);
        }

        return result;
    },

    getHiddenColumns: function(){
        //A non in-memory behavior will be more troublesome
        return this.behavior.getHiddenColumns();
    },

    getRowSelectionMatrix: function() {
        var self = this,
            selectedRowIndexes = this.selectionModel.getSelectedRows(),
            numCols = this.getColumnCount(),
            result = new Array(numCols);

        for (var c = 0; c < numCols; c++) {
            var column = this.behavior.getActiveColumn(c);
            result[c] = new Array(selectedRowIndexes.length);
            selectedRowIndexes.forEach(getValue);
        }

        function getValue(selectedRowIndex, r) {
            var dataRow = self.getRow(selectedRowIndex);
            result[c][r] = valOrFunc.call(dataRow, column);
        }

        return result;
    },

    getColumnSelectionMatrix: function() {
        var dataRow,
            self = this,
            headerRowCount = this.getHeaderRowCount(),
            selectedColumnIndexes = this.getSelectedColumns(),
            numRows = this.getRowCount(),
            result = new Array(selectedColumnIndexes.length);

        selectedColumnIndexes.forEach(function(selectedColumnIndex, c) {
            var column = self.behavior.getActiveColumn(selectedColumnIndex),
                values = result[c] = new Array(numRows);

            for (var r = headerRowCount; r < numRows; r++) {
                dataRow = self.getRow(r);
                values[r] = valOrFunc.call(dataRow, column);
            }
        });

        return result;
    },

    getColumnSelection: function() {
        var dataRow,
            self = this,
            headerRowCount = this.getHeaderRowCount(),
            selectedColumnIndexes = this.getSelectedColumns(),
            result = {},
            rowCount = this.getRowCount();

        selectedColumnIndexes.forEach(function(selectedColumnIndex) {
            var column = self.behavior.getActiveColumn(selectedColumnIndex),
                values = result[column.name] = new Array(rowCount);

            for (var r = headerRowCount; r < rowCount; r++) {
                dataRow = self.getRow(r);
                values[r] = valOrFunc.call(dataRow, column);
            }
        });

        return result;
    },

    getSelection: function() {
        var dataRow,
            self = this,
            selections = this.getSelections(),
            rects = new Array(selections.length);

        selections.forEach(getRect);

        function getRect(selectionRect, i) {
            var rect = normalizeRect(selectionRect),
                colCount = rect.extent.x + 1,
                rowCount = rect.extent.y + 1,
                columns = {};

            for (var c = 0, x = rect.origin.x; c < colCount; c++, x++) {
                var column = self.behavior.getActiveColumn(x),
                    values = columns[column.name] = new Array(rowCount);

                for (var r = 0, y = rect.origin.y; r < rowCount; r++, y++) {
                    dataRow = self.getRow(y);
                    values[r] = valOrFunc.call(dataRow, column);
                }
            }

            rects[i] = columns;
        }

        return rects;
    },

    getSelectionMatrix: function() {
        var dataRow,
            self = this,
            selections = this.getSelections(),
            rects = new Array(selections.length);

        selections.forEach(getRect);

        function getRect(selectionRect, i) {
            var rect = normalizeRect(selectionRect),
                colCount = rect.extent.x + 1,
                rowCount = rect.extent.y + 1,
                rows = [];

            for (var c = 0, x = rect.origin.x; c < colCount; c++, x++) {
                var values = rows[c] = new Array(rowCount),
                    column = self.behavior.getActiveColumn(x);

                for (var r = 0, y = rect.origin.y; r < rowCount; r++, y++) {
                    dataRow = self.getRow(y);
                    values[r] = valOrFunc.call(dataRow, column);
                }
            }

            rects[i] = rows;
        }

        return rects;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-context-menu` event
     * @param {keyEvent} event - The canvas event.
     */
    fireSyntheticContextMenuEvent: function(event) {
        event.rows = this.getSelectedRows();
        event.columns = this.getSelectedColumns();
        event.selections = this.selectionModel.getSelections();
        this.canvas.dispatchEvent(
            new CustomEvent('fin-context-menu', { detail: event })
        );
    },

    fireSyntheticMouseUpEvent: function(event) {
        event.rows = this.getSelectedRows();
        event.columns = this.getSelectedColumns();
        event.selections = this.selectionModel.getSelections();
        this.canvas.dispatchEvent(
            new CustomEvent('fin-mouseup', { detail: event })
        );
    },

    fireSyntheticMouseDownEvent: function(event) {
        event.rows = this.getSelectedRows();
        event.columns = this.getSelectedColumns();
        event.selections = this.selectionModel.getSelections();
        this.canvas.dispatchEvent(
            new CustomEvent('fin-mousedown', { detail: event })
        );
    },

    isViewableButton: function(c, r) {
        return this.renderer.isViewableButton(c, r);
    },

    fireSyntheticButtonPressedEvent: function(event) {
        if (this.isViewableButton(event.dataCell.x, event.gridCell.y)) {
            this.canvas.dispatchEvent(
                new CustomEvent('fin-button-pressed', { detail: event })
            );
        }
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-column-drag-start` event.
     */
    fireSyntheticOnColumnsChangedEvent: function() {
        var detail = {
            time: Date.now(),
            grid: this
        };
        var cEvent = new CustomEvent('fin-column-changed-event', {
            detail: detail
        });
        this.canvas.dispatchEvent(cEvent);
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-keydown` event.
     * @param {keyEvent} event - The canvas event.
     */
    fireSyntheticKeydownEvent: function(keyEvent) {
        var clickEvent = new CustomEvent('fin-keydown', {
            detail: keyEvent.detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-keyup` event.
     * @param {keyEvent} event - The canvas event.
     */
    fireSyntheticKeyupEvent: function(keyEvent) {
        var clickEvent = new CustomEvent('fin-keyup', {
            detail: keyEvent.detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    fireSyntheticFilterAppliedEvent: function() {
        var filterEvent = new CustomEvent('fin-filter-applied');
        this.canvas.dispatchEvent(filterEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-cell-enter` event
     * @param {Point} cell - The pixel location of the cell in which the click event occurred.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticOnCellEnterEvent: function(cell) {
        var detail = {
            gridCell: cell,
            time: Date.now(),
            grid: this
        };
        var clickEvent = new CustomEvent('fin-cell-enter', {
            detail: detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-cell-exit` event.
     * @param {Point} cell - The pixel location of the cell in which the click event occured.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticOnCellExitEvent: function(cell) {
        var detail = {
            gridCell: cell,
            time: Date.now(),
            grid: this
        };
        var clickEvent = new CustomEvent('fin-cell-exit', {
            detail: detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-cell-click` event.
     * @param {Point} cell - The pixel location of the cell in which the click event occured.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticClickEvent: function(mouseEvent) {
        var cell = mouseEvent.gridCell;
        var detail = {
            gridCell: cell,
            mousePoint: mouseEvent.mousePoint,
            keys: mouseEvent.keys,
            primitiveEvent: mouseEvent,
            time: Date.now(),
            grid: this
        };
        this.behavior.enhanceDoubleClickEvent(detail);
        var clickEvent = new CustomEvent('fin-click', {
            detail: detail
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a `fin-double-click` event.
     * @param {MouseEvent} event - The system mouse event.
     */
    fireSyntheticDoubleClickEvent: function(mouseEvent) {
        if (!this.abortEditing()) { return; }
        var cell = mouseEvent.gridCell;
        var detail = {
            gridCell: cell,
            mousePoint: mouseEvent.mousePoint,
            time: Date.now(),
            grid: this
        };
        this.behavior.enhanceDoubleClickEvent(mouseEvent);
        var clickEvent = new CustomEvent('fin-double-click', {
            detail: detail
        });
        this.behavior.cellDoubleClicked(cell, mouseEvent);
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a rendered event.
     */
    fireSyntheticGridRenderedEvent: function() {
        var event = new CustomEvent('fin-grid-rendered', {
            detail: {
                source: this,
                time: Date.now()
            }
        });
        if (this.canvas) {
            this.canvas.dispatchEvent(event);
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a scroll event.
     * @param {string} type - Should be either `fin-scroll-x` or `fin-scroll-y`.
     * @param {number} oldValue - The old scroll value.
     * @param {number} newValue - The new scroll value.
     */
    fireScrollEvent: function(type, oldValue, newValue) {
        var event = new CustomEvent(type, {
            detail: {
                oldValue: oldValue,
                value: newValue,
                time: Date.now()
            }
        });
        this.canvas.dispatchEvent(event);

    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the vertical scroll value.
     * @param {number} newValue - The new scroll value.
     */
    setVScrollValue: function(y) {
        var self = this;
        y = Math.min(this.sbVScroller.range.max, Math.max(0, Math.round(y)));
        if (y !== this.vScrollValue) {
            this.behavior._setScrollPositionY(y);
            var oldY = this.vScrollValue;
            this.vScrollValue = y;
            this.scrollValueChangedNotification();
            setTimeout(function() {
                // self.sbVRangeAdapter.subjectChanged();
                self.fireScrollEvent('fin-scroll-y', oldY, y);
            });
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @return {number} The vertical scroll value.
     */
    getVScrollValue: function() {
        return this.vScrollValue;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the horizontal scroll value.
     * @param {number} newValue - The new scroll value.
     */
    setHScrollValue: function(x) {
        var self = this;
        x = Math.min(this.sbHScroller.range.max, Math.max(0, Math.round(x)));
        if (x !== this.hScrollValue) {
            this.behavior._setScrollPositionX(x);
            var oldX = this.hScrollValue;
            this.hScrollValue = x;
            this.scrollValueChangedNotification();
            setTimeout(function() {
                //self.sbHRangeAdapter.subjectChanged();
                self.fireScrollEvent('fin-scroll-x', oldX, x);
                //self.synchronizeScrollingBoundries(); // todo: Commented off to prevent the grid from bouncing back, but there may be repurcussions...
            });
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns The vertical scroll value.
     */
    getHScrollValue: function() {
        return this.hScrollValue;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Request input focus.
     */
    takeFocus: function() {
        var wasCellEditor = this.cellEditor;
        this.stopEditing();
        if (!wasCellEditor) {
            this.getCanvas().takeFocus();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Request focus for our cell editor.
     */
    editorTakeFocus: function() {
        if (this.cellEditor) {
            return this.cellEditor.takeFocus();
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Initialize the scroll bars.
     */
    initScrollbars: function() {
        if (this.sbHScroller && this.sbVScroller){
            return;
        }

        var self = this;

        var horzBar = new FinBar({
            orientation: 'horizontal',
            onchange: self.setHScrollValue.bind(self),
            cssStylesheetReferenceElement: this.div
        });

        var vertBar = new FinBar({
            orientation: 'vertical',
            onchange: self.setVScrollValue.bind(self),
            paging: {
                up: self.pageUp.bind(self),
                down: self.pageDown.bind(self)
            }
        });

        this.sbHScroller = horzBar;
        this.sbVScroller = vertBar;

        var hPrefix = this.properties.hScrollbarClassPrefix;
        var vPrefix = this.properties.vScrollbarClassPrefix;

        if (hPrefix && hPrefix !== '') {
            this.sbHScroller.classPrefix = hPrefix;
        }

        if (vPrefix && vPrefix !== '') {
            this.sbVScroller.classPrefix = vPrefix;
        }

        this.div.appendChild(horzBar.bar);
        this.div.appendChild(vertBar.bar);

        this.resizeScrollbars();
    },

    resizeScrollbars: function() {
        this.sbHScroller.shortenBy(this.sbVScroller).resize();
        //this.sbVScroller.shortenBy(this.sbHScroller);
        this.sbVScroller.resize();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Scroll values have changed, we've been notified.
     */
    setVScrollbarValues: function(max) {
        this.sbVScroller.range = {
            min: 0,
            max: max
        };
    },

    setHScrollbarValues: function(max) {
        this.sbHScroller.range = {
            min: 0,
            max: max
        };
    },

    scrollValueChangedNotification: function() {

        if (this.hScrollValue === this.sbPrevHScrollValue && this.vScrollValue === this.sbPrevVScrollValue) {
            return;
        }

        this.sbPrevHScrollValue = this.hScrollValue;
        this.sbPrevVScrollValue = this.vScrollValue;

        if (this.cellEditor) {
            this.cellEditor.scrollValueChangedNotification();
        }

        this.computeCellsBounds();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Get data value at given cell.
     * @desc Delegates to the behavior.
     * @param {number} x - The horizontal coordinate.
     * @param {number} y - The vertical coordinate.
     * @param {*} value
     */
    getValue: function(x, y) {
        return this.behavior.getValue.apply(this.behavior, arguments);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set a data value into the behavior (model) at the given point
     * @param {number} x - The horizontal coordinate.
     * @param {number} y - The vertical coordinate.
     */
    setValue: function(x, y, value) {
        this.behavior.setValue.apply(this.beahvior, arguments);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc The data dimensions have changed, or our pixel boundries have changed.
     * Adjust the scrollbar properties as necessary.
     */
    synchronizeScrollingBoundaries: function() {
        var numFixedColumns = this.getFixedColumnCount();
        var numFixedRows = this.getFixedRowCount();

        var numColumns = this.getColumnCount();
        var numRows = this.getRowCount();

        var bounds = this.getBounds();
        if (!bounds) {
            return;
        }

        // 15px padding at bottom and right side
        var scrollableHeight = bounds.height - this.behavior.getFixedRowsMaxHeight() - 15;
        var scrollableWidth = bounds.width - this.behavior.getFixedColumnsMaxWidth() - 15;

        for (
            var columnsWidth = 0, lastPageColumnCount = 0;
            lastPageColumnCount < numColumns && columnsWidth <= scrollableWidth;
            lastPageColumnCount++
        ) {
            columnsWidth += this.getColumnWidth(numColumns - lastPageColumnCount - 1);
        }

        for (
            var rowsHeight = 0, lastPageRowCount = 0;
            lastPageRowCount < numRows && rowsHeight <= scrollableHeight;
            lastPageRowCount++
        ) {
            rowsHeight += this.getRowHeight(numRows - lastPageRowCount - 1);
        }

        // inform scroll bars
        if (this.sbHScroller) {
            var hMax = 1 + Math.max(0, numColumns - numFixedColumns - lastPageColumnCount);
            this.setHScrollbarValues(hMax);
            this.setHScrollValue(Math.min(this.getHScrollValue(), hMax));
        }
        if (this.sbVScroller) {
            var vMax = Math.max(0, numRows - numFixedRows - lastPageRowCount);
            this.setVScrollbarValues(vMax);
            this.setVScrollValue(Math.min(this.getVScrollValue(), vMax));
        }

        //this.getCanvas().resize();
        this.behaviorStateChanged();

        this.resizeScrollbars();
    },
    synchronizeScrollingBoundries: function() {
        this.deprecated('synchronizeScrollingBoundries', 'synchronizeScrollingBoundaries', '1.2.0');
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Note that "viewable rows" includes any partially viewable rows.
     * @returns {number} The number of viewable rows.
     */
    getVisibleRows: function() {
        return this.renderer.getVisibleRows();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Note that "viewable columns" includes any partially viewable columns.
     * @returns {number} The number of viewable columns.
     */
    getVisibleColumns: function() {
        return this.renderer.getVisibleColumns();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Initialize the renderer sub-component.
     */
    initRenderer: function() {
        this.renderer = this.renderer || new Renderer(this);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The width of the given column.
     * @param {number} columnIndex - The untranslated column index.
     */
    getColumnWidth: function(columnIndex) {
        return this.behavior.getColumnWidth(columnIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the width of the given column.
     * @param {number} columnIndex - The untranslated column index.
     * @param {number} columnWidth - The width in pixels.
     */
    setColumnWidth: function(columnIndex, columnWidth) {
        if (this.abortEditing()) {
            this.behavior.setColumnWidth(columnIndex, columnWidth);
        }
    },

    getColumnEdge: function(c) {
        return this.behavior.getColumnEdge(c, this.getRenderer());
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The total width of all the fixed columns.
     */
    getFixedColumnsWidth: function() {
        return this.behavior.getFixedColumnsWidth();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The height of the given row
     * @param {number} rowIndex - The untranslated fixed column index.
     */
    getRowHeight: function(rowIndex, dataModel) {
        return this.behavior.getRowHeight(rowIndex, dataModel);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Set the height of the given row.
     * @param {number} rowIndex - The row index.
     * @param {number} rowHeight - The width in pixels.
     */
    setRowHeight: function(rowIndex, rowHeight, dataModel) {
        if (this.abortEditing()) {
            this.behavior.setRowHeight(rowIndex, rowHeight, dataModel);
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The total fixed rows height
     */
    getFixedRowsHeight: function() {
        return this.behavior.getFixedRowsHeight();
    },

    /**
     * Number of _visible_ columns.
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of columns.
     */
    getColumnCount: function() {
        return this.behavior.getActiveColumnCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of fixed rows.
     */
    getRowCount: function() {
        return this.behavior.getRowCount();
    },

    getUnfilteredRowCount: function() {
        return this.deprecated('getUnfilteredRowCount()', null, '1.2.0', arguments, 'No longer supported');
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of fixed columns.
     */
    getFixedColumnCount: function() {
        return this.behavior.getFixedColumnCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns The number of fixed rows.
     */
    getFixedRowCount: function() {
        return this.behavior.getFixedRowCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary The top left area has been clicked on
     * @desc Delegates to the behavior.
     * @param {event} event - The event details.
     */
    topLeftClicked: function(mouse) {
        this.behavior.topLeftClicked(this, mouse);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary A fixed row has been clicked.
     * @desc Delegates to the behavior.
     * @param {event} event - The event details.
     */
    rowHeaderClicked: function(mouse) {
        this.behavior.rowHeaderClicked(this, mouse);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary A fixed column has been clicked.
     * @desc Delegates to the behavior.
     * @param {event} event - The event details.
     */
    columnHeaderClicked: function(mouse) {
        this.behavior.columnHeaderClicked(this, mouse);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc An edit event has occurred. Activate the editor at the given coordinates.
     * @param {number} event.gridCell.x - The horizontal coordinate.
     * @param {number} event.gridCell.y - The vertical coordinate.
     * @param {boolean} [event.primitiveEvent.type]
     * @returns {undefined|CellEditor} The editor object or `undefined` if no editor or editor already open.
     */
    onEditorActivate: function(event) {
        return this.editAt(event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Get the cell editor.
     * @desc Delegates to the behavior.
     * @returns The cell editor at the given coordinates.
     * @param {Point} cellEvent - The grid cell coordinates.
     */
    getCellEditorAt: function(event) {
        return this.behavior.getCellEditorAt(event);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @summary Toggle HiDPI support.
     * @desc HiDPI support is now *on* by default.
     * > There used to be a bug in Chrome that caused severe slow down on bit blit of large images, so this HiDPI needed to be optional.
     */
    toggleHiDPI: function() {
        if (this.useHiDPI()) {
            this.removeAttribute('hidpi');
        } else {
            this.setAttribute('hidpi', null);
        }
        this.canvas.resize();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} Te HiDPI ratio.
     */
    getHiDPI: function(ctx) {
        if (window.devicePixelRatio && this.useHiDPI()) {
            var devicePixelRatio = window.devicePixelRatio || 1;
            var backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1;

            var ratio = devicePixelRatio / backingStoreRatio;
            return ratio;
        } else {
            return 1;
        }
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The width of the given (recently rendered) column.
     * @param {number} colIndex - The column index.
     */
    getRenderedWidth: function(colIndex) {
        return this.renderer.getRenderedWidth(colIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The height of the given (recently rendered) row.
     * @param {number} rowIndex - Tthe row index.
     */
    getRenderedHeight: function(rowIndex) {
        return this.renderer.getRenderedHeight(rowIndex);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Update the cursor under the hover cell.
     */
    updateCursor: function() {
        var cursor = this.behavior.getCursorAt(-1, -1);
        var hoverCell = this.hoverCell;
        if (
            hoverCell &&
            hoverCell.x > -1 &&
            hoverCell.y > -1
        ) {
            var x = hoverCell.x + this.getHScrollValue();
            cursor = this.behavior.getCursorAt(x, hoverCell.y + this.getVScrollValue());
        }
        this.beCursor(cursor);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Repaint the given cell.
     * @param {x} x - The horizontal coordinate.
     * @param {y} y - The vertical coordinate.
     */
    repaintCell: function(x, y) {
        this.renderer.repaintCell(x, y);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {boolean} The user is currently dragging a column to reorder it.
     */
    isDraggingColumn: function() {
        return !!this.renderOverridesCache.dragger;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Scroll up one full page.
     * @returns {number}
     */
    pageUp: function() {
        var rowNum = this.renderer.getPageUpRow();
        this.setVScrollValue(rowNum);
        return rowNum;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Scroll down one full page.
     * @returns {number}
     */
    pageDown: function() {
        var rowNum = this.renderer.getPageDownRow();
        this.setVScrollValue(rowNum);
        return rowNum;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Not yet implemented.
     */
    pageLeft: function() {
        throw 'page left not yet implemented';
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Not yet implemented.
     */
    pageRight: function() {
        throw 'page right not yet implemented';
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {object[]} Objects with the values that were just rendered.
     */
    getRenderedData: function() {
        // assumes one row of headers
        var behavior = this.behavior,
            colCount = this.getColumnCount().length,
            rowCount = this.renderer.visibleRows.length,
            headers = new Array(colCount),
            results = new Array(rowCount),
            row;

        headers.forEach(function(header, c) {
            headers[c] = behavior.getActiveColumn(c).header;
        });

        results.forEach(function(result, r) {
            row = results[r] = {
                hierarchy: behavior.getFixedColumnValue(0, r)
            };
            headers.forEach(function(field, c) {
                row[field] = behavior.getValue(c, r);
            });
        });

        return results;
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {object} An object that represents the currently selection row.
     */
    getSelectedRow: function() {
        var sels = this.selectionModel.getSelections();
        if (sels.length) {
            var behavior = this.behavior,
                colCount = this.getColumnCount(),
                topRow = sels[0].origin.y,
                row = {
                    //hierarchy: behavior.getFixedColumnValue(0, topRow)
                };

            for (var c = 0; c < colCount; c++) {
                row[behavior.getActiveColumn(c).header] = behavior.getValue(c, topRow);
            }

            return row;
        }
    },

    fireRequestCellEdit: function(cell, value) {
        var clickEvent = new CustomEvent('fin-request-cell-edit', {
            cancelable: true,
            detail: {
                value: value,
                gridCell: cell,
                time: Date.now()
            }
        });
        return this.canvas.dispatchEvent(clickEvent); //I wasn't cancelled
    },
    /**
     * @memberOf Hypergrid.prototype
     * @desc Synthesize and fire a fin-before-cell-edit event.
     * @param {Point} cell - The x,y coordinates.
     * @param {Object} value - The current value.
     * @returns {boolean} Proceed (don't cancel).
     */
    fireBeforeCellEdit: function(cell, oldValue, newValue, control) {
        var clickEvent = new CustomEvent('fin-before-cell-edit', {
            cancelable: true,
            detail: {
                oldValue: oldValue,
                newValue: newValue,
                gridCell: cell,
                time: Date.now(),
                input: control,
                row: this.getRow(cell.y)
            }
        });
        return this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {Renderer} sub-component
     * @param {Point} cell - The x,y coordinates.
     * @param {Object} oldValue - The old value.
     * @param {Object} newValue - The new value.
     */
    fireAfterCellEdit: function(cell, oldValue, newValue, control) {
        var clickEvent = new CustomEvent('fin-after-cell-edit', {
            detail: {
                newValue: newValue,
                oldValue: oldValue,
                gridCell: cell,
                time: Date.now(),
                input: control,
                row: this.getRow(cell.y)
            }
        });
        this.canvas.dispatchEvent(clickEvent);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Autosize the column at colIndex for best fit.
     * @param {number} colIndex - The column index to modify at
     */
    autosizeColumn: function(activeColumnIndex) {
        var column = this.behavior.getActiveColumn(activeColumnIndex);
        column.checkColumnAutosizing(true);
        this.computeCellsBounds();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Enable/disable if this component can receive the focus.
     * @param {boolean} - canReceiveFocus
     */
    setFocusable: function(canReceiveFocus) {
        this.getCanvas().setFocusable(canReceiveFocus);
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of columns that were just rendered
     */
    getVisibleColumnsCount: function() {
        return this.renderer.getVisibleColumnsCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @returns {number} The number of rows that were just rendered
     */
    getVisibleRowsCount: function() {
        return this.renderer.getVisibleRowsCount();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Update the size of a grid instance.
     */
    updateSize: function() {
        this.canvas.checksize();
    },


    /**
     * @memberOf Hypergrid.prototype
     * @desc Stop the global repainting flag thread.
     */
    stopPaintThread: function() {
        this.canvas.stopPaintThread();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Stop the global resize check flag thread.
     */
    stopResizeThread: function() {
        this.canvas.stopResizeThread();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Restart the global resize check flag thread.
     */
    restartResizeThread: function() {
        this.canvas.restartResizeThread();
    },

    /**
     * @memberOf Hypergrid.prototype
     * @desc Restart the global repainting check flag thread.
     */
    restartPaintThread: function() {
        this.canvas.restartPaintThread();
    },

    swapColumns: function(source, target) {
        //Turns out this is called during dragged 'i.e' when the floater column is reshuffled
        //by the currently dragged column. The column positions are constantly reshuffled
        this.behavior.swapColumns(source, target);
    },

    endDragColumnNotification: function() {
        this.behavior.endDragColumnNotification();
    },

    getFixedColumnsMaxWidth: function() {
        return this.behavior.getFixedColumnsMaxWidth();
    },

    isMouseDownInHeaderArea: function() {
        var headerRowCount = this.getHeaderRowCount();
        var mouseDown = this.getMouseDown();
        return mouseDown.x < 0 || mouseDown.y < headerRowCount;
    },

    isHeaderWrapping: function() {
        return this.properties.headerTextWrapping;
    },

    _getBoundsOfCell: function(x, y) {
        return this.deprecated('_getBoundsOfCell()', 'getBoundsOfCell()', '1.2.0', arguments);
    },

    /**
     * @param {index} x - Data x coordinate.
     * @return {Object} The properties for a specific column.
     * @memberOf Hypergrid.prototype
     */
    getColumnProperties: function(x) {
        return this.behavior.getColumnProperties(x);
    },

    /**
     * @param {index} x - Data x coordinate.
     * @return {Object} The properties for a specific column.
     * @memberOf Hypergrid.prototype
     */
    setColumnProperties: function(x, properties) {
        this.behavior.setColumnProperties(x, properties);
    },

    moveSingleSelect: function(x, y) {
        this.behavior.moveSingleSelect(this, x, y);
    },

    selectCell: function(x, y, silent) {
        var dontClearRows = this.isCheckboxOnlyRowSelections();
        this.selectionModel.clear(dontClearRows);
        this.selectionModel.select(x, y, 0, 0, silent);
    },

    toggleSelectColumn: function(x, keys) {
        keys = keys || [];
        var model = this.selectionModel;
        var alreadySelected = model.isColumnSelected(x);
        var hasCTRL = keys.indexOf('CTRL') > -1;
        var hasSHIFT = keys.indexOf('SHIFT') > -1;
        if (!hasCTRL && !hasSHIFT) {
            model.clear();
            if (!alreadySelected) {
                model.selectColumn(x);
            }
        } else {
            if (hasCTRL) {
                if (alreadySelected) {
                    model.deselectColumn(x);
                } else {
                    model.selectColumn(x);
                }
            }
            if (hasSHIFT) {
                model.clear();
                model.selectColumn(this.lastEdgeSelection[0], x);
            }
        }
        if (!alreadySelected && !hasSHIFT) {
            this.lastEdgeSelection[0] = x;
        }
        this.repaint();
        this.fireSyntheticColumnSelectionChangedEvent();
    },

    toggleSelectRow: function(y, keys) {
        //we can select the totals rows if they exist, but not rows above that
        keys = keys || [];

        var sm = this.selectionModel;
        var alreadySelected = sm.isRowSelected(y);
        var hasSHIFT = keys.indexOf('SHIFT') >= 0;

        if (alreadySelected) {
            sm.deselectRow(y);
        } else {
            this.singleSelect();
            sm.selectRow(y);
        }

        if (hasSHIFT) {
            sm.clear();
            sm.selectRow(this.lastEdgeSelection[1], y);
        }

        if (!alreadySelected && !hasSHIFT) {
            this.lastEdgeSelection[1] = y;
        }

        this.repaint();
    },

    singleSelect: function() {
        var isCheckboxOnlyRowSelections = this.isCheckboxOnlyRowSelections(),
            isSingleRowSelectionMode = this.isSingleRowSelectionMode(),
            hasCTRL = false,
            result;

        if (this.mouseDownState){
            //triggered programmatically
            hasCTRL = this.mouseDownState.primitiveEvent.detail.primitiveEvent.ctrlKey;
        }

        result = (
            isCheckboxOnlyRowSelections && isSingleRowSelectionMode ||
            !isCheckboxOnlyRowSelections && (!hasCTRL || isSingleRowSelectionMode)
        );

        if (result) {
            this.selectionModel.clearRowSelection();
        }

        return result;
    },

    selectViewportCell: function(x, y) {
        var headerRowCount = this.getHeaderRowCount(),
            realX = this.renderer.visibleColumns[x].ColumnIndex, // todo refac
            realY = this.renderer.visibleRows[y].rowIndex; // todo refac
        this.clearSelections();
        this.select(realX, realY + headerRowCount, 0, 0);
        this.setMouseDown(this.newPoint(realX, realY + headerRowCount)); // todo refac
        this.setDragExtent(this.newPoint(0, 0));
        this.repaint();
    },

    selectToViewportCell: function(x, y) {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var headerRowCount = this.getHeaderRowCount(),
                realX = this.renderer.visibleColumns[x].columnIndex, // todo refac
                realY = this.renderer.visibleRows[y].rowIndex + headerRowCount, // todo refac
                selection = selections[0],
                origin = selection.origin;
            this.setDragExtent(this.newPoint(realX - origin.x, realY - origin.y));
            this.select(origin.x, origin.y, realX - origin.x, realY - origin.y);
            this.repaint();
        }
    },

    selectFinalCellOfCurrentRow: function() {
        var x = this.getColumnCount() - 1,
            y = this.getSelectedRows()[0],
            headerRowCount = this.getHeaderRowCount();
        this.clearSelections();
        this.scrollBy(this.getColumnCount(), 0);
        this.select(x, y + headerRowCount, 0, 0);
        this.setMouseDown(this.newPoint(x, y + headerRowCount));
        this.setDragExtent(this.newPoint(0, 0));
        this.repaint();
    },

    selectToFinalCellOfCurrentRow: function() {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var selection = selections[0],
                origin = selection.origin,
                extent = selection.extent,
                columnCount = this.getColumnCount();
            this.scrollBy(columnCount, 0);

            this.clearSelections();
            this.select(origin.x, origin.y, columnCount - origin.x - 1, extent.y);

            this.repaint();
        }
    },

    selectFirstCellOfCurrentRow: function() {
        var x = 0,
            y = this.getSelectedRows()[0],
            headerRowCount = this.getHeaderRowCount();
        this.clearSelections();
        this.setHScrollValue(0);
        this.select(x, y + headerRowCount, 0, 0);
        this.setMouseDown(this.newPoint(x, y + headerRowCount));
        this.setDragExtent(this.newPoint(0, 0));
        this.repaint();
    },

    selectToFirstCellOfCurrentRow: function() {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var selection = selections[0],
                origin = selection.origin,
                extent = selection.extent;
            this.clearSelections();
            this.select(origin.x, origin.y, -origin.x, extent.y);
            this.setHScrollValue(0);
            this.repaint();
        }
    },

    selectFinalCell: function() {
        this.selectCell(this.getColumnCount() - 1, this.getRowCount() - 1);
        this.scrollBy(this.getColumnCount(), this.getRowCount());
        this.repaint();
    },

    selectToFinalCell: function() {
        var selections = this.getSelections();
        if (selections && selections.length) {
            var selection = selections[0],
                origin = selection.origin,
                columnCount = this.getColumnCount(),
                rowCount = this.getRowCount();

            this.clearSelections();
            this.select(origin.x, origin.y, columnCount - origin.x - 1, rowCount - origin.y - 1);
            this.scrollBy(columnCount, rowCount);
            this.repaint();
        }
    },

    isShowRowNumbers: function() {
        return this.properties.showRowNumbers;
    },
    isEditable: function() {
        return this.properties.editable === true;
    },

    /**
     * @todo row refac: deprecate in favor of CellEvent.isGridRow
     * @param {integerRowIndex|sectionPoint} rn
     * @returns {boolean}
     */
    isGridRow: function(rn) {
        return rn >= 0 || rn.y >= 0;
    },

    isShowHeaderRow: function() {
        return this.properties.showHeaderRow;
    },
    getHeaderRowCount: function() {
        return this.behavior.getHeaderRowCount();
    },

    isShowFilterRow: function() {
        return this.properties.showFilterRow;
    },

    hasHierarchyColumn: function() {
        return this.behavior.hasHierarchyColumn();
    },
    isHierarchyColumn: function(x) {
        return this.hasHierarchyColumn() && x === 0;
    },
    checkScrollbarVisibility: function() {
        // var hoverClassOver = this.properties.scrollbarHoverOver;
        // var hoverClassOff = this.properties.scrollbarHoverOff;

        // if (hoverClassOff === 'visible') {
        //     this.sbHScroller.classList.remove(hoverClassOver);
        //     this.sbVScroller.classList.remove(hoverClassOff);
        //     this.sbHScroller.classList.add('visible');
        //     this.sbVScroller.classList.add('visible');
        // }
    },
    isColumnOrRowSelected: function() {
        return this.selectionModel.isColumnOrRowSelected();
    },
    selectColumn: function(x1, x2) {
        this.selectionModel.selectColumn(x1, x2);
    },
    selectRow: function(y1, y2) {
        var sm = this.selectionModel;

        if (this.singleSelect()) {
            y1 = y2;
        } else {
            // multiple row selection
            y2 = y2 || y1;
        }

        sm.selectRow(Math.min(y1, y2), Math.max(y1, y2));
    },
    isRowNumberAutosizing: function() {
        return this.properties.rowNumberAutosizing;
    },
    lookupFeature: function(key) {
        return this.behavior.lookupFeature(key);
    },
    getRow: function(y) {
        return this.behavior.getRow(y);
    },
    isCellSelection: function() {
        return this.properties.cellSelection === true;
    },
    isRowSelection: function() {
        return this.properties.rowSelection === true;
    },
    isColumnSelection: function() {
        return this.properties.columnSelection === true;
    },
    isColumnAutosizing: function() {
        return this.properties.columnAutosizing === true;
    },

    selectRowsFromCells: function() {
        if (!this.isCheckboxOnlyRowSelections()) {
            var last,
                hasCTRL = this.mouseDownState.primitiveEvent.detail.primitiveEvent.ctrlKey;

            if (hasCTRL && !this.isSingleRowSelectionMode()) {
                this.selectionModel.selectRowsFromCells(0, hasCTRL);
            } else if ((last = this.selectionModel.getLastSelection())) {
                this.selectRow(null, last.corner.y);
            } else {
                this.clearRowSelection();
            }
        }
    },
    selectColumnsFromCells: function() {
        this.selectionModel.selectColumnsFromCells();
    },
    getSelectedRows: function() {
        return this.behavior.getSelectedRows();
    },
    getSelectedColumns: function() {
        return this.behavior.getSelectedColumns();
    },
    getSelections: function() {
        return this.behavior.getSelections();
    },
    getLastSelectionType: function() {
        return this.selectionModel.getLastSelectionType();
    },
    isInCurrentSelectionRectangle: function(x, y) {
        return this.selectionModel.isInCurrentSelectionRectangle(x, y);
    },
    selectAllRows: function() {
        this.selectionModel.selectAllRows();
    },
    areAllRowsSelected: function() {
        return this.selectionModel.areAllRowsSelected();
    },
    toggleSelectAllRows: function() {
        if (this.areAllRowsSelected()) {
            this.selectionModel.clear();
        } else {
            this.selectAllRows();
        }
        this.repaint();
    },
    isSingleRowSelectionMode: function() {
        return this.properties.singleRowSelectionMode;
    },

    newPoint: function(x, y) {
        return new Point(x, y);
    },
    newRectangle: function(x, y, width, height) {
        return new Rectangle(x, y, width, height);
    },

    /**
     * @summary _Getter_
     * @method
     * @returns {sorterAPI} The grid's currently assigned sorter.
     * @memberOf dataModels.JSON.prototype
     */
    get sorter() {
        return this.behavior.sorter;
    },

    /**
     * @summary _Setter:_ Assign a sorter to the grid.
     * @method
     * @param {sorterAPI|undefined|null} sorter - One of:
     * * A sorter object, turning sorting *ON*.
     * * If `undefined` or `null`, the {@link dataModels.JSON~nullSorter|nullSorter} is reassigned to the grid, turning sorting *OFF.*
     * @memberOf Hypergrid.prototype
     */
    set sorter(sorter) {
        this.behavior.sorter = sorter;
        this.behaviorChanged();
    },

    /**
     * @summary _Getter_
     * @method
     * @returns {dataSourceHelperAPI} The grid's currently assigned filter.
     * @memberOf Hypergrid.prototype
     */
    get filter() {
        return this.behavior.filter;
    },

    /**
     * @summary _Setter:_ Set a grid instance's filter.
     * @desc Requires a filter data source be installed in the transformation pipeline.
     * @method
     * @param {dataSourceHelperAPI|undefined|null} filter - One of:
     * * A filter object, turning filter *ON*.
     * * If `undefined` or `null`, the null filter is reassigned to the grid, turning filtering *OFF.*
     * @memberOf Hypergrid.prototype
     */
    set filter(filter) {
        this.behavior.filter = filter;
        this.behaviorChanged();
    },

    /**
     * @summary Sticky hash of dialog options objects.
     * @desc Each key is a dialog name; the value is the options object for that dialog.
     * The default dialog options object has the key `'undefined'`, which is undefined by default; it is set by calling `setDialogOptions` with no `dialogName` parameter.
     * @private
     */
    dialogOptions: {},

    /**
     * @summary Set and/or return a specific dialog options object *or* a default dialog options object.
     *
     * @desc If `options` defined:
     * * If `dialogName` defined: Save the specific dialog's options object.
     * * If `dialogName` undefined: Save the default dialog options object.
     *
     * If `options` is _not_ defined, no new dialog options object will be saved; but a previously saved preset will be returned (after mixing in the default preset if there is one).
     *
     * The default dialog options object is used in two ways:
     * * when a dialog has no options object
     * * as a mix-in base when a dialog does have an options object
     *
     * @param {string} [dialogName] If undefined, `options` defines the default dialog options object.
     *
     * @param {object} [options] If defined, preset the named dialog options object or the default dialog options object if name is undefined.
     *
     * @returns {object} One of:
     * * When `options` undefined, first of:
     *   * previous preset
     *   * default preset
     *   * empty object
     * * When `options` defined, first of:
     *   * mix-in: default preset members + `options` members
     *   * `options` verbatim when default preset undefined
     */
    setDialogOptions: function(dialogName, options) {
        if (typeof dialogName === 'object') {
            options = dialogName;
            dialogName = undefined;
        }
        var defaultOptions = this.dialogOptions.undefined;
        options = options || dialogName && this.dialogOptions[dialogName];
        if (options) {
            this.dialogOptions[dialogName] = options;
            if (defaultOptions) {
                options = _({}).extend(defaultOptions, options); // make a mix-in
            }
        } else {
            options = defaultOptions || {};
        }
        return options;
    },

    /**
     * Options objects are remembered for subsequent use. Alternatively, they can be preset by calling {@link Hypergrid#setDialogOptions|setDialogOptions}.
     * @param {string} dialogName
     * @param {object} [options] - If omitted, use the options object previously given here (or to {@link Hypergrid#setDialogOptions|setDialogOptions}), if any. In any case, the resultant options object, if any, is mixed into the default options object, if there is one.
     */
    openDialog: function(dialogName, options) {
        if (!this.abortEditing()) { return; }
        options = this.setDialogOptions(dialogName, options);
        options.terminate = function() { // when about-to-be-opened dialog is eventually closed
            delete this.dialog;
        }.bind(this);
        this.dialog = this.behavior.openDialog(dialogName, options);
    },

    // although you can have multiple dialogs open at the same time, the following enforces one at a time (for now)
    toggleDialog: function(newDialogName, options) {
        var dialog = this.dialog,
            oldDialogName = dialog && dialog.$$CLASS_NAME;
        if (!dialog || !this.dialog.close() && oldDialogName !== newDialogName) {
            if (!dialog) {
                // open new dialog now
                this.openDialog(newDialogName, options);
            } else {
                // open new dialog when already-opened dialog finishes closing due to .closeDialog() above
                dialog.terminate = this.openDialog.bind(this, newDialogName, options);
            }
        }
    }
});

function findOrCreateContainer(boundingRect) {
    var div = document.getElementById('hypergrid'),
        used = div && !div.firstElementChild;

    if (!used) {
        div = document.createElement('div');

        if (boundingRect) {
            ['width', 'height', 'position', 'top', 'bottom', 'left', 'right'].forEach(function(style) {
                if (boundingRect[style]) {
                    div.style[style] = boundingRect[style];
                }
            });
        }

        document.body.appendChild(div);
    }

    return div;
}


/**
 * @summary Update deep properties with new values.
 * @desc This function is a recursive property setter which updates a deep property in a destination object with the value of a congruent property in a source object.
 *
 * > Terminology: A deep property is a "terminal node" (primitive value) nested at some depth (i.e., depth > 1) inside a complex object (an object containing nested objects). A congruent property is a property in another object with the same name and at the same level of nesting.
 *
 * This function is simple and elegant. I recommend you study the code, which nonetheless implies all of the following:
 *
 * * If the deep property is _not_ found in `destination`, it will be created.
 * * If the deep property is found in `destination` _and_ is a primitive type, it will be modified (overwritten with the value from `source`).
 * * If the deep property is found in `destination` _but_ is not a primitive type (i.e., is a nested object), it will _also_ be overwritten with the (primitive) value from `source`.
 * * If the nested object the deep property inhabits in `source` is not found in `destination`, it will be created.
 * * If the nested object the deep property inhabits in `source` is found in `destination` but is not in fact an object (i.e., it is a primitive value), it will be overwritten with a reference to that object.
 * * If the primitive value is `undefined`, the destination property is deleted.
 * * `source` may contain multiple properties to update.
 *
 * That one rule is simply this: If both the source _and_ the destination properties are objects, then recurse; else overwrite the destination property with the source property.
 *
 * > Caveat: This is _not_ equivalent to a deep extend function. While both a deep extend and this function will recurse over a complex object, they are fundamentally different: A deep extend clones the nested objects as it finds them; this function merely updates them (or creates them where they don't exist).
 *
 * @param {object} destination - An object to update with new or modified property values
 * @param {object} source - A congruent object continaly (only) the new or modified property values.
 * @returns {object} Always returns `destination`.
 */
function addDeepProperties(destination, source) {
    _(source).each(function(property, key) {
        if (typeof destination[key] === 'object' && typeof property === 'object') {
            addDeepProperties(destination[key], property);
        } else if (property === undefined) {
            delete destination[key];
        } else {
            destination[key] = property;
        }
    });
    return destination;
}

function normalizeRect(rect) {
    var o = rect.origin,
        c = rect.corner,

        ox = Math.min(o.x, c.x),
        oy = Math.min(o.y, c.y),

        cx = Math.max(o.x, c.x),
        cy = Math.max(o.y, c.y);

    return new Rectangle(ox, oy, cx - ox, cy - oy);
}

function buildTheme(theme) {
    clearObjectProperties(theme);
    var pb = document.createElement('paper-button'); // styles were based on old polymer theme

    pb.style.display = 'none';
    pb.setAttribute('disabled', true);
    document.body.appendChild(pb);
    var p = window.getComputedStyle(pb);

    var section = document.createElement('section');
    section.style.display = 'none';
    section.setAttribute('hero', true);
    document.body.appendChild(section);

    var h = window.getComputedStyle(document.querySelector('html'));
    var hb = window.getComputedStyle(document.querySelector('html, body'));
    var s = window.getComputedStyle(section);

    theme.columnHeaderBackgroundColor = p.color;
    theme.rowHeaderBackgroundColor = p.color;
    theme.topLeftBackgroundColor = p.color;
    theme.lineColor = p.backgroundColor;

    theme.backgroundColor2 = hb.backgroundColor;

    theme.color = h.color;
    theme.fontFamily = h.fontFamily;
    theme.backgroundColor = s.backgroundColor;

    pb.setAttribute('disabled', false);
    pb.setAttribute('secondary', true);
    pb.setAttribute('raised', true);
    p = window.getComputedStyle(pb);

    theme.columnHeaderColor = p.color;
    theme.rowHeaderColor = p.color;
    theme.topLeftColor = p.color;


    theme.backgroundSelectionColor = p.backgroundColor;
    theme.foregroundSelectionColor = p.color;

    pb.setAttribute('secondary', false);
    pb.setAttribute('warning', true);

    theme.columnHeaderForegroundSelectionColor = p.color;
    theme.columnHeaderBackgroundSelectionColor = p.backgroundColor;
    theme.rowHeaderForegroundSelectionColor = p.color;
    theme.fixedColumnBackgroundSelectionColor = p.backgroundColor;

    //check if there is actually a theme loaded if not, clear out all bogus values
    //from my cache
    if (theme.columnHeaderBackgroundSelectionColor === 'rgba(0, 0, 0, 0)' ||
        theme.lineColor === 'transparent') {
        clearObjectProperties(theme);
    }

    document.body.removeChild(pb);
    document.body.removeChild(section);

    return theme;
}

function clearObjectProperties(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            delete obj[prop];
        }
    }
}

/**
 * @this {dataRowObject}
 * @param column
 * @returns {string}
 */
function valOrFunc(column) {
    var result, calculator;
    if (this) {
        result = this[column.name];
        calculator = (typeof result)[0] === 'f' && result || column.calculator;
        if (calculator) {
            result = calculator.call(this, column.name);
        }
    }
    return result || result === 0 || result === false ? result : '';
}

/**
 * @summary Hash of references to shared plug-ins.
 * @desc Dictionary of shared (pre-installed) plug-ins. Used internally, primarily to avoid reinstallations. See examples for how to reference (albeit there is normally no need to reference plugins directly).
 *
 * For the dictionary of _instance_ plugins, see {@link Hypergrid#plugins|plugins} (defined in the {@link Hypergrid#intialize|Hypergrid constructor}).
 *
 * To force reinstallation of a shared plugin delete it first:
 * ```javascript
 * delete Hypergrid.plugins.mySharedPlugin;
 * ```
 * To force reinstallation of all shared plugins:
 * ```javascript
 * Hypergrid.plugins = {};
 * ```
 * @example
 * var allSharedPlugins = Hypergrid.plugins;
 * var mySharedPlugin = Hypergrid.plugins.mySharedPlugin;
 * @type {object}
 */
Hypergrid.plugins = {};

/**
 * @summary Shared localization defaults for all grid instances.
 * @desc These property values are overridden by those supplied in the `Hypergrid` constructor's `options.localization`.
 * @property {string|string[]} [locale] - The default locale to use when an explicit `locale` is omitted from localizer constructor calls. Passed to Intl.NumberFormat` and `Intl.DateFormat`. See {@ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|Locale identification and negotiation} for more information. Omitting will use the runtime's local language and region.
 * @property {object} [numberOptions] - Options passed to `Intl.NumberFormat` for creating the basic "number" localizer.
 * @property {object} [dateOptions] - Options passed to `Intl.DateFormat` for creating the basic "date" localizer.
 * @type {object}
 */

Hypergrid.localization = {
    locale: 'en-US',
    numberOptions: { maximumFractionDigits: 0 }
};

module.exports = Hypergrid;

},{"./Base":49,"./behaviors/JSON":54,"./cellEditors":67,"./cellRenderers":77,"./defaults":86,"./lib/Localization":113,"./lib/Renderer":114,"./lib/SelectionModel":115,"./lib/polyfills":119,"./lib/stylesheet":120,"finbars":9,"fincanvas":10,"object-iterators":42,"rectangular":45}],51:[function(require,module,exports){
/* eslint-env browser */

'use strict';

// Only 1 choice from each block below should be exposed (uncommented):

module.exports = {

	analytics: require('hyper-analytics'), // npm
    // analytics: require('../../hyper-analytics'), // developer

};

},{"hyper-analytics":13}],52:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var _ = require('object-iterators');
var Point = require('rectangular').Point;

var Base = require('../Base');
var Column = require('./Column');
var cellEventFactory = require('./../lib/cellEventFactory');
var HeaderSubgrid = require('../dataModels/HeaderSubgrid');
var FilterSubgrid = require('../dataModels/FilterSubgrid');
var SummarySubgrid = require('../dataModels/SummarySubgrid');
var dialogs = require('../dialogs');

var noExportProperties = [
    'columnHeader',
    'columnHeaderColumnSelection',
    'filterProperties',
    'rowHeader',
    'rowHeaderRowSelection',
    'rowNumbersProperties',
    'treeColumnProperties',
    'treeColumnPropertiesColumnSelection',
];

var warned = {};

/**
 * @constructor
 * @abstract
 * @desc A sort of "model++." It contains all code/data that's necessary for easily implementing a virtual data source and its manipulation/analytics.
 *
 */
var Behavior = Base.extend('Behavior', {

    /**
     * @desc this is the callback for the plugin pattern of nested tags
     * @param {Hypergrid} grid
     * @param {object} [options] - _(See {@link behaviors.JSON#setData} for additional options.)_
     * @param {DataModels[]} [options.subgrids]
     * @memberOf Behavior.prototype
     */
    initialize: function(grid, options) {
        /**
         * @type {Hypergrid}
         * @memberOf Behavior.prototype
         */
        this.grid = grid;

        this.initializeFeatureChain(grid);

        this.grid.behavior = this;
        this.reset(options);
    },

    /**
     * @desc create the feature chain - this is the [chain of responsibility](http://c2.com/cgi/wiki?ChainOfResponsibilityPattern) pattern.
     * @param {Hypergrid} grid
     * @memberOf Behavior.prototype
     */
    initializeFeatureChain: function(grid) {
        var self = this;

        /**
         * @summary Hash of feature class names.
         * @desc Built here but otherwise not in use.
         * @type {object}
         * @memberOf Behavior.prototype
         */
        this.featureMap = {};

        this.features.forEach(function(FeatureConstructor) {
            var newFeature = new FeatureConstructor;
            self.featureMap[newFeature.$$CLASS_NAME] = newFeature;
            if (self.featureChain) {
                self.featureChain.setNext(newFeature);
            } else {
                /**
                 * @summary Controller chain of command.
                 * @desc Each feature is linked to the next feature.
                 * @type {Feature}
                 * @memberOf Behavior.prototype
                 */
                self.featureChain = newFeature;
            }
        });
        if (this.featureChain) {
            this.featureChain.initializeOn(grid);
        }
    },

    features: [], // override in implementing class unless no features

    reset: function(options) {
        this.clearState();

        if (this.dataModel) {
            this.dataModel.reset();
        } else {
            /**
             * @type {DataModel}
             * @memberOf Behavior.prototype
             */
            this.dataModel = this.getNewDataModel(options);
        }

        // recreate `CellEvent` class so it can set up its internal `grid`, `behavior`, and `dataModel` convenience properties
        this.CellEvent = cellEventFactory(this.grid);

        this.dataUpdates = {}; //for overriding with edit values;
        this.scrollPositionX = this.scrollPositionY = 0;
        this.clearColumns();
        this.clearState();
        this.createColumns();

        this.subgrids = options.subgrids || [
            HeaderSubgrid,
            FilterSubgrid,
            [SummarySubgrid, { name: 'topTotals' }],
            this.dataModel,
            [SummarySubgrid, { name: 'bottomTotals' }]
        ];
    },

    get renderedColumnCount() {
        return this.grid.renderer.visibleColumns.length;
    },

    get renderedRowCount() {
        return this.grid.renderer.visibleRows.length;
    },

    clearColumns: function() {
        /**
         * @type {Column[]}
         * @memberOf Behavior.prototype
         */
        this.columns = [];

        /**
         * @type {Column[]}
         * @memberOf Behavior.prototype
         */
        this.allColumns = [];

        this.allColumns[-1] = this.columns[-1] = this.newColumn({ index: -1 });
        this.allColumns[-2] = this.columns[-2] = this.newColumn({ index: -2 });

        this.columnEnum = {};
    },

    getActiveColumn: function(x) {
        return this.columns[x];
    },

    /**
     * The "grid index" given a "data index" (or column object)
     * @param {Column|number} columnOrIndex
     * @returns {undefined|number} The grid index of the column or undefined if column not in grid.
     */
    getActiveColumnIndex: function(columnOrIndex) {
        var index = columnOrIndex instanceof Column ? columnOrIndex.index : columnOrIndex;
        for (var i = 0; i < this.columns.length; ++i) {
            if (this.columns[i].index === index) {
                return i;
            }
        }
    },

    getVisibleColumn: function() {
        return this.deprecated('getVisibleColumn(x)', 'getActiveColumn(x)', '1.0.6', arguments);
    },
    getVisibleColumnName: function() {
        return this.deprecated('getVisibleColumnName(x)', 'getActiveColumn(x).name', '1.0.6', arguments);
    },
    getColumnId: function() {
        return this.deprecated('getColumnId(x)', 'getActiveColumn(x).header', '1.0.6', arguments);
    },
    getHeader: function() {
        return this.deprecated('getHeader(x)', 'getActiveColumn(x).header', '1.0.6', arguments);
    },

    getColumn: function(x) {
        return this.allColumns[x];
    },

    newColumn: function(options) {
        return new Column(this, options);
    },

    addColumn: function(options) {
        var column = this.newColumn(options);
        this.columns.push(column);
        this.allColumns.push(column);
        return column;
    },

    createColumns: function() {
        //concrete implementation here
    },

    getColumnWidth: function(x) {
        var column = this.getActiveColumn(x);
        if (!column) {
            return this.grid.properties.defaultColumnWidth;
        }
        var width = column.getWidth();
        return width;
    },

    setColumnWidth: function(x, width) {
        this.getActiveColumn(x).setWidth(width);
        this.stateChanged();
    },

    getCellRenderer: function(config, cellEvent) {
        return cellEvent.column.getCellRenderer(config, cellEvent);
    },
    getCellProvider: function(name) {
        return this.deprecated('getCellProvider()', 'grid.cellRenderers', '1.0.6', arguments);
    },
    createCellProvider: function(name) {
        console.error('getCellProvider() is deprecated as of v1.0.6. No replacement; do not call. Previously called by `Behavior` constructor; `new CellRenderers()` is now called by `Hypergrid` constructor instead.', arguments);
    },

    /**
     * @deprecated
     * @memberOf Behavior.prototype
     */
    applyAnalytics: function() {
        this.dataModel.reindex();
        this.shapeChanged();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc utility function to empty an object of its members
     * @param {object} obj - the object to empty
     * @param {boolean} [exportProps]
     * * `undefined` (omitted) - delete *all* properties
     * * **falsy** - delete *only* the export properties
     * * **truthy** - delete all properties *except* the export properties
     */
    clearObjectProperties: function(obj, exportProps) {
        for (var key in obj) {
            if (
                obj.hasOwnProperty(key) && (
                    exportProps === undefined ||
                    !exportProps && noExportProperties.indexOf(key) >= 0 ||
                    exportProps && noExportProperties.indexOf(key) < 0
                )
            ) {
                delete obj[key];
            }
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc getter for a [Memento](http://c2.com/cgi/wiki?MementoPattern) Object
     * @returns {object}
     */
    getPrivateState: function() {
        return this.deprecate('getPrivateState()', 'grid.properties', '1.2.0');
    },

    //this is effectively a clone, with certain things removed....
    getState: function() {
        var copy = JSON.parse(JSON.stringify(this.grid.properties));
        this.clearObjectProperties(copy.columnProperties, false);
        return copy;
    },
    /**
     * @memberOf Behavior.prototype
     * @desc clear all table state
     */
    clearState: function() {
        /**
         * memento for the user configured visual properties of the table
         * @type {object}
         * @memberOf Behavior.prototype
         */
        this.grid.properties = this.getDefaultState();
    },

    /**
     * @memberOf Behavior.prototype
     * @return {object} Newly created default empty tablestate.
     */
    getDefaultState: function() {
        var tableProperties = this.grid._getProperties();
        var state = Object.create(tableProperties);

        _(state).extendOwn({
            columnProperties: []
        });

        return state;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Restore this table to a previous state.
     * See the [memento pattern](http://c2.com/cgi/wiki?MementoPattern).
     * @param {Object} memento - an encapsulated representation of table state
     */
    setState: function(memento) {

        if (memento.rowHeights) {
            if (!warned.rowHeights) {
                warned.rowHeights = true;
                console.warn('rowHeights, the hash of row heights you provided to setState method, is no longer supported as of v1.2.0 and will be ignored. Instead use individual calls to setRowHeight(y, height, dataModel) for each row height you wish to set, where y is local zero-based row index within dataModel. The dataModel arg is optional and defaults to this.dataModel; specify to set row heights in other data models, such as header row, filter cell row, individual summary rows, etc.');
            }
        }

        //we don't want to clobber the column properties completely
        if (!memento.columnIndexes) {
            var length = this.dataModel.schema.length;
            memento.columnIndexes = [];
            for (var i = 0; i < length; i++) {
                memento.columnIndexes[i] = i;
            }
        }
        var colProperties = memento.columnProperties;
        delete memento.columnProperties;
        this.clearState();
        var state = this.grid.properties;
        this.createColumns();
        this._setColumnOrder(memento.columnIndexes);
        _(state).extendOwn(memento);
        this.setAllColumnProperties(colProperties);
        memento.columnProperties = colProperties;

        //just to be close/ it's easier on the eyes
        this.setColumnWidth(-1, 24.193359375);
        this.dataModel.reindex();
    },

    setAllColumnProperties: function(properties) {
        properties = properties || [];
        for (var i = 0; i < properties.length; i++) {
            var current = this.grid.properties.columnProperties[i];
            this.clearObjectProperties(current, false);
            _(current).extendOwn(properties[i]);
        }
    },

    _setColumnOrder: function(columnIndexes) {
        if (Array.isArray(columnIndexes)){
            this.columns.length = columnIndexes.length;
            columnIndexes.forEach(function(index, i) {
                this.columns[i] = this.allColumns[index];
            }, this);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Rebuild the column order indexes
     * @param {Array} columnIndexes - list of column indexes
     * @param {Boolean} [silent=false] - whether to trigger column changed event
     */
    setColumnIndexes: function(columnIndexes, silent) {
        var tableState = this.grid.properties;
        this._setColumnOrder(columnIndexes);
        tableState.columnIndexes = columnIndexes;
        this.changed();
        if (!silent) {
            this.grid.fireSyntheticOnColumnsChangedEvent();
        }
    },

    /**
     * @summary Show inactive column(s) or move active column(s).
     *
     * @desc Adds one or several columns to the "active" column list.
     *
     * @param {boolean} [isActiveColumnIndexes=false] - Which list `columnIndexes` refers to:
     * * `true` - The active column list. This can only move columns around within the active column list; it cannot add inactive columns (because it can only refer to columns in the active column list).
     * * `false` - The full column list (as per column schema array). This inserts columns from the "inactive" column list, moving columns that are already active.
     *
     * @param {number|number[]} columnIndexes - Column index(es) into list as determined by `isActiveColumnIndexes`. One of:
     * * **Scalar column index** - Adds single column at insertion point.
     * * **Array of column indexes** - Adds multiple consecutive columns at insertion point.
     *
     * _This required parameter is promoted left one arg position when `isActiveColumnIndexes` omitted._
     *
     * @param {number} [referenceIndex=this.columns.length] - Insertion point, _i.e.,_ the element to insert before. A negative values skips the reinsert. Default is to insert new columns at end of active column list.
     *
     * _Promoted left one arg position when `isActiveColumnIndexes` omitted._
     *
     * @param {boolean} [allowDuplicateColumns=false] - Unless true, already visible columns are removed first.
     *
     * _Promoted left one arg position when `isActiveColumnIndexes` omitted + one position when `referenceIndex` omitted._
     *
     * @memberOf Behavior.prototype
     */
    showColumns: function(isActiveColumnIndexes, columnIndexes, referenceIndex, allowDuplicateColumns) {
        // Promote args when isActiveColumnIndexes omitted
        if (typeof isActiveColumnIndexes === 'number' || Array.isArray(isActiveColumnIndexes)) {
            allowDuplicateColumns = referenceIndex;
            referenceIndex = columnIndexes;
            columnIndexes = isActiveColumnIndexes;
            isActiveColumnIndexes = false;
        }

        var activeColumns = this.columns,
            sourceColumnList = isActiveColumnIndexes ? activeColumns : this.allColumns;

        // Nest scalar index
        if (typeof columnIndexes === 'number') {
            columnIndexes = [columnIndexes];
        }

        var newColumns = columnIndexes
            // Look up columns using provided indexes
            .map(function(index) { return sourceColumnList[index]; })
            // Remove any undefined columns
            .filter(function(column) { return column; });

        // Default insertion point is end (i.e., before (last+1)th element)
        if (typeof referenceIndex !== 'number') {
            allowDuplicateColumns = referenceIndex; // assume reference index was omitted when not a number
            referenceIndex = activeColumns.length;
        }

        // Remove already visible columns and adjust insertion point
        if (!allowDuplicateColumns) {
            newColumns.forEach(function(column) {
                var i = activeColumns.indexOf(column);
                if (i >= 0) {
                    activeColumns.splice(i, 1);
                    if (referenceIndex > i) {
                        --referenceIndex;
                    }
                }
            });
        }

        // Insert the new columns at the insertion point
        if (referenceIndex >= 0) {
            activeColumns.splice.apply(activeColumns, [referenceIndex, 0].concat(newColumns));
        }

        this.grid.properties.columnIndexes = activeColumns.map(function(column) { return column.index; });
    },

    /**
     * @summary Hide active column(s).
     * @desc Removes one or several columns from the "active" column list.
     * @param {boolean} [isActiveColumnIndexes=false] - Which list `columnIndexes` refers to:
     * * `true` - The active column list.
     * * `false` - The full column list (as per column schema array).
     * @param {number|number[]} columnIndexes - Column index(es) into list as determined by `isActiveColumnIndexes`. One of:
     * * **Scalar column index** - Adds single column at insertion point.
     * * **Array of column indexes** - Adds multiple consecutive columns at insertion point.
     *
     * _This required parameter is promoted left one arg position when `isActiveColumnIndexes` omitted._
     * @memberOf Behavior.prototype
     */
    hideColumns: function(isActiveColumnIndexes, columnIndexes) {
        var args = Array.prototype.slice.call(arguments); // Convert to array so we can add an argument (element)
        args.push(-1); // Remove only; do not reinsert.
        this.showColumns.apply(this, args);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc fetch the value for a property key
     * @returns {*} The value of the given property.
     * @param {string} key - a property name
     */
    resolveProperty: function(key) {
        // todo: remove when we remove the deprecated grid.resolveProperty
        return this.grid.resolveProperty(key);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc A specific cell was clicked; you've been notified.
     * @param {Object} event - all event information
     * @return {boolean} Clicked in a drill-down column.
     */
    cellClicked: function(event) {
        if (arguments.length === 2) {
            return this.deprecated('cellClicked(cell, event)', 'cellClicked(event)', '1.2.0', arguments);
        }
        return this.dataModel.cellClicked(event);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc A specific cell was le double-clicked; you've been notified.
     * @param {Point} cell - point of cell coordinates
     * @param {Object} event - all event information
     */
    cellDoubleClicked: function(cell, event) {

    },

    lookupFeature: function(key) {
        return this.featureMap[key];
    },

    /**
     * @param {CellEvent|number} xOrCellEvent - Grid column coordinate.
     * @param {number} [y] - Grid row coordinate. Omit if `xOrCellEvent` is a CellEvent.
     * @memberOf Behavior.prototype
     */
    getValue: function(xOrCellEvent, y) {
        switch (arguments.length) {
            case 1:
                return xOrCellEvent.value;
            case 2:
                return new this.CellEvent(xOrCellEvent, y).value;
        }
    },

    getUnfilteredValue: function(x, y) {
        var column = this.getActiveColumn(x);
        return column && column.getUnfilteredValue(y);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc update the data at point x, y with value
     * @return The data.
     * @param {CellEvent|number} xOrCellEvent - Grid column coordinate.
     * @param {number} [y] - Grid row coordinate. Omit if `xOrCellEvent` is a CellEvent.
     * @param {Object} value - The value to use. _When `y` omitted, promoted to 2nd arg._
     * @return {boolean} Consumed.
     */
    setValue: function(xOrCellEvent, y, value) {
        switch (arguments.length) {
            case 3: xOrCellEvent = new this.CellEvent(xOrCellEvent, y); break;
            case 2: value = y; break;
        }

        xOrCellEvent.value = value;
    },

    getDataValue: function(x, y) {
        return this.deprecated('getDataValue(x, y, value)', 'dataModel.getValue(x, y, value)', '1.1.0', arguments);
    },

    setDataValue: function(x, y, value) {
        return this.deprecated('setDataValue(x, y, value)', 'dataModel.setValue(x, y, value)', '1.1.0', arguments);
    },

    /**
     * @summary Get the cell's own properties object.
     * @desc May be undefined because cells only have their own properties object when at lest one own property has been set.
     * @param {CellEvent|number} xOrCellEvent - Data x coordinate.
     * @param {number} [y] - Grid row coordinate. _Omit when `xOrCellEvent` is a `CellEvent`._
     * @returns {undefined|object} The "own" properties of the cell at x,y in the grid. If the cell does not own a properties object, returns `undefined`.
     * @memberOf Behavior.prototype
     */
    getCellOwnProperties: function(xOrCellEvent, y) {
        switch (arguments.length) {
            case 1:
                return xOrCellEvent.column // xOrCellEvent is cellEvent
                    .getCellOwnProperties(xOrCellEvent.dataCell.y, xOrCellEvent.visibleRow.subgrid);
            case 2:
                return this.getColumn(xOrCellEvent) // xOrCellEvent is x
                    .getCellOwnProperties(y);
        }
    },

    /**
     * @summary Get the properties object for cell.
     * @desc This is the cell's own properties object if found else the column object.
     *
     * If you are seeking a single specific property, consider calling {@link Behavior#getCellProperty} instead.
     * @param {CellEvent|number} xOrCellEvent - Data x coordinate.
     * @param {number} [y] - Grid row coordinate. _Omit when `xOrCellEvent` is a `CellEvent`._
     * @return {object} The properties of the cell at x,y in the grid.
     * @memberOf Behavior.prototype
     */
    getCellProperties: function(xOrCellEvent, y) {
        switch (arguments.length) {
            case 1:
                return xOrCellEvent.column // xOrCellEvent is cellEvent
                    .getCellProperties(xOrCellEvent.dataCell.y, xOrCellEvent.visibleRow.subgrid);
            case 2:
                return this.getColumn(xOrCellEvent) // xOrCellEvent is x
                    .getCellProperties(y);
        }
    },

    /**
     * @summary Return a specific cell property.
     * @desc If there is no cell properties object, defers to column properties object.
     * @param {CellEvent|number} xOrCellEvent - Data x coordinate.
     * @param {number} [y] - Grid row coordinate._ Omit when `xOrCellEvent` is a `CellEvent`._
     * @param {string} key - Name of property to get. _When `y` omitted, this param promoted to 2nd arg._
     * @return {object} The specified property for the cell at x,y in the grid.
     * @memberOf Behavior.prototype
     */
    getCellProperty: function(xOrCellEvent, y, key) {
        switch (arguments.length) {
            case 2:
                return xOrCellEvent.column // xOrCellEvent is cellEvent
                    .getCellProperty(xOrCellEvent.dataCell.y, y, xOrCellEvent.visibleRow.subgrid); // y omitted so y here is actually key
            case 3:
                return this.getColumn(xOrCellEvent) // xOrCellEvent is x
                    .getCellProperty(y, key);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc update the data at point x, y with value
     * @param {CellEvent|number} xOrCellEvent - Data x coordinate.
     * @param {number} [y] - Grid row coordinate. _Omit when `xOrCellEvent` is a `CellEvent`._
     * @param {Object} properties - Hash of cell properties. _When `y` omitted, this param promoted to 2nd arg._
     */
    setCellProperties: function(xOrCellEvent, y, properties) {
        if (typeof y === 'object') {
            xOrCellEvent.column // xOrCellEvent is cellEvent
                .setCellProperties(xOrCellEvent.dataCell.y, y, xOrCellEvent.visibleRow.subgrid); // y omitted so y here is actually properties
        } else {
            this.getColumn(xOrCellEvent) // xOrCellEvent is x
                .setCellProperties(y, properties);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc update the data at point x, y with value
     * @param {CellEvent|number} xOrCellEvent - Data x coordinate.
     * @param {number} [y] - Grid row coordinate. _Omit when `xOrCellEvent` is a `CellEvent`._
     * @param {Object} properties - Hash of cell properties. _When `y` omitted, this param promoted to 2nd arg._
     */
    addCellProperties: function(xOrCellEvent, y, properties) {
        if (typeof y === 'object') {
            xOrCellEvent.column // xOrCellEvent is cellEvent
                .addCellProperties(xOrCellEvent.dataCell.y, y, xOrCellEvent.visibleRow.subgrid); // y omitted so y here is actually properties
        } else {
            this.getColumn(xOrCellEvent) // xOrCellEvent is x
                .addCellProperties(y, properties);
        }
    },

    /**
     * @summary Set a specific cell property.
     * @desc If there is no cell properties object, defers to column properties object.
     * @param {CellEvent|number} xOrCellEvent - Data x coordinate.
     * @param {number} [y] - Grid row coordinate. _Omit when `xOrCellEvent` is a `CellEvent`._
     * @param {string} key - Name of property to get. _When `y` omitted, this param promoted to 2nd arg._
     * @param value
     * @memberOf Behavior.prototype
     */
    setCellProperty: function(xOrCellEvent, y, key, value) {
        switch (arguments.length) {
            case 3:
                return xOrCellEvent.column // xOrCellEvent is cellEvent
                    .setCellProperty(xOrCellEvent.dataCell.y, y, key, xOrCellEvent.visibleRow.subgrid); // y omitted so y here is actually key and key is actually value
            case 4:
                return this.getColumn(xOrCellEvent) // xOrCellEvent is x
                    .setCellProperty(y, key, value);
        }
    },

    /**
     * @summary Gets the number of rows in the hypergrid.
     * @dsc Defined as the sum of all rows from all subgrids.
     * @memberOf Behavior.prototype
     */
    getRowCount: function() {
        return this.subgrids.reduce(function(sum, subgrid) {
            return sum + subgrid.getRowCount();
        }, 0);
    },

    getUnfilteredRowCount: function() {
        return this.deprecated('getUnfilteredRowCount()', null, '1.2.0', arguments, 'No longer supported');
    },

    /**
     * @memberOf Behavior.prototype
     * @return {number} The height in pixels of the fixed rows area  of the hypergrid.
     */
    getFixedRowsHeight: function() {
        var count = this.getFixedRowCount();
        var total = 0;
        for (var i = 0; i < count; i++) {
            total += this.getRowHeight(i);
        }
        return total;
    },

    /**
     * @memberOf Behavior.prototype
     * @param {number} rowIndex - Data row coordinate local to datsModel.
     * @param {DataModel} [dataModel=this.dataModel]
     */
    getRowHeight: function(rowIndex, dataModel) {
        var rowData = (dataModel || this.dataModel).getRow(rowIndex);
        return rowData && rowData.__ROW_HEIGHT || this.grid.properties.defaultRowHeight;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc The value is lazily initialized and comes from the properties mechanism for '`defaultRowHeight`', which should be ~20px.
     * @returns {number} The row height in pixels.
     */
    getDefaultRowHeight: function() {
        return this.deprecated('getDefaultRowHeight', 'grid.properties.defaultRowHeight', '1.2.0');
    },

    /**
     * @memberOf Behavior.prototype
     * @desc set the pixel height of a specific row
     * @param {number} rowIndex - Data row coordinate local to datsModel.
     * @param {number} height - pixel height
     * @param {DataModel} [dataModel=this.dataModel]
     */
    setRowHeight: function(rowIndex, height, dataModel) {
        var rowData = (dataModel || this.dataModel).getRow(rowIndex);
        if (rowData) {
            rowData.__ROW_HEIGHT = Math.max(5, height);
            this.stateChanged();
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc This will allow 'floating' fixed rows.
     * @return {number} The maximum height of the fixed rows area in the hypergrid.
     */
    getFixedRowsMaxHeight: function() {
        return this.getFixedRowsHeight();
    },

    /**
     * @memberOf Behavior.prototype
     * @return {number} The width of the fixed column area in the hypergrid.
     */
    getFixedColumnsWidth: function() {
        var count = this.getFixedColumnCount();
        var total = 0;
        if (this.grid.isShowRowNumbers()) {
            total = this.getColumnWidth(-1);
        }
        for (var i = 0; i < count; i++) {
            total += this.getColumnWidth(i);
        }
        return total;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc This exists to support "floating" columns.
     * @return {number} The total width of the fixed columns area.
     */
    getFixedColumnsMaxWidth: function() {
        return this.getFixedColumnsWidth();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the scroll position in vertical dimension and notify listeners.
     * @param {number} y - the new y value
     */
    _setScrollPositionY: function(y) {
        this.setScrollPositionY(y);
        this.changed();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the scroll position in horizontal dimension and notify listeners.
     * @param {number} x - the new x value
     */
    _setScrollPositionX: function(x) {
        this.setScrollPositionX(x);
        this.changed();
    },

    /**
     * @memberOf Behavior.prototype
     * @desc The fixed row area has been clicked, massage the details and call the real function.
     * @param {Hypergrid} grid
     * @param {Object} mouse - event details
     */
    _fixedRowClicked: function(grid, mouse) {
        var x = this.translateColumnIndex(this.getScrollPositionX() + mouse.gridCell.x - this.getFixedColumnCount());
        var translatedPoint = new Point(x, mouse.gridCell.y);
        mouse.gridCell = translatedPoint;
        this.fixedRowClicked(grid, mouse);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc The fixed column area has been clicked, massage the details and call the real function.
     * @param {Hypergrid} grid
     * @param {Object} mouse - event details
     */
    _fixedColumnClicked: function(grid, mouse) {
        var translatedPoint = new Point(mouse.gridCell.x, this.getScrollPositionY() + mouse.gridCell.y - this.getFixedRowCount());
        mouse.gridCell = translatedPoint;
        this.fixedColumnClicked(grid, mouse);
    },

    moveSingleSelect: function(grid, x, y) {
        if (this.featureChain) {
            this.featureChain.moveSingleSelect(grid, x, y);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate setting the cursor up the feature chain of responsibility
     * @param {Hypergrid} grid
     */
    setCursor: function(grid) {
        grid.updateCursor();
        this.featureChain.setCursor(grid);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse move to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onMouseMove: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseMove(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling tap to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onClick: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleClick(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling tap to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onContextMenu: function(grid, event) {
        var proceed = grid.fireSyntheticContextMenuEvent(event);
        if (proceed && this.featureChain) {
            this.featureChain.handleContextMenu(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling wheel moved to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onWheelMoved: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleWheelMoved(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse up to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onMouseUp: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseUp(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse drag to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onMouseDrag: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseDrag(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling key down to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onKeyDown: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleKeyDown(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling key up to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onKeyUp: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleKeyUp(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling double click to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    onDoubleClick: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleDoubleClick(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling double click to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {string[]} [options] - Forwarded to dialog constructor.
     */
    openDialog: function(dialogName, options) {
        return new dialogs[dialogName](this.grid, options);
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse down to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseDown(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc delegate handling mouse exit to the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseExit: function(grid, event) {
        if (this.featureChain) {
            this.featureChain.handleMouseExit(grid, event);
            this.setCursor(grid);
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @desc I've been notified that the behavior has changed.
     */
    changed: function() { this.grid.behaviorChanged(); },

    /**
     * @memberOf Behavior.prototype
     * @desc The dimensions of the grid data have changed. You've been notified.
     */
    shapeChanged: function() { this.grid.behaviorShapeChanged(); },

    /**
     * @memberOf Behavior.prototype
     * @desc The dimensions of the grid data have changed. You've been notified.
     */
    stateChanged: function() { this.grid.behaviorStateChanged(); },

    /**
     * @memberOf Behavior.prototype
     * @return {boolean} Can re-order columns.
     */
    isColumnReorderable: function() {
        return this.grid.properties.columnsReorderable;
    },

    /**
     * @param {index} x - Data x coordinate.
     * @return {Object} The properties for a specific column.
     * @memberOf Behavior.prototype
     */
    getColumnProperties: function(x) {
        var column = this.getColumn(x);
        return column && column.properties;
    },

    /**
     * @param {index} x - Data x coordinate.
     * @return {Object} The properties for a specific column.
     * @memberOf Behavior.prototype
     */
    setColumnProperties: function(x, properties) {
        var column = this.getColumn(x);
        if (!column) {
            throw 'Expected column.';
        }
        var result = _(column.properties).extendOwn(properties);
        this.changed();
        return result;
    },

    /**
     * Clears all cell properties of given column or of all columns.
     * @param {number} [x] - Omit for all columns.
     */
    clearAllCellProperties: function(x) {
        if (x === undefined) {
            // todo: More efficient might be to undefine `dataModel.getData(*).__META`.
            for (var i = this.allColumns.length - 1; i >= 0; --i) {
                this.getColumn(i).clearAllCellProperties();
            }
        } else {
            var column = this.getColumn(i);
            if (column) {
                column.clearAllCellProperties();
            }
        }
    },

    /**
     * @memberOf Behavior.prototype
     * @return {string[]} All the currently hidden column header labels.
     */
    getHiddenColumnDescriptors: function() {
        var tableState = this.grid.properties;
        var indexes = tableState.columnIndexes;
        var labels = [];
        var columnCount = this.getActiveColumnCount();
        for (var i = 0; i < columnCount; i++) {
            if (indexes.indexOf(i) === -1) {
                var column = this.getActiveColumn(i);
                labels.push({
                    id: i,
                    header: column.header,
                    field: column.name
                });
            }
        }
        return labels;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {integer} The number of fixed columns.
     */
    getFixedColumnCount: function() {
        return this.grid.properties.fixedColumnCount;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc set the number of fixed columns
     * @param {number} n - the integer count of how many columns to be fixed
     */
    setFixedColumnCount: function(n) {
        this.grid.properties.fixedColumnCount = n;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {integer} The number of fixed rows.
     */
    getFixedRowCount: function() {
        return (
            this.grid.getHeaderRowCount() +
            this.grid.properties.fixedRowCount
        );
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Set the number of fixed rows, which includes (top to bottom order):
     * 1. The header rows
     *    1. The header labels row (optional)
     *    2. The filter row (optional)
     *    3. The top total rows (0 or more)
     * 2. The non-scrolling rows (externally called "the fixed rows")
     *
     * @returns {number} Sum of the above or 0 if none of the above are in use.
     *
     * @param {number} The number of rows.
     */
    setFixedRowCount: function(n) {
        this.grid.properties.fixedRowCount = n;
    },

    /**
     * @summary Gets the number of "header rows".
     * @desc Defined as the sum of all rows of all subgrids before the (first) data subgrid.
     * @memberOf behaviors.JSON.prototype
     */
    getHeaderRowCount: function() {
        var result = 0;

        this.subgrids.find(function(subgrid) {
            if (!subgrid.type) {
                return true; // stop
            }
            result += subgrid.getRowCount();
        });

        return result;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc a dnd column has just been dropped, we've been notified
     */
    endDragColumnNotification: function() {},

    /**
     * @memberOf Behavior.prototype
     * @return {null} the cursor at a specific x,y coordinate
     * @param {number} x - the x coordinate
     * @param {number} y - the y coordinate
     */
    getCursorAt: function(x, y) {
        return null;
    },

    /**
     * Number of _visible_ columns.
     * @memberOf Behavior.prototype
     * @return {number} The total number of columns.
     */
    getActiveColumnCount: function() {
        return this.columns.length;
    },
    getColumnCount: function() {
        return this.deprecated('getColumnCount()', 'getActiveColumnCount()', '1.0.6', arguments);
    },

    /**
     * @summary Column alignment of given grid column.
     * @desc One of:
     * * `'left'`
     * * `'center'`
     * * `'right'`
     *
     * Cascades to grid.
     * @memberOf Behavior.prototype
     * @desc Quietly set the horizontal scroll position.
     * @param {number} x - The new position in pixels.
     */
    setScrollPositionX: function(x) {
        /**
         * @memberOf Behavior.prototype
         * @type {number}
         */
        this.scrollPositionX = x;
    },

    getScrollPositionX: function() {
        return this.scrollPositionX;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc Quietly set the vertical scroll position.
     * @param {number} y - The new position in pixels.
     */
    setScrollPositionY: function(y) {
        /**
         * @memberOf Behavior.prototype
         * @type {number}
         */
        this.scrollPositionY = y;
    },

    getScrollPositionY: function() {
        return this.scrollPositionY;
    },

    /**
     * @memberOf Behavior.prototype
     * @return {cellEditor} The cell editor for the cell at the given coordinates.
     * @param {CellEvent} editPoint - The grid cell coordinates.
     */
    getCellEditorAt: function(event) {
        return event.isGridColumn && (
            event.isFilterCell
                ? this.grid.cellEditors.create('filterbox', event)
                : event.column.getCellEditorAt(event)
        );
    },

    /**
     * @memberOf Behavior.prototype
     * @return {boolean} `true` if we should highlight on hover
     * @param {boolean} isColumnHovered - the column is hovered or not
     * @param {boolean} isRowHovered - the row is hovered or not
     */
    highlightCellOnHover: function(isColumnHovered, isRowHovered) {
        return isColumnHovered && isRowHovered;
    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellPropertiesPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a fixed row cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellFixedRowPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a fixed column cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellFixedColumnPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function is a hook and is called just before the painting of a top left cell occurs
     * @param {window.fin.rectangular.Point} cell
     */
    cellTopLeftPrePaintNotification: function(cell) {

    },

    /**
     * @memberOf Behavior.prototype
     * @desc this function enhance the double click event just before it's broadcast to listeners
     * @param {Object} event - event to enhance
     */
    enhanceDoubleClickEvent: function(event) {},

    /**
     * @memberOf Behavior.prototype
     * @desc swap src and tar columns
     * @param {number} src - column index
     * @param {number} tar - column index
     */
    swapColumns: function(source, target) {
        var columns = this.columns;
        var tmp = columns[source];
        columns[source] = columns[target];
        columns[target] = tmp;
        this.changed();
    },

    getColumnEdge: function(c, renderer) {
        return this.dataModel.getColumnEdge(c, renderer);
    },

    /**
     * @memberOf Behavior.prototype
     * @return {object} The object at y index.
     * @param {number} y - the row index of interest
     */
    getRow: function(y) {
        return this.dataModel.getRow(y);
    },

    convertViewPointToDataPoint: function(unscrolled) {
        return new Point(
            this.getActiveColumn(unscrolled.x).index,
            unscrolled.y
        );
    },

    hasHierarchyColumn: function() {
        return false;
    },

    getSelectionMatrixFunction: function(selectedRows) {
        return function() {
            return null;
        };
    },

    autosizeAllColumns: function() {
        this.checkColumnAutosizing(true);
        this.changed();
    },

    checkColumnAutosizing: function(force) {
        force = force === true;
        this.autoSizeRowNumberColumn();
        var autoSized = this.allColumns[-2].checkColumnAutosizing(force);
        this.allColumns.forEach(function(column) {
            autoSized = column.checkColumnAutosizing(force) || autoSized;
        });
        return autoSized;
    },

    autoSizeRowNumberColumn: function() {
        if (this.grid.isRowNumberAutosizing()) {
            this.allColumns[-1].checkColumnAutosizing(true);
        }
    },

    /**
     * @summary _Getter_
     * @method
     * @returns {dataSourceHelperAPI} The grid's currently assigned filter.
     * @memberOf Behavior.prototype
     */
    get filter() {
        return this.dataModel.filter;
    },

    /**
     * @summary _Setter:_ Assign a filter to the grid.
     * @method
     * @param {dataSourceHelperAPI|undefined|null} filter - One of:
     * * A filter object, turning filter *ON*.
     * * If `undefined` or `null`, the null filter is reassigned to the grid, turning filtering *OFF*.
     * @memberOf Behavior.prototype
     */
    set filter(filter) {
        this.dataModel.filter = filter;
    },

    /**
     * @summary _Getter_
     * @method
     * @returns {sorterAPI} The grid's currently assigned sorter.
     * @memberOf dataModels.JSON.prototype
     */
    get sorter() {
        return this.dataModel.sorter;
    },

    /**
     * @summary _Setter:_ Assign a sorter to the grid.
     * @method
     * @param {sorterAPI|undefined|null} sorter - One of:
     * * A sorter object, turning sorting *ON*.
     * * If `undefined` or `null`, the {@link dataModels.JSON~nullSorter|nullSorter} is reassigned to the grid, turning sorting *OFF.*
     * @memberOf Hypergrid.prototype
     */
    set sorter(sorter) {
        this.dataModel.sorter = sorter;
    },

    getSelectedRows: function() {
        return this.grid.selectionModel.getSelectedRows();
    },

    getSelectedColumns: function() {
        return this.grid.selectionModel.getSelectedColumns();
    },

    getSelections: function() {
        return this.grid.selectionModel.getSelections();
    },

    getData: function() {
        return this.dataModel.getData();
    },

    getFilteredData: function() {
        return this.deprecated('getIndexedData()', 'getIndexedData', '1.2.0', arguments);
    },
    getIndexedData: function() {
       this.dataModel.getIndexedData();
    },

    /**
     * An array where each element represents a subgrid to be rendered in the hypergrid.
     *
     * The list should always include at least one "data" subgrid, typically {@link Behavior#dataModel|dataModel}.
     * It may also include zero or more other types of subgrids such as header, filter, and summary subgrids.
     *
     * This object also serves as a dictionary of selected subgrids by name (i.e., for those subgrids that have a defined property `name`).
     *
     * The setter:
     * * "Enlivens" any constructors
     * * Reconstructs the dictionary
     * * Calls {@link Behavior#shapeChanged|shpaeChanged()}.
     *
     * @type {DataModel[]}
     * @memberOf Behavior.prototype
     */
    set subgrids(subgrids) {
        this._subgrids = subgrids = subgrids.map(enlivenSubgrids, this);

        subgrids.forEach(function(subgrid) {
            subgrids[subgrid.name || subgrid.type || 'data'] = subgrid;
        });

        this.shapeChanged();
    },
    get subgrids() {
        return this._subgrids;
    }
});

/**
 *
 * @param {DataModel|Array|function|undefined|null} [subgridSpec] - One of:
 * * `DataModel` - Mapped to self (passed through as is).
 * * `Array` - Mapped to newly instantiated data model: First element is assumed to be a `DataModel` constructor to be called with `new` keyword and `this.grid` as first arg and remaining elements as additional args.
 * * function - Mapped to newly instantiated data model: A `DataModel` constructor to be called with `new` keyword and `this.grid` as only arg.
 * * Falsy value - Mapped to the behavior's data model (`this.dataModel`).
 * @returns {DataModel}
 */
function enlivenSubgrids(dataModel) {
    if (!dataModel) {
        dataModel = this.dataModel;
    } else if (dataModel instanceof Array && dataModel.length) {
        var Constructor = dataModel[0],
            args = dataModel.slice(1);
        dataModel = new (Function.prototype.bind.apply(Constructor, [null, this.grid].concat(args)));
    } else if (typeof dataModel === 'function') {
        dataModel = new dataModel(this.grid); // eslint-disable-line new-cap
    }
    return dataModel;
}

/**
 * @memberOf Behavior.prototype
 */
Behavior.prototype.reindex = Behavior.prototype.applyAnalytics;

module.exports = Behavior;

},{"../Base":49,"../dataModels/FilterSubgrid":79,"../dataModels/HeaderSubgrid":80,"../dataModels/SummarySubgrid":82,"../dialogs":90,"./../lib/cellEventFactory":116,"./Column":53,"object-iterators":42,"rectangular":45}],53:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var overrider = require('overrider');

var deprecated = require('../lib/deprecated');
var HypergridError = require('../lib/error');

var warned = {};

/** @summary Create a new `Column` object.
 * @see {@link module:Cell} is mixed into Column.prototype.
 * @constructor
 * @param behavior
 * @param {number|string|object} indexOrOptions - One of:
 * * If a positive number, valid index into `fields` array.
 * * If a string, a name in the `fields` array.
 * * If an object, must contain either an `index` or a `name` property.
 *
 * Positive values of `index` are "real" fields; see also {@link Column#setProperties|setProperties} which is called to set the remaining properties specified in `options`.
 *
 * Negative values of `index` are special cases:
 * `index` | Meaning
 * :-----: | --------
 *    -1   | Row header column
 *    -2   | Tree (drill-down) column
 */
function Column(behavior, options) {
    var index, schema;

    this.behavior = behavior;
    this.dataModel = behavior.dataModel;

    schema = this.behavior.dataModel.schema;

    switch (typeof options) {
        case 'number':
            index = options;
            options = {};
            break;
        case 'string':
            index = getIndexFromName(options);
            options = {};
            break;
        case 'object':
            index = options.index !== undefined
                ? options.index
                : getIndexFromName(options.name);
    }

    function getIndexFromName(name) {
        return schema.findIndex(function(columnSchema, i) {
            return columnSchema.name === name;
        });
    }

    if (index === undefined) {
        throw 'Column not found in data.';
    }

    this._index = index;

    this.clearAllCellProperties();

    switch (index) {
        case -1:
        case -2:
            break;
        default:
            if (index < 0) {
                throw '`index` out of range';
            } else {
                this.properties = options;
            }
    }
}

Column.prototype = {
    constructor: Column.prototype.constructor,

    HypergridError: HypergridError,

    mixIn: overrider.mixIn,

    deprecated: deprecated,
    set: function(options) {
        return this.deprecated('set(options)', 'setProperties(options)', '1.2.0', arguments);
    },

    /**
     * @summary Index of this column in the `fields` array.
     * @returns {number}
     */
    get index() { // read-only (no setter)
        return this._index;
    },

    /**
     * @summary Name of this column from the `fields` array.
     * @returns {string}
     */
    get name() { // read-only (no setter)
        return this.dataModel.schema[this._index].name;
    },

    /**
     * @summary Get or set the text of the column's header.
     * @desc The _header_ is the label at the top of the column.
     *
     * Setting the header updates both:
     * * the `fields` (aka, header) array in the underlying data source; and
     * * the filter.
     * @type {string}
     */
    set header(headerText) {
        this.dataModel.schema[this.index].header = headerText;
        this.behavior.filter.prop(this.index, 'header', headerText);
        this.behavior.grid.repaint();
    },
    get header() {
        return this.dataModel.schema[this.index].header;
    },

    /**
     * @summary Get or set the computed column's calculator function.
     * @desc Setting the value here updates the calculator in both:
     * * the `calculator` array in the underlying data source; and
     * * the filter.
     *
     * The results of the new calculations will appear in the column cells on the next repaint.
     * @type {string}
     */
    set calculator(calculator) {
        var schema = this.dataModel.schema;
        if (calculator === undefined) {
            delete schema[this.index].calculator;
        } else {
            schema[this.index].calculator = calculator;
        }
        this.behavior.filter.prop(this.index, 'calculator', calculator);
        this.behavior.applyAnalytics();
    },
    get calculator() {
        return this.dataModel.schema[this.index].calculator;
    },

    /**
     * @summary Get or set the type of the column's header.
     * @desc Setting the type updates the filter which typically uses this information for proper collation.
     *
     * @todo: Instead of using `this._type`, put on data source like the other essential properties. In this case, sorter could use the info to choose a comparator more intelligently and efficiently.
     * @type {string}
     */
    set type(type) {
        this._type = type;
        //TODO: This is calling reindex for every column during grid init. Maybe defer all reindex calls until after an grid 'ready' event
        this.behavior.filter.prop(this.index, 'type', type);
        this.behavior.sorter.prop(this.index, 'type', type);
        this.behavior.reindex();
    },
    get type() {
        return this._type;
    },

    getUnfilteredValue: function(y) {
        return this.deprecated('getUnfilteredValue(y)', null, '1.2.0', arguments, 'No longer supported');
    },

    getValue: function(y) {
        return this.dataModel.getValue(this.index, y);
    },

    setValue: function(y, value) {
        return this.dataModel.setValue(this.index, y, value);
    },

    getWidth: function() {
        return this.properties && this.properties.width || this.behavior.grid.properties.defaultColumnWidth;
    },

    setWidth: function(width) {
        this.properties.width = Math.max(5, width);
    },

    getCellRenderer: function(config, cellEvent) {
        config.untranslatedX = cellEvent.gridCell.x;
        config.y = cellEvent.gridCell.y;

        config.x = this.index;
        config.normalizedY = cellEvent.dataCell.y;

        return this.dataModel.getCell(config, cellEvent.getCellProperty('renderer'));
    },

    checkColumnAutosizing: function(force) {
        var properties = this.properties;
        var a, b, d, autoSized;
        if (properties) {
            a = properties.width;
            b = properties.preferredWidth || a;
            d = properties.columnAutosized && !force;
            if (a !== b || !d) {
                properties.width = !d ? b : Math.max(a, b);
                properties.columnAutosized = !isNaN(properties.width);
                autoSized = properties.width !== a;
            }
        }
        return autoSized;
    },

    getCellType: function(y) {
        var value = this.getValue(y);
        return this.typeOf(value);
    },

    getType: function() {
        var props = this.properties;
        var type = props.type;
        if (!type) {
            type = this.computeColumnType();
            if (type !== 'unknown') {
                props.type = type;
            }
        }
        return type;
    },

    computeColumnType: function() {
        var headerRowCount = this.behavior.getHeaderRowCount();
        var height = this.behavior.getRowCount();
        var value = this.getValue(headerRowCount);
        var eachType = this.typeOf(value);
        if (!eachType) {
            return 'unknown';
        }
        var type = this.typeOf(value);
        //var isNumber = ((typeof value) === 'number');
        for (var y = headerRowCount; y < height; y++) {
            value = this.getValue(y);
            eachType = this.typeOf(value);
            // if (type !== eachType) {
            //     if (isNumber && (typeof value === 'number')) {
            //         type = 'float';
            //     } else {
            //         return 'mixed';
            //     }
            // }
        }
        return type;
    },

    typeOf: function(something) {
        if (something == null) {
            return null;
        }
        var typeOf = typeof something;
        switch (typeOf) {
            case 'object':
                return something.constructor.name.toLowerCase();
            case 'number':
                return parseInt(something) === something ? 'int' : 'float';
            default:
                return typeOf;
        }
    },

    get properties() {
        var tableState = this.behavior.grid.properties,
            result = tableState.columnProperties[this.index];

        if (!result) {
            result = tableState.columnProperties[this.index] = this.createColumnProperties();
        }

        return result;
    },
    set properties(properties) {
        var key, descriptor, obj = this.properties;

        for (key in obj) {
            descriptor = Object.getOwnPropertyDescriptor(obj, key);
            if (!descriptor || descriptor.configurable) {
                delete obj[key];
            }
        }

        this.addProperties(properties);
    },

    getProperties: function() {
        return this.deprecated('getProperties()', 'properties', '1.2.0');
    },

    /**
     * @param {object} properties
     * @param {boolean} [preserve=false]
     */
    setProperties: function(properties, preserve) {
        if (!preserve) {
            if (!warned.setProperties) {
                warned.setProperties = true;
                console.warn('setProperties(properties) has been deprecated in favor of properties (setter) as of v1.2.0 and will be removed in a future version. This advice only pertains to usages of setProperties when called with a single parameter. When called with a truthy second parameter, use the new addProperties(properties) call instead.');
            }
            this.properties = properties;
        } else {
            this.deprecated('setProperties(properties, preserve)', 'addProperties(properties)', '1.2.0', arguments, 'This warning pertains to setProperties only when preserve is truthy. When preserve is faulty, use the new properties setter.');
        }
    },

    addProperties: function(properties) {
        var key, descriptor, obj = this.properties;

        for (key in properties) {
            descriptor = Object.getOwnPropertyDescriptor(obj, key);
            if (!descriptor || descriptor.writable || descriptor.set) {
                obj[key] = properties[key];
            }
        }
    },

    /**
     * This method determines the proposed cell editor name from the render properties. The algorithm is:
     * 1. `editor` render property (cell editor name)
     * 2. `format` render property (localizer name)
     *
     * Note that "render property" means in each case the first defined property found on the cell, column, or grid.
     *
     * @param {number} y - The grid row index.
     * @param {object} options - Will be decorated with `format` and `column`.
     * @param {CellEvent} options.editPoint
     * @returns {undefined|CellEditor} Falsy value means either no declared cell editor _or_ instantiation aborted by falsy return return from fireRequestCellEdit.
     */
    getCellEditorAt: function(event) {
        var columnIndex = this.index,
            rowIndex = event.gridCell.y,
            editorName = event.getCellProperty('editor'),
            options = Object.defineProperties(event, {
                format: {
                    // `options.fomrat` is a copy of the cell's `format` property which is:
                    // 1. Subject to adjustment by the `getCellEditorAt` override.
                    // 2. Then used by the cell editor to reference the predefined localizer.
                    writable: true,
                    value: event.getCellProperty('format')
                },
                editPoint: {
                    get: function() {
                        if (!warned.editPoint) {
                            warned.editPoint = true;
                            console.warn('The .editPoint property has been deprecated as of v1.2.0 in favor of .gridCell. It may be removed in a future release.');
                        }
                        return this.gridCell;
                    }
                }
            }),
            cellEditor = this.dataModel.getCellEditorAt(columnIndex, rowIndex, editorName, options);

        if (cellEditor && !cellEditor.grid) {
            // cell editor returned but not fully instantiated (aborted by falsy return from fireRequestCellEdit)
            cellEditor = undefined;
        }

        return cellEditor;
    },

    getFormatter: function() {
        var localizerName = this.properties.format;
        return this.behavior.grid.localization.get(localizerName).format;
    }
};

Column.prototype.mixIn(require('./cellProperties'));
Column.prototype.mixIn(require('./columnProperties'));

module.exports = Column;

},{"../lib/deprecated":117,"../lib/error":118,"./cellProperties":55,"./columnProperties":56,"overrider":43}],54:[function(require,module,exports){
'use strict';

var Behavior = require('./Behavior');
var DataModelJSON = require('../dataModels/JSON');
var features = require('../features');

var REGEX_CAMEL_CASE = /([^_A-Z])([A-Z]+)/g; // all instances of xX or _X within a "word"

/**
 * @name behaviors.JSON
 * @desc > Same parameters as {@link behaviors.Behavior#initialize|initialize}, which is called by this constructor.
 * @constructor
 * @extends Behavior
 */
var JSON = Behavior.extend('behaviors.JSON', {

    /**
     * @summary Constructor logic, called _after_{@link Behavior#initialize|Behavior.initialize()}.
     * @desc This method will be called upon instantiation of this class or of any class that extends from this class.
     * > All `initialize()` methods in the inheritance chain are called, in turn, each with the same parameters that were passed to the constructor, beginning with that of the most "senior" class through that of the class of the new instance.
     *
     * @memberOf behaviors.JSON.prototype
     */
    initialize: function(grid, options) {
        this.setData(options);
        if (options.pipeline) {
            this.setPipeline(options.pipeline);
        }
    },

    features: [
        features.CellSelection,
        features.KeyPaging,
        features.ColumnPicker,
        features.ColumnResizing,
        features.RowResizing,
        features.Filters,
        features.RowSelection,
        features.ColumnSelection,
        features.ColumnMoving,
        features.ColumnSorting,
        features.CellClick,
        features.CellEditing,
        features.OnHover
    ],

    createColumns: function() {
        var schema = this.dataModel.schema;

        this.clearColumns();

        schema.forEach(function(columnSchema, index) {
            this.addColumn({
                index: index,
                header: columnSchema.header,
                calculator: columnSchema.calculator
            });

            this.columnEnum[this.columnEnumKey(columnSchema.name)] = index; // todo: move columnEnum code from core to demo
        }, this);
    },

    /**
     * @summary Style enum keys.
     * @desc Override this method to style your keys to your liking.
     * @param key
     * @todo move columnEnum code from core to demo
     * @returns {string}
     */
    columnEnumKey: function(key) {
        return key.replace(REGEX_CAMEL_CASE, '$1_$2').toUpperCase();
    },

    getNewDataModel: function(options) {
        return new DataModelJSON(this.grid, options);
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Set the header labels.
     * @param {string[]|object} headers - The header labels. One of:
     * * _If an array:_ Must contain all headers in column order.
     * * _If a hash:_ May contain any headers, keyed by field name, in any order.
     */
    setHeaders: function(headers) {
        if (headers instanceof Array) {
            // Reset all headers
            var allColumns = this.allColumns;
            headers.forEach(function(header, index) {
                allColumns[index].header = header; // setter updates header in both column and data source objects
            });
        } else if (typeof headers === 'object') {
            // Adjust just the headers in the hash
            this.allColumns.forEach(function(column) {
                if (headers[column.name]) {
                    column.header = headers[column.name];
                }
            });
        }
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Set the fields array.
     * @param {string[]} fieldNames - The field names.
     */
    setFields: function(fieldNames) {
        //were defining the columns based on field names....
        //we must rebuild the column definitions
        this.dataModel.setFields(fieldNames);
        this.createColumns();
    },

    /**
     * @see {@link dataModels.JSON#setPipeline}
     * @param {object} [DataSources] - New pipeline description. _(See {@link dataModels.JSON#setPipeline}.)_
     * @param {object} [options] - Takes first argument position when `DataSources` omitted. _(See {@link dataModels.JSON#setPipeline}.)_
     * @param {boolean} [options.apply=true] Apply data transformations to the new data.
     * @memberOf behaviors.JSON.prototype
     */
    setPipeline: function(DataSources, options) {
        if (!Array.isArray(DataSources)) {
            options = DataSources;
            DataSources = undefined;
        }

        this.dataModel.setPipeline(DataSources, options);

        if (!options || options.apply === undefined || options.apply) {
            this.reindex();
        }
    },

    /**
     * Pop pipeline stack.
     * @see {@link dataModels.JSON#unstashPipeline}
     * @param {string} [whichStash]
     * @param {object} [options] - Takes first argument position when `DataSources` omitted.
     * @param {boolean} [options.apply=true] Apply data transformations to the new data.
     */
    unstashPipeline: function(stash, options) {
        if (typeof stash === 'object') {
            options = stash;
            stash = undefined;
        }

        this.dataModel.unstashPipeline(stash);

        if (!options || options.apply === undefined || options.apply) {
            this.reindex();
        }
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Set the data field.
     * @param {function|object[]} [dataRows=options.data] - Array of uniform data row objects or function returning same.
     * @param {object} [options] - Takes first argument position when `dataRows` omitted.
     * @param {function|object} [options.data] - Array of uniform data row objects or function returning same.
     * Passed as 1st param to {@link dataModel.JSON#setData}. If falsy, method aborted.
     * @param {function|object} [options.fields] - Array of field names or function returning same.
     * Passed as 2nd param to {@link dataModel.JSON#setData}.
     * @param {function|object} [options.calculators] - Array of calculators or function returning same.
     * Passed as 3rd param to {@link dataModel.JSON#setData}.
     * @param {boolean} [options.apply=true] Apply data transformations to the new data.
     */
    setData: function(dataRows, options) {
        if (!(Array.isArray(dataRows) || typeof dataRows === 'function')) {
            options = dataRows;
            dataRows = options && options.data;
        }

        dataRows = this.unwrap(dataRows);

        if (dataRows === undefined) {
            return;
        }

        if (!Array.isArray(dataRows)) {
            throw 'Data is not an array';
        }

        options = options || {};
        var grid = this.grid;

        this.dataModel.setData(
            dataRows,
            this.unwrap(options.schema) || [] // *always* define a new schema on reset
        );

        if (grid.cellEditor) {
            grid.cellEditor.cancelEditing();
        }

        if (options.apply === undefined || options.apply) {
            this.reindex();
        }

        var self = this;
        this.createColumns();
        if (self.grid.isColumnAutosizing()) {
            setTimeout(function() {
                self.autosizeAllColumns();
            }, 100);
            self.grid.allowEvents(self.dataModel.getRowCount() > 0);
        } else {
            setTimeout(function() {
                self.getColumn(-1).checkColumnAutosizing(true);
                self.grid.allowEvents(self.dataModel.getRowCount() > 0);
            });
        }
    },
    /**
     * @summary Rebinds the data without reshaping it.
     * @param dataRows
     * @param options
     * @memberOf behaviors.JSON.prototype
     */
    updateData: function(dataRows, options){
        options = options || {};
        if (!(Array.isArray(dataRows) || typeof dataRows === 'function')) {
            options = dataRows;
            dataRows = options && options.data;
        }
        dataRows = this.unwrap(dataRows);
        this.dataModel.setData(
            dataRows,
            this.unwrap(options.schema) // undefined will be ignored
        );

        this.reindex();
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Build the fields and headers from the supplied column definitions.
     * ```javascript
     * myJsonBehavior.setColumns([
     *     { header: 'Stock Name', name: 'short_description' },
     *     { header: 'Status', name: 'trading_phase' },
     *     { header: 'Reference Price', name: 'reference_price' }
     * ]);
     * ```
     * @param {Array} columnDefinitions - an array of objects with fields 'title', and 'field'
     */
    setColumns: function(columnDefinitions) {
        console.warn('This function does not do anything');
    },

    /**
     * @memberOf behaviors.JSON.prototype
     * @description Enhance the double-click event just before it's broadcast to listeners.
     * @param {Point} event
     */
    enhanceDoubleClickEvent: function(event) {
        event.row = this.getRow(event.gridCell.y);
    },

    //Not being used. Should be repurposed??
    setDataProvider: function(dataProvider) {
        this.dataModel.setDataProvider(dataProvider);
    },

    hasHierarchyColumn: function() {
        return this.dataModel.hasHierarchyColumn();
    },

    getHiddenColumns: function() {
        return this.dataModel.getHiddenColumns();
    },

    getActiveColumns: function() {
        return this.dataModel.getActiveColumns();
    },
    getVisibleColumns: function() {
        return this.deprecated('getVisibleColumns()', 'getActiveColumns()', '1.0.6', arguments);
    },

    getSelectedColumns: function() {
        return this.grid.selectionModel.getSelectedColumns();
    },

    getSelections: function() {
        return this.grid.selectionModel.getSelections();
    },

    getSortedColumnIndexes: function(){
      return this.dataModel.getSortedColumnIndexes();
    }
});

module.exports = JSON;

},{"../dataModels/JSON":81,"../features":108,"./Behavior":52}],55:[function(require,module,exports){
/* eslint-env bro wser */

'use strict';

var _ = require('object-iterators');

/**
 * Column.js mixes this module into its prototype.
 * @module
 */
var cell = {

    /**
     * @summary Get the properties object for cell.
     * @desc This is the cell's own properties object if found; else the column object.
     *
     * If you are seeking a single specific property, consider calling {@link Column#getCellProperty} instead (which calls this method).
     * @param {number} rowIndex - Data row coordinate.
     * @return {object} The properties of the cell at x,y in the grid.
     * @memberOf Column#
     */
    getCellProperties: function(rowIndex, dataModel) {
        return this.getCellOwnProperties(rowIndex, dataModel) || this.properties;
    },

    /**
     * @param {number} rowIndex - Data row coordinate.
     * @param {Object} properties - Hash of cell properties.
     * @returns {*}
     * @memberOf Column#
     */
    setCellProperties: function(rowIndex, properties, dataModel) {
        return _(newCellPropertiesObject.call(this, rowIndex, dataModel)).extendOwn(properties);
    },

    /**
     * @param {number} rowIndex - Data row coordinate.
     * @param {Object} properties - Hash of cell properties.
     * @param {boolean} [preserve=false] - Falsy creates new object; truthy copies `properties` members into existing object.
     * @returns {*}
     * @memberOf Column#
     */
    addCellProperties: function(rowIndex, properties, dataModel) {
        return _(getCellPropertiesObject.call(this, rowIndex, dataModel)).extendOwn(properties);
    },

    /**
     * @summary Get the cell's own properties object.
     * @desc Due to memory constraints, we don't create a cell options properties object for every cell.
     *
     * If the cell has its own properties object, it:
     * * was created by a previous call to `setCellProperties` or `setCellProperty`
     * * has the column properties object as its prototype
     * * is returned
     *
     * If the cell does not have its own properties object, this method simply returns `undefined`.
     *
     * Call this method only when you need to know if the the cell has its own properties object; otherwise call {@link Column#getCellProperties|getCellProperties}.
     * @param {number} rowIndex - Data row coordinate.
     * @returns {undefined|object} The "own" properties of the cell at x,y in the grid. If the cell does not own a properties object, returns `undefined`.
     * @memberOf Column#
     */
    getCellOwnProperties: function(rowIndex, dataModel) {
        var rowData;
        return (
            this.index >= 0 && // no cell props on row handle cells
            (rowData = (dataModel || this.dataModel).getRow(rowIndex)) && // no cell props on non-existant rows
            rowData.__META && rowData.__META[this.name] // undefined if not previously created
        );
    },

    /**
     * @summary Return a specific cell property.
     * @desc If there is no cell properties object, defers to column properties object.
     * @param {number} rowIndex - Data row coordinate.
     * @param {string} key
     * @return {object} The specified property for the cell at x,y in the grid.
     * @memberOf Column#
     */
    getCellProperty: function(rowIndex, key, dataModel) {
        return this.getCellProperties(rowIndex, dataModel)[key];
    },

    /**
     * @param {number} rowIndex - Data row coordinate.
     * @param {string} key
     * @param value
     * @returns {object}
     * @memberOf Column#
     */
    setCellProperty: function(rowIndex, key, value, dataModel) {
        var propertiesObject = getCellPropertiesObject.call(this, rowIndex, dataModel);
        propertiesObject[key] = value;
        return propertiesObject;
    },

    clearAllCellProperties: function() {
        // Unimplemented!
        // Need to undefine all `dataModel.getData(*).__META[this.name]`.
    }
};

/**
 * @this {Column}
 * @param {number} rowIndex - Data row coordinate.
 * @returns {object}
 * @private
 */
function getCellPropertiesObject(rowIndex, dataModel) {
    return this.getCellOwnProperties(rowIndex, dataModel) || newCellPropertiesObject.call(this, rowIndex, dataModel);
}

/**
 * @todo: For v8 optimization, consider setting the new `__META` object to a "regularly shaped object" (i.e., with all the columns) instead of simply to `{}`. Considerations include how many of these objects are there, how often are they referenced, etc.
 * @this {Column}
 * @param {number} rowIndex - Data row coordinate.
 * @returns {object}
 * @private
 */
function newCellPropertiesObject(rowIndex, dataModel) {
    var rowData = (dataModel || this.dataModel).getRow(rowIndex),
        metaData = rowData.__META = rowData.__META || {};
    return (metaData[this.name] = Object.create(this.properties));
}

module.exports = cell;

},{"object-iterators":42}],56:[function(require,module,exports){
'use strict';

/**
 * @param {function|string} string
 * @returns {function}
 * @private
 */
function toFunction(string) {
    switch (typeof string) {
        case 'undefined':
        case 'function':
            return string;
        case 'string':
            break;
        default:
            throw 'Expected string, function, or undefined.';
    }

    var args = string.match(/function\s*\(([^]*?)\)/);
    if (!args) {
        throw 'Expected function keyword with formal parameter list.';
    }
    args = args[1].split(',').map(function(s, i) {
        s = s.match(/\s*(\w*)\s*/); // trim each argument
        if (!s && i) {
            throw 'Expected formal parameter.';
        }
        return s[1];
    });

    var body = string.match(/{\s*([^]*?)\s*}/);
    if (!body) {
        throw 'Expected function body.';
    }
    body = body[1];

    if (args.length === 1 && !args[0]) {
        args[0] = body;
    } else {
        args = args.concat(body);
    }

    return Function.apply(null, args);
}

var FIELD = 'columnProperties.field is deprecated as of v1.1.0 in favor of columnProperties.name. (Will be removed in a future release.)',
    COLUMN_NAME = 'columnProperties.columnName is deprecated as of v1.1.0 in favor of columnProperties.name. (Will be removed in a future release.)';

/**
 * @this {Column}
 * @returns {object}
 */
function createColumnProperties() {
    var column = this,
        tableState = column.behavior.grid.properties,
        properties;

    properties = Object.create(tableState, {

        index: { // read-only (no setter)
            get: function() {
                return column.index;
            }
        },

        name: { // read-only (no setter)
            get: function() {
                return column.name;
            }
        },

        field: { // read-only (no setter)
            get: function() {
                if (FIELD) { console.warn(FIELD); FIELD = undefined; }
                return column.name;
            }
        },

        columnName: { // read-only (no setter)
            get: function() {
                if (COLUMN_NAME) { console.warn(COLUMN_NAME); COLUMN_NAME = undefined; }
                return column.name;
            }
        },

        header: {
            get: function() {
                return column.header;
            },
            set: function(header) {
                column.header = header;
            }
        },

        type: {
            get: function() {
                return column.type;
            },
            set: function(type) {
                column.type = type;
            }
        },

        calculator: {
            get: function() {
                return column.calculator;
            },
            set: function(calculator) {
                column.calculator = toFunction(calculator);
            }
        }

    });


    Object.defineProperty(properties, 'rowNumbersProperties', { value: Object.create(properties, {
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.columnHeaderForegroundSelectionColor;
            },
            set: function(value) {
                this.columnHeaderForegroundSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.columnHeaderBackgroundSelectionColor;
            },
            set: function(value) {
                this.columnHeaderBackgroundSelectionColor = value;
            }
        }
    })});

    Object.defineProperty(properties, 'rowHeader', { value: Object.create(properties, {
        font: {
            configurable: true,
            get: function() {
                return this.rowHeaderFont;
            },
            set: function(value) {
                this.rowHeaderFont = value;
            }
        },
        color: {
            configurable: true,
            get: function() {
                return this.rowHeaderColor;
            },
            set: function(value) {
                this.rowHeaderColor = value;
            }
        },
        backgroundColor: {
            configurable: true,
            get: function() {
                return this.rowHeaderBackgroundColor;
            },
            set: function(value) {
                this.rowHeaderBackgroundColor = value;
            }
        },
        foregroundSelectionFont: {
            configurable: true,
            get: function() {
                return this.rowHeaderForegroundSelectionFont;
            },
            set: function(value) {
                this.rowHeaderForegroundSelectionFont = value;
            }
        },
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.rowHeaderForegroundSelectionColor;
            },
            set: function(value) {
                this.rowHeaderForegroundSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.rowHeaderBackgroundSelectionColor;
            },
            set: function(value) {
                this.rowHeaderBackgroundSelectionColor = value;
            }
        }
    })});

    Object.defineProperty(properties, 'columnHeader', { value: Object.create(properties, {
        font: {
            configurable: true,
            get: function() {
                return this.columnHeaderFont;
            },
            set: function(value) {
                this.columnHeaderFont = value;
            }
        },
        color: {
            configurable: true,
            get: function() {
                return this.columnHeaderColor;
            },
            set: function(value) {
                this.columnHeaderColor = value;
            }
        },
        backgroundColor: {
            configurable: true,
            get: function() {
                return this.columnHeaderBackgroundColor;
            },
            set: function(value) {
                this.columnHeaderBackgroundColor = value;
            }
        },
        foregroundSelectionFont: {
            configurable: true,
            get: function() {
                return this.columnHeaderForegroundSelectionFont;
            },
            set: function(value) {
                this.columnHeaderForegroundSelectionFont = value;
            }
        },
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.columnHeaderForegroundSelectionColor;
            },
            set: function(value) {
                this.columnHeaderForegroundSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.columnHeaderBackgroundSelectionColor;
            },
            set: function(value) {
                this.columnHeaderBackgroundSelectionColor = value;
            }
        },
        halign: {
            configurable: true,
            get: function() {
                return this.columnHeaderHalign;
            },
            set: function(value) {
                this.columnHeaderHalign = value;
            }
        }
    })});

    Object.defineProperty(properties, 'columnHeaderColumnSelection', { value: Object.create(properties.columnHeader, {
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.columnHeaderForegroundColumnSelectionColor;
            },
            set: function(value) {
                this.columnHeaderForegroundColumnSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.columnHeaderBackgroundColumnSelectionColor;
            },
            set: function(value) {
                this.columnHeaderBackgroundColumnSelectionColor = value;
            }
        }
    })});

    Object.defineProperty(properties, 'rowHeaderRowSelection', { value: Object.create(properties.rowHeader, {
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.rowHeaderForegroundRowSelectionColor;
            },
            set: function(value) {
                this.rowHeaderForegroundRowSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.rowHeaderBackgroundRowSelectionColor;
            },
            set: function(value) {
                this.rowHeaderBackgroundRowSelectionColor = value;
            }
        }
    })});

    Object.defineProperty(properties, 'filterProperties', { value: Object.create(properties, {
        font: {
            configurable: true,
            get: function() {
                return this.filterFont;
            },
            set: function(value) {
                this.filterFont = value;
            }
        },
        color: {
            configurable: true,
            get: function() {
                return this.filterColor;
            },
            set: function(value) {
                this.filterColor = value;
            }
        },
        backgroundColor: {
            configurable: true,
            get: function() {
                return this.filterBackgroundColor;
            },
            set: function(value) {
                this.filterBackgroundColor = value;
            }
        },
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.filterForegroundSelectionColor;
            },
            set: function(value) {
                this.filterForegroundSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.filterBackgroundSelectionColor;
            },
            set: function(value) {
                this.filterBackgroundSelectionColor = value;
            }
        },
        halign: {
            configurable: true,
            get: function() {
                return this.filterHalign;
            },
            set: function(value) {
                this.filterHalign = value;
            }
        }
    })});

    Object.defineProperty(properties, 'treeColumnProperties', { value: Object.create(properties, {
        font: {
            configurable: true,
            get: function() {
                return this.treeColumnFont;
            },
            set: function(value) {
                this.treeColumnFont = value;
            }
        },
        color: {
            configurable: true,
            get: function() {
                return this.treeColumnColor;
            },
            set: function(value) {
                this.treeColumnColor = value;
            }
        },
        backgroundColor: {
            configurable: true,
            get: function() {
                return this.treeColumnBackgroundColor;
            },
            set: function(value) {
                this.treeColumnBackgroundColor = value;
            }
        },
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.treeColumnForegroundSelectionColor;
            },
            set: function(value) {
                this.treeColumnForegroundSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.treeColumnBackgroundSelectionColor;
            },
            set: function(value) {
                this.treeColumnBackgroundSelectionColor = value;
            }
        }
    })});

    Object.defineProperty(properties, 'treeColumnPropertiesColumnSelection', { value: Object.create(properties.treeColumnProperties, {
        foregroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.treeColumnForegroundColumnSelectionColor;
            },
            set: function(value) {
                this.treeColumnForegroundColumnSelectionColor = value;
            }
        },
        backgroundSelectionColor: {
            configurable: true,
            get: function() {
                return this.treeColumnBackgroundColumnSelectionColor;
            },
            set: function(value) {
                this.treeColumnBackgroundColumnSelectionColor = value;
            }
        }
    })});

    return properties;
}

module.exports.createColumnProperties = createColumnProperties;

},{}],57:[function(require,module,exports){
'use strict';

module.exports = {
    Behavior: require('./Behavior'), // abstract base class
    JSON: require('./JSON'),
    Column: require('./Column')
};

},{"./Behavior":52,"./Column":53,"./JSON":54}],58:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var mustache = require('mustache');
var _ = require('object-iterators');

var Base = require('../Base');
var effects = require('../lib/DOM/effects');
var Localization = require('../lib/Localization');

/**
 * @constructor
 */
var CellEditor = Base.extend('CellEditor', {

    /**
     * @param grid
     * @param {CellEvent} options - Properties listed below + arbitrary mustache "variables" for merging into template.
     * @param {Point} options.editPoint - Deprecated; use `options.gridCell`.
     * @param {string} [options.format] - Name of a localizer with which to override prototype's `localizer` property.
     */
    initialize: function(grid, options) {
        // Mix in all enumerable properties for mustache use.
        for (var key in options) {
            if (options.hasOwnProperty(key) && this[key] !== null) {
                this[key] = options[key];
            }
        }

        this.event = options;

        var value = grid.behavior.getValue(this.event);
        if (value instanceof Array) {
            value = value[1]; //it's a nested object
        }

        /**
         * my instance of hypergrid
         * @type {Hypergrid}
         * @memberOf CellEditor.prototype
         */
        this.grid = grid;

        this.grid.cellEditor = this;

        this.locale = grid.localization.locale; // for template's `lang` attribute

        // override native localizer with localizer named in format if defined (from instantiation options)
        if (options.format) {
            this.localizer = this.grid.localization.get(options.format);
        }

        this.initialValue = value;

        var container = document.createElement('DIV');
        container.innerHTML = mustache.render(this.template, this);

        /**
         * This object's input control, one of:
         * * *input element* - an `HTMLElement` that has a `value` attribute, such as `HTMLInputElement`, `HTMLButtonElement`, etc.
         * * *container element* - an `HTMLElement` containing one or more input elements, only one of which contains the editor value.
         *
         * For access to the input control itself (which may or may not be the same as `this.el`), see `this.input`.
         *
         * @type {HTMLElement}
         * @default null
         * @memberOf CellEditor.prototype
         */
        this.el = container.firstChild;

        this.input = this.el;

        this.errors = 0;

        var self = this;
        this.el.addEventListener('keyup', this.keyup.bind(this));
        this.el.addEventListener('keydown', function(e) {
            grid.fireSyntheticEditorKeyDownEvent(self, e);
        });
        this.el.addEventListener('keypress', function(e) {
            grid.fireSyntheticEditorKeyPressEvent(self, e);
        });
        this.el.addEventListener('mousedown', function(e) {
            self.onmousedown(e);
        });
    },

    // If you override this method, be sure to call it as a final step (or call stopPropagation yourself).
    onmousedown: function(event) {
        event.stopPropagation(); // Catch mouseodwn here before it gets to the document listener defined in Hypergrid().
    },

    localizer: Localization.prototype.null,

    specialKeyups: {
        //0x08: 'clearStopEditing', // backspace
        0x09: 'stopEditing', // tab
        0x0d: 'stopEditing', // return/enter
        0x1b: 'cancelEditing' // escape
    },

    keyup: function(e) {
        if (e) {
            var specialKeyup = this.specialKeyups[e.keyCode];

            if (specialKeyup) {
                e.preventDefault();
                if (this[specialKeyup](3)) {
                    this.grid.repaint();
                    this.grid.takeFocus();
                }
            }

            this.grid.fireSyntheticEditorKeyUpEvent(this, e);
        }
    },

    /**
     * if true, check that the editor is in the right location
     * @type {boolean}
     * @default false
     * @memberOf CellEditor.prototype
     */
    checkEditorPositionFlag: false,

    /**
     * @memberOf CellEditor.prototype
     * @desc This function is a callback from the fin-hypergrid.   It is called after each paint of the canvas.
     */
    gridRenderedNotification: function() {
        this.checkEditor();
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc scroll values have changed, we've been notified
     */
    scrollValueChangedNotification: function() {
        this.checkEditorPositionFlag = true;
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc move the editor to the current editor point
     */
    moveEditor: function() {
        var cellBounds = this.event.bounds;

        //hack to accommodate bootstrap margin issues...
        var xOffset =
            this.grid.div.getBoundingClientRect().left -
            this.grid.divCanvas.getBoundingClientRect().left;

        cellBounds.x -= xOffset;

        this.setBounds(cellBounds);
    },

    beginEditing: function() {
        if (this.grid.fireRequestCellEdit(this.event.gridCell, this.initialValue)) {
            this.checkEditorPositionFlag = true;
            this.checkEditor();
        }
    },
    beginEditAt: function(Constructor, name) {
        return this.deprecated('beginEditAt(point)', 'beginEditing()', '1.0.6');
    },

    /**
     * @summary Put the value into our editor.
     * @desc Formats the value and displays it.
     * The localizer's {@link localizerInterface#format|format} method will be called.
     *
     * Override this method if your editor has additional or alternative GUI elements.
     *
     * @param {object} value - The raw unformatted value from the data source that we want to edit.
     * @memberOf CellEditor.prototype
     */
    setEditorValue: function(value) {
        this.input.value = this.localizer.format(value);
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc display the editor
     */
    showEditor: function() {
        this.el.style.display = 'inline';
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc hide the editor
     */
    hideEditor: function() {
        this.el.style.display = 'none';
    },

    /** @summary Stops editing.
     * @desc Before saving, validates the edited value in two phases as follows:
     * 1. Call `validateEditorValue`. (Calls the localizer's `invalid()` function, if available.)
     * 2. Catch any errors thrown by the {@link CellEditor#getEditorValue|getEditorValue} method.
     *
     * **If the edited value passes both phases of the validation:**
     * Saves the edited value by calling the {@link CellEditor#saveEditorValue|saveEditorValue} method.
     *
     * **On validation failure:**
     * 1. If `feedback` was omitted, cancels editing, discarding the edited value.
     * 2. If `feedback` was provided, gives the user some feedback (see `feedback`, below).
     *
     * @param {number} [feedback] What to do on validation failure:
     * * If omitted, simply cancels editing without saving edited value.
     * * If 0, shows the error feedback effect (see the {@link CellEditor#errorEffect|errorEffect} property).
     * * If > 0, shows the error feedback effect _and_ calls the {@link CellEditor#errorEffectEnd|errorEffectEnd} method) every `feedback` call(s) to `stopEditing`.
     * @returns {boolean} Truthy means successful stop. Falsy means syntax error prevented stop. Note that editing is canceled when no feedback requested and successful stop includes (successful) cancel.
     * @memberOf CellEditor.prototype
     */
    stopEditing: function(feedback) {
        /**
         * @type {boolean|string|Error}
         */
        var error = this.validateEditorValue();

        if (!error) {
            try {
                var value = this.getEditorValue();
            } catch (err) {
                error = err;
            }
        }

        if (!error && this.grid.fireSyntheticEditorDataChangeEvent(this, this.initialValue, value)) {
            try {
                this.saveEditorValue(value);
            } catch (err) {
                error = err;
            }
        }

        if (!error) {
            this.hideEditor();
            this.grid.cellEditor = null;
            this.el.remove();
        } else if (feedback >= 0) { // never true when `feedback` undefined
            var point = this.event.gridCell;
            this.grid.selectViewportCell(point.x, point.y - this.grid.getHeaderRowCount());
            this.errorEffectBegin(++this.errors % feedback === 0 && error);
        } else { // invalid but no feedback
            this.cancelEditing();
        }

        return !error;
    },

    /** @summary Cancels editing.
     * @returns {boolean} Successful. (Cancel is always successful.)
     */
    cancelEditing: function() {
        this.setEditorValue(this.initialValue);
        this.hideEditor();
        this.grid.cellEditor = null;
        this.el.remove();

        return true;
    },

    /**
     * Calls the effect function indicated in the {@link CellEditor#errorEffect|errorEffect} property which triggers a series of CSS transitions.
     * @param {boolean|string|Error} [error] - If defined, call the {@link CellEditor#errorEffectEnd|errorEffectEnd} method at the end of the last effect transition with this error.
     * @memberOf CellEditor.prototype
     */
    errorEffectBegin: function(error) {
        var options = { callback: error && this.errorEffectEnd.bind(this, error) },
            effect = this.errorEffect;

        if (typeof effect === 'string') {
            effect = this.errorEffects[effect];
        }

        if (typeof effect === 'object') {
            _(options).extendOwn(effect.options);
            effect = effect.effector;
        }

        if (typeof effect === 'function') {
            effect.call(this, options);
        } else {
            throw 'Expected `this.errorEffect` to resolve to an error effect function.';
        }
    },

    /**
     * This function expects to be passed an error. There is no point in calling this function if there is no error. Nevertheless, if called with a falsy `error`, returns without doing anything.
     * @this {CellEditor}
     * @param {boolean|string|Error} [error]
     */
    errorEffectEnd: function(error) {
        if (error) {
            var msg =
                'Invalid value. To resolve, do one of the following:\n\n' +
                '   * Correct the error and try again.\n' +
                '         - or -\n' +
                '   * Cancel editing by pressing the "esc" (escape) key.';

            error = error.message || error;

            if (typeof error !== 'string') {
                error = '';
            }

            if (this.localizer.expectation) {
                error = error ? error + '\n' + this.localizer.expectation : this.localizer.expectation;
            }

            if (error) {
                if (/[\n\r]/.test(error)) {
                    error = '\n' + error;
                    error = error.replace(/[\n\r]+/g, '\n\n   * ');
                }
                msg += '\n\nAdditional information about this error: ' + error;
            }

            alert(msg); // eslint-disable-line no-alert
        }
    },

    /** @typedef effectObject
     * @property {effectFunction} effector
     * @property {object} [options] - An options object with which to call the function.
     */
    /**
     * May be one of:
     * * **string** - Name of registered error effect.
     * * **effectFunction** - Reference to an effect function.
     * * **effectObject** - Reference to an effectObject containing an {@link effectFunction} and an `options` object with which to call the function.
     * @type {string|effectFunction|effectObject}
     * @memberOf CellEditor.prototype
     */
    errorEffect: 'shaker',

    /**
     * Hash of registered {@link effectFunction}s or {@link effectObject}s.
     * @memberOf CellEditor.prototype
     */
    errorEffects: {
        shaker: effects.shaker,
        glower: effects.glower
    },

    /**
     * @desc save the new value into the behavior (model)
     * @returns {boolean} Data changed and pre-cell-edit event was not canceled.
     * @memberOf CellEditor.prototype
     */
    saveEditorValue: function(value) {
        var save =
            !(value && value === this.initialValue) && // data changed
            this.grid.fireBeforeCellEdit(this.event.gridCell, this.initialValue, value, this); // proceed

        if (save) {
            this.grid.behavior.setValue(this.event, value);
            this.grid.fireAfterCellEdit(this.event.gridCell, this.initialValue, value, this);
        }

        return save;
    },

    /**
     * @summary Extract the edited value from the editor.
     * @desc De-format the edited string back into a primitive value.
     *
     * The localizer's {@link localizerInterface#parse|parse} method will be called on the text box contents.
     *
     * Override this method if your editor has additional or alternative GUI elements. The GUI elements will influence the primitive value, either by altering the edited string before it is parsed, or by transforming the parsed value before returning it.
     * @returns {object} the current editor's value
     * @memberOf CellEditor.prototype
     */
    getEditorValue: function() {
        return this.localizer.parse(this.input.value);
    },

    /**
     * If there is no validator on the localizer, returns falsy (not invalid; possibly valid).
     * @returns {boolean|string} Truthy value means invalid. If a string, this will be an error message. If not a string, it merely indicates a generic invalid result.
     */
    validateEditorValue: function() {
        return this.localizer.invalid && this.localizer.invalid(this.input.value);
    },

    /**
     * @summary Request focus for my input control.
     * @desc See GRID-95 "Scrollbar moves inward" for issue and work-around explanation.
     * @memberOf CellEditor.prototype
     */
    takeFocus: function() {
        var el = this.el,
            leftWas = el.style.left,
            topWas = el.style.top;

        el.style.left = el.style.top = 0; // work-around: move to upper left

        var x = window.scrollX, y = window.scrollY;
        this.input.focus();
        window.scrollTo(x, y);
        this.selectAll();

        el.style.left = leftWas;
        el.style.top = topWas;
    },

    /**
     * @memberOf CellEditor.prototype
     * @desc select everything
     */
    selectAll: nullPattern,

    /**
     * @memberOf CellEditor.prototype
     * @desc set the bounds of my input control
     * @param {rectangle} rectangle - the bounds to move to
     */
    setBounds: function(cellBounds) {
        var style = this.el.style;

        style.left = px(cellBounds.x);
        style.top = px(cellBounds.y);
        style.width = px(cellBounds.width);
        style.height = px(cellBounds.height);
    },

    /**
     * @desc check that the editor is in the correct location, and is showing/hidden appropriately
     * @memberOf CellEditor.prototype
     */
    checkEditor: function() {
        if (this.checkEditorPositionFlag) {
            this.checkEditorPositionFlag = false;
            if (this.event.isCellVisible) {
                this.setEditorValue(this.initialValue);
                this.attachEditor();
                this.moveEditor();
                this.showEditor();
                this.takeFocus();
            } else {
                this.hideEditor();
            }
        }
    },

    attachEditor: function() {
        this.grid.div.appendChild(this.el);
    },

    template: ''

});

function nullPattern() {}
function px(n) { return n + 'px'; }


CellEditor.abstract = true; // don't instantiate directly


module.exports = CellEditor;

},{"../Base":49,"../lib/DOM/effects":110,"../lib/Localization":113,"mustache":41,"object-iterators":42}],59:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor');

/**
 * As of spring 2016:
 * Functions well in Chrome and Firefox; unimplemented in Safari.
 * @constructor
 * @extends CellEditor
 */
var Color = CellEditor.extend('Color', {

    template: '<input type="color" lang="{{locale}}" style="{{style}}">'

});

module.exports = Color;

},{"./CellEditor":58}],60:[function(require,module,exports){
// ComboBox.js - A combo-box is a combination of a text-box and a drop-down.
// User may type into it and/or select an item from the drop-down (by clicking on the triangle at the right).
// The drop-down has sections which are toggled from a control area between the text-box and the drop-down.

/* eslint-env browser */

'use strict';

var Textfield = require('./Textfield');
var prototype = require('./CellEditor').prototype;
var Queueless = require('../lib/DOM/queueless');
var elfor = require('../lib/DOM/elfor');

/*********************************/
/* eslint-disable no-unused-vars */
/*********************************/

var TOGGLE_MODE_PREFIX = 'toggle-mode-';

var stateToActionMap = {
    hidden: slideDown,
    visible: slideUp
};

/**
 * A combo box is a text box that also has a drop-down containing options. The drop-down consists of an actual drop-down list (a `<select>` list) plus a _control area_ above it containing toggles. The toggles control the visibility of the various "mode lists."
 *
 * Functions well in Chrome, Safari, Firefox, and Internet Explorer.
 * @constructor
 * @extends Textfield
 */
var ComboBox = Textfield.extend('ComboBox', {

    initialize: function() {
        var el = this.el;

        this.input = el.querySelector('input');
        this.dropper = el.querySelector('span');
        this.options = el.querySelector('div');
        this.controls = this.options.querySelector('div');
        this.dropdown = this.options.querySelector('select');

        this.controllable = this.modes.length > 1;

        // set up a transition end controller
        this.optionsTransition = new Queueless(this.options, this);

        this.menuModesSource = this.column.menuModes || { distinctValues: true };

        // wire-ups
        this.dropper.addEventListener('mousedown', this.toggleDropDown.bind(this));
        this.dropdown.addEventListener('mousewheel', function(e) { e.stopPropagation(); });
        this.dropdown.addEventListener('change', this.insertText.bind(this));
    },

    template: [
'<div class="hypergrid-combobox" title="">',
'    <input type="text" lang="{{locale}}" style="{{style}}">',
'    <span title="Click for options"></span>',
'    <div>',
'        <div></div>',
'        <select size="15" lang="{{locale}}"></select>',
'    </div>',
'</div>'
    ].join('\n'),

    modes: [
        {
            name: 'distinctValues',
            appendOptions: function(optgroup) {
                // get the distinct column values and sort them
                var distinct = {},
                    d = [],
                    columnName = this.column.name,
                    formatter = this.column.getFormatter();

                this.grid.behavior.getData().forEach(function(dataRow) {
                    var val = formatter(dataRow[columnName]);
                    distinct[val] = (distinct[val] || 0) + 1;
                });

                for (var key in distinct) {
                    d.push(key);
                }

                while (optgroup.firstElementChild) {
                    optgroup.firstElementChild.remove();
                }

                d.sort().forEach(function(val) {
                    var option = new Option(val + ' (' + distinct[val] + ')', val);
                    optgroup.appendChild(option);
                });

                return d.length;
            }
        }
    ],

    showEditor: function() {
        var menuModesSource = this.menuModesSource,
            menuModes = this.menuModes = {};

        // build the proxy
        this.modes.forEach(function(mode) {
            var modeName = mode.name;
            if (modeName in menuModesSource) {
                menuModes[modeName] = menuModesSource[modeName];
            }
        });

        // wire-ups
        if (this.controllable) {
            this.controls.addEventListener('click', onModeIconClick.bind(this));
        }

        // set the initial state of the mode toggles
        this.modes.forEach(function(mode) {
            // create a toggle
            var toggle = document.createElement('span');
            if (this.controllable) {
                toggle.className = TOGGLE_MODE_PREFIX + mode.name;
                toggle.title = 'Toggle ' + (mode.label || mode.name).toLowerCase();
                toggle.textContent = mode.symbol;
            }
            this.controls.appendChild(toggle);

            // create and label a new optgroup
            if (mode.selector) {
                var optgroup = document.createElement('optgroup');
                optgroup.label = mode.label;
                optgroup.className = 'submenu-' + mode.name;
                optgroup.style.backgroundColor = mode.backgroundColor;
                this.dropdown.add(optgroup);
            }

            setModeIconAndOptgroup.call(this, toggle, mode.name, menuModes[mode.name]);
        }.bind(this));

        prototype.showEditor.call(this);
    },

    hideEditor: function() {
        // this is where you would persist this.menuModes
        prototype.hideEditor.call(this);
    },

    toggleDropDown: function() {
        if (!this.optionsTransition.transitioning) {
            var state = window.getComputedStyle(this.dropdown).visibility;
            stateToActionMap[state].call(this);
        }
    },

    insertText: function(e) {
        // replace the input text with the drop-down text
        this.input.focus();
        this.input.value = this.dropdown.value;
        this.input.setSelectionRange(0, this.input.value.length);

        // close the drop-down
        this.toggleDropDown();
    }
});

function onModeIconClick(e) {
    var ctrl = e.target;

    if (ctrl.tagName === 'SPAN') {
        // extra ct the mode name from the toggle control's class name
        var modeClassName = Array.prototype.find.call(ctrl.classList, function(className) {
                return className.indexOf(TOGGLE_MODE_PREFIX) === 0;
            }),
            modeName = modeClassName.substr(TOGGLE_MODE_PREFIX.length);

        // toggle mode in the filter
        var modeState = this.menuModes[modeName] ^= 1;

        setModeIconAndOptgroup.call(this, ctrl, modeName, modeState);
    }
}

function setModeIconAndOptgroup(ctrl, name, state) {
    var style, optgroup, sum, display,
        dropdown = this.dropdown,
        mode = this.modes.find(function(mode) { return mode.name === name; }); // eslint-disable-line no-shadow

    // set icon state (color)
    ctrl.classList.toggle('active', !!state);

    // empty the optgroup if hiding; rebuild it if showing
    if (state) { // rebuild it
        // show progress cursor for (at least) 1/3 second
        style = this.el.style;
        style.cursor = 'progress';
        setTimeout(function() { style.cursor = null; }, 333);

        if (mode.selector) {
            optgroup = dropdown.querySelector(mode.selector);
            sum = mode.appendOptions.call(this, optgroup);

            // update sum
            optgroup.label = optgroup.label.replace(/ \(\d+\)$/, ''); // remove old sum
            optgroup.label += ' (' + sum + ')';
        } else {
            sum = mode.appendOptions.call(this, dropdown);
            if (!this.controllable) {
                ctrl.textContent = sum + ' values';
            }
        }

        display = null;
    } else {
        display = 'none';
    }

    // hide/show the group
    var selector = mode.selector;
    if (!selector) {
        selector = 'option,optgroup:not([class])';
        var mustBeChildren = true; // work-around for ':scope>option,...' not avail in IE11
    }
    elfor.each(selector, iteratee, dropdown);

    function iteratee(el) {
        if (!mustBeChildren || el.parentElement === dropdown) {
            el.style.display = display;
        }
    }

    // TODO: Reset the width of this.options to the natural width of this.dropdown. To do this, we need to remove the latter's "width: 100%" from the CSS and then set an explicit this.options.style.width based on the computed width of this.dropdown. This is complicated by the fact that it cannot be done before it is in the DOM.
}

function slideDown() {
    // preserve the text box's current text selection, which is about to be lost
    this.selectionStart = this.input.selectionStart;
    this.selectionEnd = this.input.selectionEnd;

    // clean up the select list from last usage
    this.dropdown.selectedIndex = -1; // be kind (remove previous selection)
    this.dropdown.style.scrollTop = 0; // rewind

    // show the drop-down slide down effect
    this.options.style.visibility = 'visible';
    var dropDownTopMargin = getFloat(this.dropdown, 'marginTop'),
        dropDownRows = this.dropdown.size,
        optionHeight = Math.ceil((this.dropdown.length ? getFloat(this.dropdown[0], 'height') : 13.1875) * 2) / 2 + 1;
    this.options.style.height = dropDownTopMargin + optionHeight * dropDownRows + 'px'; // starts the slide down effect

    // while in drop-down, listen for clicks in text box which means abprt
    this.input.addEventListener('mousedown', this.slideUpBound = slideUp.bind(this));

    // wait for transition to end
    this.optionsTransition.begin();
}

function slideUp() {
    // stop listening to input clicks
    this.input.removeEventListener('mousedown', this.slideUpBound);

    // start the slide up effect
    this.options.style.height = 0;

    // schedule the hide to occur after the slide up effect
    this.optionsTransition.begin(function(event) {
        this.style.visibility = 'hidden';
    });
}

function getFloat(el, style) {
    return parseFloat(window.getComputedStyle(el)[style]);
}


module.exports = ComboBox;

},{"../lib/DOM/elfor":111,"../lib/DOM/queueless":112,"./CellEditor":58,"./Textfield":66}],61:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var CellEditor = require('./CellEditor');

var isChromium = window.chrome,
    winNav = window.navigator,
    vendorName = winNav.vendor,
    isOpera = winNav.userAgent.indexOf('OPR') > -1,
    isIEedge = winNav.userAgent.indexOf('Edge') > -1,
    isIOSChrome = winNav.userAgent.match('CriOS'),
    isChrome = !isIOSChrome &&
        isChromium !== null &&
        isChromium !== undefined &&
        vendorName === 'Google Inc.' &&
        isOpera == false && isIEedge == false; // eslint-disable-line eqeqeq

/**
 * As of spring 2016:
 * Functions well in Chrome except no localization (day, month names; date format).
 * Unimplemented in Safari, Firefox, Internet Explorer.
 * This is a "snmart" control. It detects Chrome:
 * * If Chrome, uses chromeDate overrides format to that required by the value attribute, yyyy-mm-dd. (Note that this is not the format displayed in the control, which is always mm/dd/yyyy.)
 * * Otherwise uses localized date format _but_ falls back to a regular text box.
 * @constructor
 * @extends CellEditor
 */
var Date = CellEditor.extend('Date', {

    initialize: function(grid) {

        var localizerName,
            usesDateInputControl = isChrome;

        if (usesDateInputControl) {
            localizerName = 'chromeDate';
            this.template = '<input type="date">';
        } else {
            localizerName = 'date';
            this.template = '<input type="text" lang="{{locale}}">';

            this.selectAll = function() {
                var lastCharPlusOne = this.getEditorValue().length;
                this.input.setSelectionRange(0, lastCharPlusOne);
            };
        }

        this.localizer = grid.localization.get(localizerName);
    }
});


module.exports = Date;

},{"./CellEditor":58}],62:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var popMenu = require('pop-menu');

var ComboBox = require('./ComboBox');
var prototype = require('./CellEditor').prototype;


/**
 * The select list consists of the following sets of drop-down items:
 * * `operators` (icon *&lt;*) The particular selection of operators for this column. Comes from the filter tree.
 * * `distinctValues` (icon *#*) List of distinct column values. Calculated from inspection of column values on _and_ on icon click.
 * * `columnNames` (icon *T*) List other column names. Calculated from inspection of column values on _and_ on icon click.
 *
 * The control area reflects the `this.modes` array (above). It is modeled by a 'menuModes` object, a hash with boolean properties representing the state of each of the sets of menu items outlined above. Missing properties are falsy by implication. The state semantics are:
 *   * `1` or `true` means adds CSS class `active` to icon _and_ shows set's items in drop-down.
 *   * `0` or `false` means removes (CSS class `active` from icon _and_ hides set's items in drop-down.
 *
 * *Persisting changes:* The only change this UI supports (besides the filter text itself) is the menu mode states, which are expected to be "sticky." That is, they are "persisted" (written back) to the filter. However, there is a problem: When the column filter is blank it doesn't actually exist yet in the filter, so there is nowhere to save it. The solution is to read the `menuModes` hash _from_ the filter tree but don't modify it until end of editing. Reading it from the filter tree picks up previous setting if there was an extant column filter or the default if there was not. But then, rather than modifying this structure (because it might be the default and we don't want to overwrite that), we hang a proxy copy off the behavior's column object for this column. This will persist it for the duration of the app session. At end of editing, if and only if there is now a column filter (text is not blank), we copy it to the column filter's subtree node in the filter tree.
 *
 * @constructor
 * @extends ComboBox
 */
var FilterBox = ComboBox.extend('FilterBox', {

    initialize: function() {

        // look in the filter, under column filters, for a column filter for this column
        var root = this.grid.behavior.filter,
            columnFilters = root && root.columnFilters;

        if (!columnFilters) {
            throw 'Column filters not available.';
        }

        var columnName = this.column.name,
            columnFilterSubtree = root.getColumnFilter(columnName) || {},
            columnSchema = root.schema.lookup(columnName) || {};


        // get the operator list from the node, schema, typeOpMap, or root:
        // (This mimics the code in FilterLeaf.js's `getOpMenu` function because the node may not exist yet.)
        this.opMenu =

            // pull operator list from column schema if available
            columnSchema.opMenu ||

            // operator list for the column's type if available
            root.typeOpMap && root.typeOpMap[columnSchema.type || columnFilterSubtree.type] ||

            // default operator list (which itself defaults to `Conditionals.defaultOpMenu`)
            root.opMenu;


        // get the column filter's `menuModes` object -- contains the states of the drop-down option icons:
        this.menuModesSource =

            // first try proxy from last time (because editing may have ended without a column filter to put in the filter tree)
            this.column.menuModes ||

            // ELSE try column filter's `menuModes` WHEN available
            columnFilterSubtree.menuModes ||

            // try use column schema's `menuModes` when defined
            columnSchema.menuModes ||

            // ELSE try the filter default (which itself defaults to operators ON, others OFF; see definition at top of DefaultFilter.js)
            columnFilters.menuModes;

    },

    abortEditing: prototype.cancelEditing,

    /**
     * When there's only one mode defined here, the control area portion of the UI is hidden.
     */
    modes: [
        {
            name: 'operators',
            symbol: '<',
            appendOptions: function(dropdown) {
                if (!dropdown.length) {
                    // Various  operator options and/or optgroups vary per column based on `opMenu`.
                    var opMenuGroups = this.grid.behavior.filter.opMenuGroups;
                    popMenu.build(dropdown, this.opMenu, {
                        group: function(groupName) {
                            return opMenuGroups[groupName];
                        },
                        prompt: null
                    });
                    // This list of conjunctions is an extra and is for all columns. All operator optgroups are classless.
                    var optgroup = document.createElement('optgroup');
                    optgroup.label = 'Conjunctions';
                    optgroup.appendChild(new Option('and', ' and '));
                    optgroup.appendChild(new Option('or', ' or '));
                    optgroup.appendChild(new Option('nor', ' nor '));
                }
            }
        }, {
            name: 'columnNames',
            label: 'Column Names',
            selector: 'optgroup.submenu-columnNames',
            symbol: 'A',
            backgroundColor: '#eff',
            appendOptions: function(optgroup) {
                var columns = this.grid.behavior.columns,
                    x = this.event.gridCell.x;

                while (optgroup.firstElementChild) {
                    optgroup.firstElementChild.remove();
                }

                columns.forEach(function(column, index) {
                    if (index !== x) {
                        var name = column.name,
                            option = new Option(name);
                        option.title = '[' + name + ']\r"' + column.header + '"';
                        optgroup.appendChild(option);
                    }
                });
                return columns.length;
            }
        }, {
            name: 'distinctValues',
            label: 'Distinct Values',
            selector: 'optgroup.submenu-distinctValues',
            symbol: '#',
            backgroundColor: '#fef',
            appendOptions: ComboBox.prototype.modes[0].appendOptions
        }
    ],

    /**
     * Write the `menuModes` proxy to the filter tree's column filter subtree node.
     * We look up the node again here because it might be new; or may have been deleted & recreated during editing.
     */
    hideEditor: function() {
        // look in the filter, under column filters, for a column filter for this column
        var filter = this.grid.behavior.filter,
            columnName = this.column.name,
            columnFilterSubtree = filter.getColumnFilter(columnName);

        if (columnFilterSubtree) {
            // write back to filter-tree node for persisting with getState
            columnFilterSubtree.menuModes = this.menuModes;
        }

        this.column.menuModes = this.menuModes;

        ComboBox.prototype.hideEditor.call(this);
    },

    keyup: function(e) {
        if (e) {
            prototype.keyup.call(this, e);

            if (this.grid.properties.filteringMode === 'immediate') {
                this.saveEditorValue(this.getEditorValue());
                this.moveEditor();
            }
        }
    },

    insertText: function(e) {
        var start = this.selectionStart,
            end = this.selectionEnd,
            dropdown = this.dropdown,
            operator = dropdown.value,
            option = dropdown.options[dropdown.selectedIndex],
            optgroup = option.parentElement,
            isOperator = !(optgroup.tagName === 'OPTGROUP' && optgroup.className);

        this.input.focus();

        if (start === end && isOperator) {
            var parser = this.grid.behavior.filter.parserCQL,
                cql = this.input.value,
                position = parser.getOperatorPosition(cql, this.selectionStart, operator);

            start = position.start;
            end = position.end;

            // prepend space to operator as needed
            if (
                start > 0 && // not at very beginning? and...
                !/\s/.test(cql[start - 1]) // no white space before operator?
            ) {
                operator = ' ' + operator;
            }

            // append space to operator as needed
            if (
                end === cql.length || // at very end? or...
                !/\s/.test(cql[end]) // no white space after operator?
            ) {
                operator += ' ';
            }
        }

        // insert the drop-down text at the insertion point or over the selected text
        this.input.setRangeText(operator, start, end, 'end');

        // close the drop-down
        this.toggleDropDown();
    },

    saveEditorValue: function(value) {
        prototype.saveEditorValue.call(this, value);
        this.grid.behavior.applyAnalytics();
    }

});


module.exports = FilterBox;

},{"./CellEditor":58,"./ComboBox":60,"pop-menu":44}],63:[function(require,module,exports){
'use strict';

var Textfield = require('./Textfield');

/**
 * Functions well in Chrome, Safari, Firefox, and Internet Explorer.
 * @constructor
 * @extends Textfield
 */
var Number = Textfield.extend('Number', {

    initialize: function(grid) {
        this.localizer = grid.localization.get('number');
    }

});

module.exports = Number;

},{"./Textfield":66}],64:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor');

/**
 * @constructor
 * @extends CellEditor
 */
var Slider = CellEditor.extend('Slider', {

    template: '<input type="range" lang="{{locale}}" style="{{style}}">'

});

module.exports = Slider;

},{"./CellEditor":58}],65:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor');

/**
 * @constructor
 * @extends CellEditor
 */
var Spinner = CellEditor.extend('Spinner', {

    template: '<input type="number" lang="{{locale}}" style="{{style}}">'

});

module.exports = Spinner;

},{"./CellEditor":58}],66:[function(require,module,exports){
'use strict';

var CellEditor = require('./CellEditor');
var Localization = require('../lib/Localization');


/**
 * As of spring 2016:
 * Functions well in Chrome, Safari, Firefox, and Internet Explorer.
 * @constructor
 * @extends CellEditor
 */
var Textfield = CellEditor.extend('Textfield', {

    template: '<input type="text" lang="{{locale}}" class="hypergrid-textfield" style="{{style}}">',

    initialize: function() {
        this.input.style.textAlign = this.event.getCellProperty('halign');
    },

    localizer: Localization.prototype.string,

    selectAll: function() {
        this.input.setSelectionRange(0, this.input.value.length);
    }
});

module.exports = Textfield;

},{"../lib/Localization":113,"./CellEditor":58}],67:[function(require,module,exports){
/**
 * @module cellEditors
 */

'use strict';

/**
 *
 * @param {Hypergrid} grid
 * @param {boolean} [privateRegistry=false] - This instance will use a private registry.
 * @constructor
 */
function CellEditors(grid, privateRegistry) {
    this.grid = grid;

    if (privateRegistry) {
        this.editors = {};
    }

    // preregister the standard cell editors
    if (privateRegistry || !this.get('celleditor')) {
        this.add(require('./CellEditor'));
        this.add(require('./ComboBox'));
        this.add(require('./Color'));
        this.add(require('./Date'));
        this.add(require('./FilterBox'));
        this.add(require('./Number'));
        this.add(require('./Slider'));
        this.add(require('./Spinner'));
        this.add(require('./Textfield'));
    }
}

CellEditors.prototype = {
    constructor: CellEditors.prototype.constructor, // preserve constructor

    /**
     * @summary Register a cell editor constructor.
     * @desc Adds a custom cell editor constructor to the `editors` hash using the provided name (or the class name), converted to all lower case.
     *
     * > All native cell editors are "preregistered" in `editors`..
     *
     * @param {string} [name] - Case-insensitive editor key. If not given, `YourCellEditor.prototype.$$CLASS_NAME` is used.
     *
     * @param {YourCellEditor.prototype.constructor} Constructor - A constructor, typically extended from `CellEditor` (or a descendant therefrom).
     *
     * > Note: `$$CLASS_NAME` can be easily set up by providing a string as the (optional) first parameter (`alias`) in your {@link https://www.npmjs.com/package/extend-me|CellEditor.extend} call.
     *
     * @returns {CellEditor} A newly registered constructor extended from {@link CellEditor}.
     *
     * @memberOf module:cellEditors
     */
    add: function(name, Constructor) {
        if (typeof name === 'function') {
            Constructor = name;
            name = undefined;
        }

        name = name || Constructor.prototype.$$CLASS_NAME;
        name = name && name.toLowerCase();
        this.editors[name] = Constructor;
        return Constructor;
    },

    /**
     * @summary Register a synonym for an existing cell editor constructor.
     * @param {string} synonymName
     * @param {string} existingName
     * @returns {CellEditor} The previously registered constructor this new synonym points to.
     * @memberOf CellEditors.prototype
     */
    addSynonym: function(synonymName, existingName) {
        var cellEditor = this.get(existingName);
        return (this.editors[synonymName] = cellEditor);
    },

    /**
     * @param {string} name - Name of a registered editor.
     * @returns {CellEditor} A registered constructor extended from {@link CellEditor}.
     * @memberOf CellEditors.prototype
     */
    get: function(name) {
        return this.editors[name && name.toLowerCase()];
    },

    /**
     * @summary Lookup registered cell editor and return a new instance thereof.
     * @desc Note: Must be called with the Hypergrid object as context!
     * @returns {CellEditor} New instance of the named cell editor.
     * @param {string} name - Name of a registered editor.
     * @param {string} [options] - Properties to add to the instantiated editor primarily for mustache's use.
     * @memberOf CellEditors.prototype
     */
    create: function(name, options) {
        var cellEditor,
            Constructor = this.get(name);

        if (Constructor) {
            if (Constructor.abstract) {
                throw 'Attempt to instantiate an "abstract" cell editor class.';
            }
            cellEditor = new Constructor(this.grid, options);
        }

        return cellEditor;
    },

    /**
     * The cell editor registry containing all the "preregistered" cell editor constructors.
     * @private
     * @memberOf CellEditors.prototype
     */
    editors: {}
};

module.exports = CellEditors;

},{"./CellEditor":58,"./Color":59,"./ComboBox":60,"./Date":61,"./FilterBox":62,"./Number":63,"./Slider":64,"./Spinner":65,"./Textfield":66}],68:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var Button = CellRenderer.extend('Button', {

    /**
     * @summary The default cell rendering function for a button cell.
     * @implements paintFunction
     * @memberOf Button.prototype
     */
    paint: function(gc, config) {
        var val = config.value,
            c = config.x,
            r = config.y,
            bounds = config.bounds,
            x = bounds.x + 1,
            y = bounds.y + 1,
            width = bounds.width - 1 - config.lineWidth,
            height = bounds.height - 1 - config.lineWidth,
            radius = height / 2,
            arcGradient = gc.createLinearGradient(x, y, x, y + height);

        if (config.mouseDown) {
            arcGradient.addColorStop(0, '#B5CBED');
            arcGradient.addColorStop(1, '#4d74ea');
        } else {
            arcGradient.addColorStop(0, '#ffffff');
            arcGradient.addColorStop(1, '#aaaaaa');
        }

        // draw the background
        gc.fillStyle = config.backgroundColor;
        gc.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);

        // draw the capsule
        gc.fillStyle = arcGradient;
        gc.strokeStyle = '#000000';
        this.roundRect(gc, x, y, width, height, radius, arcGradient, true);

        var ox = (width - config.getTextWidth(gc, val)) / 2;
        var oy = (height - config.getTextHeight(gc.font).descent) / 2;

        // draw the text
        gc.textBaseline = 'middle';
        gc.fillStyle = '#333333';
        gc.font = height - 2 + 'px sans-serif';
        config.backgroundColor = 'rgba(0,0,0,0)';
        gc.fillText(val, x + ox, y + oy);

        //identify that we are a button
        config.buttonCells[c + ',' + r] = true;
    }
});

module.exports = Button;



},{"./CellRenderer":69}],69:[function(require,module,exports){
'use strict';

var Base = require('../Base');

/** @typedef paintFunction
 * @type {function}
 * @this {CellEditor}
 * @param {CanvasGraphicsContext} gc
 * @param {object} config
 * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
 * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
 * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
 * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
 * @param {number} config.y - the vertical grid coordinate measured from top header row
 */

/** @constructor
 * @desc Instances of `CellRenderer` are used to render the 2D graphics context within the bound of a cell. Extend this base class to implement your own cell renderer
 *
 *
 * See also {@tutorial cell-renderer}.
 */
var CellRenderer = Base.extend('CellRenderer', {
    /**
     * @desc An empty implementation of a cell renderer, see [the null object pattern](http://c2.com/cgi/wiki?NullObject).
     * @implements paintFunction
     * @memberOf CellRenderer.prototype
     */
    paint: function(gc, config) {},

    /**
     * @desc A simple implementation of rounding a cell.
     * @param {CanvasGraphicsContext} gc
     * @param {number} x - the x grid coordinate of my origin
     * @param {number} y - the y grid coordinate of my origin
     * @param {number} width - the width I'm allowed to draw within
     * @param {number} height - the height I'm allowed to draw within
     * @param {number} radius
     * @param {number} fill
     * @param {number} stroke
     * @memberOf CellRenderer.prototype
     */
    roundRect: function(gc, x, y, width, height, radius, fill, stroke) {

        if (!stroke) {
            stroke = true;
        }
        if (!radius) {
            radius = 5;
        }
        gc.beginPath();
        gc.moveTo(x + radius, y);
        gc.lineTo(x + width - radius, y);
        gc.quadraticCurveTo(x + width, y, x + width, y + radius);
        gc.lineTo(x + width, y + height - radius);
        gc.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        gc.lineTo(x + radius, y + height);
        gc.quadraticCurveTo(x, y + height, x, y + height - radius);
        gc.lineTo(x, y + radius);
        gc.quadraticCurveTo(x, y, x + radius, y);
        gc.closePath();
        if (stroke) {
            gc.stroke();
        }
        if (fill) {
            gc.fill();
        }
        gc.closePath();
    }
});

CellRenderer.abstract = true; // don't instantiate directly

module.exports = CellRenderer;

},{"../Base":49}],70:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var ErrorCell = CellRenderer.extend('ErrorCell', {

    /**
     * @summary Writes error message into cell.
     *
     * @desc This function is guaranteed to be called as follows:
     *
     * ```javascript
     * gc.save();
     * gc.beginPath();
     * gc.rect(x, y, width, height);
     * gc.clip();
     * behavior.getCellProvider().renderCellError(gc, message, x, y, width, height);
     * gc.restore();
     * ```
     *
     * Before doing anything else, this function should clear the cell by setting `gc.fillStyle` and calling `gc.fill()`.
     *
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {number} config.x - the "translated" index into the `behavior.allColumns` array
     * @param {number} config.normalizedY - the vertical grid coordinate normalized to first data row
     * @param {number} config.untranslatedX - the horizontal grid coordinate measured from first data column
     * @param {number} config.y - the vertical grid coordinate measured from top header row
     * @memberOf ErrorCell.prototype
     */
    paint: function(gc, config, message) {
        //var images = require('../../images/index');
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        // clear the cell
        // (this makes use of the rect path defined by the caller)
        gc.fillStyle = '#FFD500';
        gc.fill();
        // render cell border
        //gc.strokeStyle = gc.createPattern(images.caution, 'repeat'); // Causes Error
        gc.lineWidth = 5;
        gc.beginPath();
        gc.moveTo(x, y); // caution: do not use rect() here because Chrome does not clip its stroke properly
        gc.lineTo(x + width, y);
        gc.lineTo(x + width, y + height);
        gc.lineTo(x, y + height);
        gc.lineTo(x, y);
        gc.stroke();
        // adjust clip region to prevent text from rendering over right border should it overflow
        gc.beginPath();
        gc.rect(x, y, width - 2, height);
        gc.clip();
        // render message text
        gc.fillStyle = '#A00';
        gc.textAlign = 'start';
        gc.textBaseline = 'middle';
        gc.font = 'bold 6pt "arial narrow", verdana, geneva';
        gc.fillText(message, x + 4, y + height / 2 + 0.5);
    }
});

module.exports = ErrorCell;

},{"./CellRenderer":69}],71:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var LastSelection = CellRenderer.extend('LastSelection', {

    /**
     * @desc A rendering of the last Selection Model
     * @implements paintFunction
     * @memberOf LastSelection.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        // var focusLineStep =  [
        //     [5, 5],
        //     [0, 1, 5, 4],
        //     [0, 2, 5, 3],
        //     [0, 3, 5, 2],
        //     [0, 4, 5, 1],
        //     [0, 5, 5, 0],
        //     [1, 5, 4, 0],
        //     [2, 5, 3, 0],
        //     [3, 5, 2, 0],
        //     [4, 5, 1, 0]
        // ];
        gc.rect(x + 1, y, width - 2, height - 2);
        gc.fillStyle = config.selectionRegionOverlayColor;
        gc.fill();
        gc.lineWidth = 1;
        gc.strokeStyle = config.selectionRegionOutlineColor;

        // animate the dashed line a bit here for fun

        gc.stroke();

        // gc.rect(x, y, width, height);
        //
        // gc.strokeStyle = 'white';
        //
        // //animate the dashed line a bit here for fun
        // gc.setLineDash(focusLineStep[Math.floor(10 * (Date.now() / 300 % 1)) % focusLineStep.length]);
        //
        // gc.stroke();
    }
});

module.exports = LastSelection;



},{"./CellRenderer":69}],72:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var SimpleCell = CellRenderer.extend('SimpleCell', {

    /**
     * @summary The default cell rendering function for rendering a vanilla cell.
     * @desc Great care has been taken in crafting this function as it needs to perform extremely fast. Reads on the gc object are expensive but not quite as expensive as writes to it. We do our best to avoid writes, then avoid reads. Clipping bounds are not set here as this is also an expensive operation. Instead, we truncate overflowing text and content by filling a rectangle with background color column by column instead of cell by cell.  This column by column fill happens higher up on the stack in a calling function from fin-hypergrid-renderer.  Take note we do not do cell by cell border renderering as that is expensive.  Instead we render many fewer gridlines after all cells are rendered.
     * @implements paintFunction
     * @memberOf SimpleCell.prototype
     */
    paint: function(gc, config) {
        var val = config.value,
            bounds = config.bounds,
            x = bounds.x,
            y = bounds.y,
            width = bounds.width,
            height = bounds.height,
            leftPadding = 2; //TODO: fix this

        var leftIcon, rightIcon, centerIcon, ixoffset, iyoffset, font;

        // setting gc properties are expensive, let's not do it needlessly

        if (val && val.constructor === Array) {
            leftIcon = val[0];
            rightIcon = val[2];
            val = val[1];
            if (val && typeof val === 'object') {
                if (val.constructor.name === 'HTMLImageElement') { // must be an image
                    centerIcon = val;
                    val = null;
                }
            }
            if (leftIcon && leftIcon.nodeName !== 'IMG') {
                leftIcon = null;
            }
            if (rightIcon && rightIcon.nodeName !== 'IMG') {
                rightIcon = null;
            }
            if (centerIcon && centerIcon.nodeName !== 'IMG') {
                centerIcon = null;
            }
        }

        if (config.isUserDataArea) {
            val = valOrFunc(val, config, config.calculator);
        }

        val = config.formatValue(val);

        font = config.isSelected ? config.foregroundSelectionFont : config.font;

        if (gc.font !== font) {
            gc.font = font;
        }

        if (gc.textAlign !== 'left') {
            gc.textAlign = 'left';
        }
        if (gc.textBaseline !== 'middle') {
            gc.textBaseline = 'middle';
        }

        // fill background only if our bgColor is populated or we are a selected cell
        var backgroundColor, hover, hoverColor, selectColor,
            colors = [];

        if (config.isCellHovered && config.hoverCellHighlight.enabled) {
            hoverColor = config.hoverCellHighlight.backgroundColor;
        } else if (config.isRowHovered && (hover = config.hoverRowHighlight).enabled) {
            hoverColor = config.isGridColumn || !hover.header || hover.header.backgroundColor === undefined ? hover.backgroundColor : hover.header.backgroundColor;
        } else if (config.isColumnHovered && (hover = config.hoverColumnHighlight).enabled) {
            hoverColor = config.isGridRow || !hover.header || hover.header.backgroundColor === undefined ? hover.backgroundColor : hover.header.backgroundColor;
        }
        if (alpha(hoverColor) < 1) {
            if (config.isSelected) {
                selectColor = valOrFunc(config.backgroundSelectionColor, config);
            }
            if (alpha(selectColor) < 1) {
                backgroundColor = valOrFunc(config.backgroundColor, config);
                if (alpha(backgroundColor) > 0) {
                    colors.push(backgroundColor);
                }
            }
            if (selectColor !== undefined) {
                colors.push(selectColor);
            }
        }
        if (hoverColor !== undefined) {
            colors.push(hoverColor);
        }
        layerColors(gc, colors, x, y, width, height);

        // draw text
        var theColor = valOrFunc(config.isSelected ? config.foregroundSelectionColor : config.color, config);
        if (gc.fillStyle !== theColor) {
            gc.fillStyle = theColor;
            gc.strokeStyle = theColor;
        }

        if (config.isHeaderRow && config.headerTextWrapping) {
            this.renderMultiLineText(gc, config, val);
        } else {
            this.renderSingleLineText(gc, config, val);
        }

        var iconWidth = 0;
        if (leftIcon) {
            iyoffset = Math.round((height - leftIcon.height) / 2);
            gc.drawImage(leftIcon, x + leftPadding, y + iyoffset);
            iconWidth = Math.max(leftIcon.width + 2);
        }
        if (rightIcon && width > 1.75 * height) {
            iyoffset = Math.round((height - rightIcon.height) / 2);
            var rightX = x + width - rightIcon.width;
            if (backgroundColor !== undefined) {
                layerColors(gc, colors, rightX, y, rightIcon.width, height);
            } else {
                gc.clearRect(rightX, y, rightIcon.width, height);
            }
            gc.drawImage(rightIcon, rightX, y + iyoffset);
            iconWidth = Math.max(rightIcon.width + 2);
        }
        if (centerIcon) {
            iyoffset = Math.round((height - centerIcon.height) / 2);
            ixoffset = Math.round((width - centerIcon.width) / 2);
            gc.drawImage(centerIcon, x + width - ixoffset - centerIcon.width, y + iyoffset);
            iconWidth = Math.max(centerIcon.width + 2);
        }
        if (config.cellBorderThickness) {
            gc.beginPath();
            gc.rect(x, y, width, height);
            gc.lineWidth = config.cellBorderThickness;
            gc.strokeStyle = config.cellBorderStyle;

            // animate the dashed line a bit here for fun

            gc.stroke();
            gc.closePath();
        }
        config.minWidth = config.minWidth + 2 * (iconWidth);
    },

    /**
     * @summary Renders single line text.
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {*} val - The text to render in the cell.
     * @memberOf SimpleCell.prototype
     */
    renderMultiLineText: function(gc, config, val) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;
        var lines = fitText(gc, config, val, width);
        if (lines.length === 1) {
            return this.renderSingleLineText(gc, config, squeeze(val));
        }

        var colHEdgeOffset = config.cellPadding,
            halignOffset = 0,
            valignOffset = config.voffset,
            halign = config.halign,
            textHeight = config.getTextHeight(config.font).height;

        switch (halign) {
            case 'right':
                halignOffset = width - colHEdgeOffset;
                break;
            case 'center':
                halignOffset = width / 2;
                break;
            case 'left':
                halignOffset = colHEdgeOffset;
                break;
        }

        var hMin = 0, vMin = Math.ceil(textHeight / 2);

        valignOffset += Math.ceil((height - (lines.length - 1) * textHeight) / 2);

        halignOffset = Math.max(hMin, halignOffset);
        valignOffset = Math.max(vMin, valignOffset);

        gc.save(); // define a clipping region for cell
        gc.beginPath();
        gc.rect(x, y, width, height);
        gc.clip();

        gc.textAlign = halign;

        for (var i = 0; i < lines.length; i++) {
            gc.fillText(lines[i], x + halignOffset, y + valignOffset + (i * textHeight));
        }

        gc.restore(); // discard clipping region
    },

    /**
     * @summary Renders single line text.
     * @param {CanvasGraphicsContext} gc
     * @param {object} config
     * @param {Rectangle} config.bounds - The clipping rect of the cell to be rendered.
     * @param {*} val - The text to render in the cell.
     * @memberOf SimpleCell.prototype
     */
    renderSingleLineText: function(gc, config, val) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;
        var colHEdgeOffset = config.cellPadding,
            halignOffset = 0,
            valignOffset = config.voffset,
            halign = config.halign,
            isCellHovered = config.isCellHovered,
            isLink = config.link;

        var fontMetrics = config.getTextHeight(config.font);
        var textWidth = config.getTextWidth(gc, val);

        //we must set this in order to compute the minimum width
        //for column autosizing purposes
        config.minWidth = textWidth + (2 * colHEdgeOffset);

        switch (halign) {
            case 'right':
                //textWidth = config.getTextWidth(gc, config.value);
                halignOffset = width - colHEdgeOffset - textWidth;
                break;
            case 'center':
                //textWidth = config.getTextWidth(gc, config.value);
                halignOffset = (width - textWidth) / 2;
                break;
            case 'left':
                halignOffset = colHEdgeOffset;
                break;
        }

        halignOffset = Math.max(0, halignOffset);
        valignOffset += Math.ceil(height / 2);

        if (val !== null) {
            gc.fillText(val, x + halignOffset, y + valignOffset);
        }

        if (isCellHovered) {
            gc.beginPath();
            if (isLink) {
                underline(config, gc, val, x + halignOffset, y + valignOffset + Math.floor(fontMetrics.height / 2), 1);
                gc.stroke();
            }
            gc.closePath();
        }
        if (config.strikeThrough === true) {
            gc.beginPath();
            strikeThrough(config, gc, val, x + halignOffset, y + valignOffset + Math.floor(fontMetrics.height / 2), 1);
            gc.stroke();
            gc.closePath();
        }
    }
});


function fitText(gc, config, string, width) {
    return findLines(gc, config, squeeze(string).split(' '), width);
}

function findLines(gc, config, words, width) {

    if (words.length === 1) {
        return words;
    }

    // starting with just the first word…
    var stillFits, line = [words.shift()];
    while (
        // so lone as line still fits within current column…
    (stillFits = config.getTextWidth(gc, line.join(' ')) < width)
    // …AND there are more words available…
    && words.length
        ) {
        // …add another word to end of line and retest
        line.push(words.shift());
    }

    if (
        !stillFits // if line is now too long…
        && line.length > 1 // …AND is multiple words…
    ) {
        words.unshift(line.pop()); // …back off by (i.e., remove) one word
    }

    line = [line.join(' ')];

    if (words.length) { // if there's anything left…
        line = line.concat(findLines(gc, config, words, width)); // …break it up as well
    }

    return line;
}

// trim string; then reduce all runs of multiple spaces to a single space
function squeeze(string) {
    return (string + '').trim().replace(/\s\s+/g, ' ');
}

function strikeThrough(config, gc, text, x, y, thickness) {
    var fontMetrics = config.getTextHeight(config.font);
    var width = config.getTextWidth(gc, text);
    y -= fontMetrics.height * 0.4;

    switch (gc.textAlign) {
        case 'center':
            x -= width / 2;
            break;
        case 'right':
            x -= width;
            break;
    }

    //gc.beginPath();
    gc.lineWidth = thickness;
    gc.moveTo(x + 0.5, y + 0.5);
    gc.lineTo(x + width + 0.5, y + 0.5);
}

function underline(config, gc, text, x, y, thickness) {
    var width = config.getTextWidth(gc, text);

    switch (gc.textAlign) {
        case 'center':
            x -= width / 2;
            break;
        case 'right':
            x -= width;
            break;
    }

    //gc.beginPath();
    gc.lineWidth = thickness;
    gc.moveTo(x + 0.5, y + 0.5);
    gc.lineTo(x + width + 0.5, y + 0.5);
}

function layerColors(gc, colors, x, y, width, height) {
    colors.forEach(function(color) {
        gc.fillStyle = color;
        gc.fillRect(x, y, width, height);
    });
}

function valOrFunc(vf, config, calculator) {
    var result = vf;
    if (config.isGridColumn && config.isGridRow && config.dataRow) {
        calculator = (typeof vf)[0] === 'f' && vf || calculator;
        if (calculator) {
            result = calculator(config.dataRow, config.name);
        }
    }
    return result || result === 0 || result === false ? result : '';
}

function alpha(cssColorSpec) {
    if (cssColorSpec === undefined) {
        // undefined so not visible; treat as transparent
        return 0;
    }

    var matches = cssColorSpec.match(alpha.regex);

    if (matches === null) {
        // an opaque color (a color spec with no alpha channel)
        return 1;
    }

    var A = matches[4];

    if (A === undefined) {
        // cssColorSpec must have been 'transparent'
        return 0;
    }

    return Number(A);
}

alpha.regex = /^(transparent|((RGB|HSL)A\(.*,\s*([\d\.]+)\)))$/i;

module.exports = SimpleCell;

},{"./CellRenderer":69}],73:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var Slider = CellRenderer.extend('Slider', {

    /**
     * @desc Emerson's paint function for a slider button. currently the user cannot interact with it
     * @implements paintFunction
     * @memberOf Slider.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;
        gc.strokeStyle = 'white';
        var val = config.value;
        var radius = height / 2;
        var offset = width * val;
        var bgColor = config.isSelected ? config.backgroundColor : '#333333';
        var btnGradient = gc.createLinearGradient(x, y, x, y + height);
        btnGradient.addColorStop(0, bgColor);
        btnGradient.addColorStop(1, '#666666');
        var arcGradient = gc.createLinearGradient(x, y, x, y + height);
        arcGradient.addColorStop(0, '#aaaaaa');
        arcGradient.addColorStop(1, '#777777');
        gc.fillStyle = btnGradient;
        this.roundRect(gc, x, y, width, height, radius, btnGradient);
        if (val < 1.0) {
            gc.fillStyle = arcGradient;
        } else {
            gc.fillStyle = '#eeeeee';
        }
        gc.beginPath();
        gc.arc(x + Math.max(offset - radius, radius), y + radius, radius, 0, 2 * Math.PI);
        gc.fill();
        gc.closePath();
        config.minWidth = 100;
    }
});

module.exports = Slider;

},{"./CellRenderer":69}],74:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var SparkBar = CellRenderer.extend('SparkBar', {

    /**
     * @desc A simple implementation of a sparkline, because it's a barchart we've changed the name ;).
     * @implements paintFunction
     * @memberOf SparkBar.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        gc.beginPath();
        var val = config.value;
        if (!val || !val.length) {
            return;
        }
        var count = val.length;
        var eWidth = width / count;
        var fgColor = config.isSelected ? config.foregroundSelectionColor : config.color;
        if (config.backgroundColor || config.isSelected) {
            gc.fillStyle = config.isSelected ? 'blue' : config.backgroundColor;
            gc.fillRect(x, y, width, height);
        }
        gc.fillStyle = fgColor;
        for (var i = 0; i < val.length; i++) {
            var barheight = val[i] / 110 * height;
            gc.fillRect(x + 5, y + height - barheight, eWidth * 0.6666, barheight);
            x += eWidth;
        }
        gc.closePath();
        config.minWidth = count * 10;
    }
});

module.exports = SparkBar;

},{"./CellRenderer":69}],75:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var SparkLine = CellRenderer.extend('SparkLine', {

    /**
     * @desc A simple implementation of a sparkline.  see [Edward Tufte sparkline](http://www.edwardtufte.com/bboard/q-and-a-fetch-msg?msg_id=0001OR)
     * @implements paintFunction
     * @memberOf SparkLine.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        gc.beginPath();
        var val = config.value;
        if (!val || !val.length) {
            return;
        }
        var count = val.length;
        var eWidth = width / count;

        var fgColor = config.isSelected ? config.foregroundSelectionColor : config.color;
        if (config.backgroundColor || config.isSelected) {
            gc.fillStyle = config.isSelected ? config.backgroundSelectionColor : config.backgroundColor;
            gc.fillRect(x, y, width, height);
        }
        gc.strokeStyle = fgColor;
        gc.fillStyle = fgColor;
        gc.beginPath();
        var prev;
        for (var i = 0; i < val.length; i++) {
            var barheight = val[i] / 110 * height;
            if (!prev) {
                prev = barheight;
            }
            gc.lineTo(x + 5, y + height - barheight);
            gc.arc(x + 5, y + height - barheight, 1, 0, 2 * Math.PI, false);
            x += eWidth;
        }
        config.minWidth = count * 10;
        gc.stroke();
        gc.closePath();
    }
});

module.exports = SparkLine;

},{"./CellRenderer":69}],76:[function(require,module,exports){
'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var TreeCell = CellRenderer.extend('TreeCell', {

    /**
     * @desc A simple implementation of a tree cell renderer for use mainly with the qtree.
     * @implements paintFunction
     * @memberOf TreeCell.prototype
     */
    paint: function(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height;

        var val = config.value.data;
        var indent = config.value.indent;
        var icon = config.value.icon;

        //fill background only if our bgColor is populated or we are a selected cell
        if (config.backgroundColor || config.isSelected) {
            gc.fillStyle = config.isSelected ? config.backgroundColor : config.backgroundColor;
            gc.fillRect(x, y, width, height);
        }

        if (!val || !val.length) {
            return;
        }
        var valignOffset = Math.ceil(height / 2);

        gc.fillStyle = config.isSelected ? config.backgroundColor : config.backgroundColor;
        gc.fillText(icon + val, x + indent, y + valignOffset);

        var textWidth = config.getTextWidth(gc, icon + val);
        var minWidth = x + indent + textWidth + 10;
        config.minWidth = minWidth;
    }
});

module.exports = TreeCell;

},{"./CellRenderer":69}],77:[function(require,module,exports){
/**
 * @summary API of cell renderer object constructors, plus some access methods.
 * @module cellRenderers
 */

'use strict';

/**
 * @param {boolean} [privateRegistry=false] - This instance will use a private registry.
 * @constructor
 */
function CellRenderers(privateRegistry) {
    if (privateRegistry) {
        this.singletons = {};
    }

    // preregister the standard cell renderers
    if (privateRegistry || !this.get('emptycell')) {
        this.add('EmptyCell', require('./CellRenderer'));
        this.add(require('./Button'));
        this.add(require('./SimpleCell'));
        this.add(require('./SliderCell'));
        this.add(require('./SparkBar'));
        this.add(require('./LastSelection'));
        this.add(require('./SparkLine'));
        this.add(require('./ErrorCell'));
        this.add(require('./TreeCell'));
    }
}

CellRenderers.prototype = {
    constructor: CellRenderers.prototype.constructor, // preserve constructor

    /**
     * @summary Register and instantiate a cell renderer singleton.
     * @desc Adds a custom cell renderer to the `singletons` hash using the provided name (or the class name), converted to all lower case.
     *
     * > All native cell renderers are "preregistered" in `singletons`. Add more by calling `get`.
     *
     * @param {string} [name] - Case-insensitive renderer key. If not given, `YourCellRenderer.prototype.$$CLASS_NAME` is used.
     *
     * @param {CellRenderer} Constructor - A constructor, typically extended from `CellRenderer` (or a descendant therefrom).
     *
     * > Note: `$$CLASS_NAME` can be easily set up by providing a string as the (optional) first parameter (`alias`) in your {@link https://www.npmjs.com/package/extend-me|CellEditor.extend} call.
     *
     * @returns {CellRenderers} A newly registered constructor extended from {@link CellRenderers}.
     *
     * @memberOf CellRenderers.prototype
     */
    add: function(name, Constructor) {
        if (typeof name === 'function') {
            Constructor = name;
            name = undefined;
        }

        name = name || Constructor.prototype.$$CLASS_NAME;
        name = name && name.toLowerCase();
        return (this.singletons[name] = new Constructor);
    },

    /**
     * @summary Register a synonym for an existing cell renderer singleton.
     * @param {string} synonymName
     * @param {string} existingName
     * @returns {CellRenderers} The previously registered constructor this new synonym points to.
     * @memberOf CellRenderers.prototype
     */
    addSynonym: function(synonymName, existingName) {
        var cellRenderer = this.get(existingName);
        return (this.singletons[synonymName] = cellRenderer);
    },

    /**
     * Fetch a registered cell renderer singleton.
     * @param {string} name
     * @returns {CellRenderers} A registered constructor extended from {@link CellRenderers}.
     * @memberOf CellRenderers.prototype
     */
    get: function(name) {
        return this.singletons[name && name.toLowerCase()];
    },

    /**
     * The cell editor registry containing all the "preregistered" cell renderer singletons.
     * @private
     * @memberOf CellRenderers.prototype
     */
    singletons: {}
};


module.exports = CellRenderers;

},{"./Button":68,"./CellRenderer":69,"./ErrorCell":70,"./LastSelection":71,"./SimpleCell":72,"./SliderCell":73,"./SparkBar":74,"./SparkLine":75,"./TreeCell":76}],78:[function(require,module,exports){
'use strict';

var Base = require('../Base');

/**
 * @constructor
 */
var DataModel = Base.extend('DataModel', {
    grid: null,
    initialize: function(grid, options) {
        this.grid = grid;
    },

    changed: function() {
        this.deprecated('changed()', 'grid.behavior.changed()', '1.1.0');
    },

    getPrivateState: function() {
        return this.deprecated('getPrivateState()', 'grid.properties', '1.2.0');
    },

    /**
     * @param {object} config
     * @param {string} declaredRendererName - The proposed cell renderer name (form the render properties).
     * @returns {CellRenderer}
     * @memberOf DataModel.prototype
     */
    getCell: function(config, declaredRendererName) {
        return this.grid.cellRenderers.get(declaredRendererName);
    },

    /**
     * @summary Instantiate a new cell editor.
     * @desc The application developer may override this method to:
     * * Instantiate and return an arbitrary cell editor. The generic implementation here simply returns the declared cell editor. This is `undefined` when there was no such declaration, or if the named cell editor was not registered.
     * * Return `undefined` for no cell editor at all. The cell will not be editable.
     * * Set properties on the instance by passing them in the `options` object. These are applied to the new cell editor object after instantiation but before rendering.
     * * Manipulate the cell editor object (including its DOM elements) after rendering but before DOM insertion.
     *
     * Overriding this method with a null function (that always returns `undefined`) will have the effect of making all cells uneditable.
     *
     * @param {number} columnIndex - Absolute column index. I.e., the position of the column in the data source's original `fields` array, as echoed in `behavior.allColumns[]`.
     * @param {number} rowIndex - Row index of the data row in the currently filtered and sorted list of rows, regardless of vertical scroll position, offset by the number of header rows (all the rows above the first data row including the filter row). I.e., after subtracting out the number of header rows, this is the position of the data row in the `index` array of the data source (i.e., the last data source pipeline).
     * @param {string} declaredEditorName - The proposed cell editor name (from the render properties).
     * @param {object} options - Properties to copy to the new cell editor primarily for mustache's use. Additionally, always includes the following:
     * @param {string} options.format - The value of the `format` render prop. May be `undefined`.
     * @param {object} options.column - For convenience, the column object in `behavior.allColumns[]` to which `columnIndex` refers.
     * @param {Point} options.editPoint - Deprecated; use `options.gridCell`.
     * @param {Point} options.gridCell - The grid coordinates of the cell to edit.
     * @param {number} options.gridCell.x - The horizontal model coordinate of the cell to edit. This is the grid coordinate regardless of horizontal scroll position. I.e., the position of the column in the ordered list of selected columns (`behavior.columns[]`). (This is the coordinate required by {@link Hypergrid#editAt|editAt}.)
     * @param {number} options.gridCell.y - Same as `rowIndex`.
     *
     * @returns {undefined|CellEditor} An object instantiated from the registered cell editor constructor named in `declaredEditorName`. A falsy return means the cell is not editable because the `declaredEditorName` was not registered.
     *
     * @memberOf DataModel.prototype
     */
    getCellEditorAt: function(columnIndex, rowIndex, declaredEditorName, options) {
        return this.grid.cellEditors.create(declaredEditorName, options);
    }

});

module.exports = DataModel;

},{"../Base":49}],79:[function(require,module,exports){
'use strict';

var images = require('../../images');

function FilterRow(grid) {
    this.grid = grid;
    this.behavior = grid.behavior;
    this.dataRow = {}; // for meta data (__HEIGHT)
}

FilterRow.prototype = {
    constructor: FilterRow.prototype.constructor,

    type: 'filter',

    getRowCount: function() {
        return this.grid.isShowFilterRow() ? 1 : 0;
    },

    getValue: function(x, y) {
        checkForColumnFilters.call(this);

        var column = this.behavior.getColumn(x),
            result = this.behavior.filter.getColumnFilterState(column.name) || '';

        result = [null, result, images.filter(result.length)];

        return result;
    },

    setValue: function(x, y, value) {
        checkForColumnFilters.call(this);

        var column = this.behavior.getColumn(x);
        this.behavior.filter.setColumnFilterState(column.name, value);
    },

    getRow: function(y) {
        return this.dataRow;
    }
};

function checkForColumnFilters() {
    if (!this.behavior.filter.getColumnFilterState) {
        throw new this.behavior.HypergridError('Column filters not available.');
    }
}

module.exports = FilterRow;

},{"../../images":4}],80:[function(require,module,exports){
'use strict';

function HeaderRow(grid) {
    this.grid = grid;
    this.behavior = grid.behavior;
    this.dataRow = {}; // for meta data (__HEIGHT)
}

HeaderRow.prototype = {
    constructor: HeaderRow.prototype.constructor,

    type: 'header',

    getRowCount: function() {
        return this.grid.isShowHeaderRow() ? 1 : 0;
    },

    getValue: function(x, y) {
        var column = this.behavior.getColumn(x),
            result = column.header || column.name, // uses field name when header undefined
            sortString = this.behavior.dataModel.getSortImageForColumn(x),
            groups;

        if (sortString) {
            // if grouped header, prepend group headers to sort direction indicator
            if ((groups = result.lastIndexOf(this.behavior.groupHeaderDelimiter) + 1)) {
                sortString = result.substr(0, groups) + sortString;
                result = result.substr(groups);
            }

            // prepend sort direction indicator to column header
            result = sortString + result;
        }

        return result;
    },

    setValue: function(x, y, value) {
        this.behavior.getColumn(x).header = value;
    },

    getRow: function(y) {
        return this.dataRow;
    }
};

module.exports = HeaderRow;

},{}],81:[function(require,module,exports){
'use strict';

var DataModel = require('./DataModel');
var DataSourceOrigin = require('../dataSources/DataSourceOrigin');

/** @typedef {object} dataSourcePipelineObject
 * @property {string} type - A "DataSourceOrigin" style constructor name.
 * @property {*} [options] - When defined, passed as 2nd argument to constructor.
 * @property {string} [parent] - Defines a branch off the main sequence.
 */

/**
 * @implements dataSourceHelperAPI
 * @desc This is a simple "null" helper API implementation with only a null `properties` method is defined.
 * @see {@link http://c2.com/cgi/wiki?NullObject}
 * @memberOf dataModels.JSON
 * @inner
 */
var nullDataSourceHelperAPI = {
    properties: function(properties) {
        var result,
            isGetter = 'getPropName' in properties;

        if (isGetter) {
            // All props are undefined in this null API regardless of their name; and
            // undefined props return `null` as per interface definition.
            result = null;
        }

        return result;
    }
};

/**
 * @name dataModels.JSON
 * @constructor
 * @extends DataModel
 */
var JSON = DataModel.extend('dataModels.JSON', {

    initialize: function(grid, options) {
        this.reset(options);
    },

    /**
     * Override to use a different origin.
     * @type(DataSourceBase}
     */
    DataSourceOrigin: DataSourceOrigin,

    /**
     * @type {dataSourcePipelineObject[][]}
     * @summary Pipeline stash push-down list.
     * @desc The pipeline stash may be shared or instanced. This is the shared stash. An instance may override this with an instance stash variable (of the same name). See {@link dataModels.JSON.prototype#getPipelineSchemaStash}.
     * @memberOf dataModels.JSON.prototype
     */
    pipelineSchemaStash: [],

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {object} [options]
     */
    reset: function(options) {
        this.selectedData = [];

        /**
         * @summary Hash of data source helper APIs.
         * @desc Keyed by data source type. An API is required by data sources with an `api` property.
         * @see {@link dataModels.JSON/updateDataSources}
         * @type {object}
         */
        this.api = {};

        delete this.pipelineSchemaStash; // remove existing "own" version if any

        this.source = new this.DataSourceOrigin(options.data, options.schema);

        this.setPipeline();
        //Register Defaults
        this.registerHelperAPI('filter');
        this.registerHelperAPI('sorter');
    },

    /**
     * @summary The default data sources for a new pipeline when none are give.
     * @desc For now Filtering is hardcoded in the grid.
     * In the future, this will likely be empty (unless overridden by application developer for his own purposes).
     * @type {pipelineSchema}
     * @memberOf dataModels.JSON.prototype
     */
    defaultPipelineSchema: [],

    clearSelectedData: function() {
        this.selectedData.length = 0;
    },

    /**
     * @deprecated As of v1.0.7, reference the `dataSource` property instead.
     * @returns {*}
     */
    getDataSource: function() {
        return this.deprecated('getDataSource()', 'dataSource', '1.0.7');
    },

    getData: function() {
        return this.source.data;
    },

    /**
     * @deprecated As of v1.1.0, use getIndexedData
     */
    getFilteredData: function() {
        return this.deprecated('getFilteredData()', 'getIndexedData()', '1.2.0', arguments);
    },

    getIndexedData: function() {
        var ds = this.dataSource;
        var count = ds.getRowCount();
        var result = new Array(count);
        for (var y = 0; y < count; y++) {
            result[y] = ds.getRow(y);
        }
        return result;
    },

    /**
     * @param {number} x - Data column coordinate.
     * @param {number} y - Data row coordinate.
     * @memberOf dataModels.JSON.prototype
     */
    getValue: function(x, y) {
        if (this.hasHierarchyColumn()) {
            if (x === -2) {
                x = 0;
            }
        } else if (this.isDrillDown()) {
            x += 1;
        }
        return this.dataSource.getValue(x, y);
    },

    /**
     * @param {number} y - Data row coordinate.
     * @returns {*}
     */
    getDataIndex: function(y) {
        return this.dataSource.getDataIndex(y);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {number} x - Data column coordinate.
     * @param {number} r - Grid row coordinate.
     * @param value
     */
    setValue: function(x, r, value) {
        if (this.hasHierarchyColumn()) {
            if (x === -2) {
                x = 0;
            }
        } else if (this.isDrillDown()) {
            x += 1;
        }
        this.dataSource.setValue(x, r, value);
    },

    /**
     * @deprecated As of v1.1.0, use `this.grid.behavior.getColumnProperties(x)` instead.
     * @memberOf dataModels.JSON.prototype
     * @param {number} x - Data column coordinate.
     * @returns {*}
     */
    getColumnProperties: function(x) {
        //access directly because we want it ordered
        return this.deprecated('getColumnProperties(x)', 'grid.behavior.getColumnProperties(x)', '1.2.0', arguments);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {number}
     */
    getColumnCount: function() {
        var showTree = this.grid.properties.showTreeColumn === true;
        var offset = (this.isDrillDown() && !showTree) ? -1 : 0;
        return this.dataSource.getColumnCount() + offset;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {number}
     */
    getRowCount: function() {
        return this.dataSource.getRowCount();
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {string[]}
     */
    getHeaders: function() {
        return getSchemaPropArr.call(this, 'header', 'getHeaders');
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {string[]} headers
     */
    setHeaders: function(headers) {
        this.dataSource.setHeaders(headers);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param {string[]} fields
     */
    setFields: function(fields) {
        this.dataSource.setFields(fields);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {string[]}
     */
    getFields: function() {
        return getSchemaPropArr.call(this, 'name', 'getFields');
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {string[]}
     */
    getCalculators: function() {
        return getSchemaPropArr.call(this, 'calculator', 'getCalculators');
    },

    /**
     * @memberOf dataModels.JSON.prototype
     */
    reindex: function(options) {
        selectedDataRowsBackingSelectedGridRows.call(this);

        this.pipeline.forEach(function(dataSource) {
            if (dataSource) {
                if (dataSource.apply) {
                    dataSource.apply(options);
                }
            }
        });

        reselectGridRowsBackedBySelectedDataRows.call(this);
    },

    /**
     * @summary Set or reset grid data.
     * See {@link DataSourceOrigin#setData} for details.
     * @memberOf dataModels.JSON.prototype
     */
    setData: function(dataSource, schema) {
        this.source.setData(dataSource, schema);
    },

    /** @typedef pipelineSchema
     * @type {DataSourceBase[]}
     * @summary Describes a new pipeline.
     * @desc Consists of an ordered list of data source constructors, descendants of `DataSourceBase`.
     * May contain `undefined` elements, which are ignored.
     */

    /**
     * @summary Instantiates the data source pipeline.
     * @desc Each new pipe is created from the list of supplied constructors, each taking a reference to the previous data source in the pipeline.
     *
     * A reference to each new pipe is added to `this.sources` dataModel using the pipe's derived name.
     *
     * Will clear out any filtering and sorting state.
     *
     * The last pipe is assigned the synonym `this.dataSource`.
     * @param {pipelineSchema} [DataSources] - New pipeline description. If not given, uses the default {@link dataModels.JSON#DataSources|this.defaultPipelineSchema}.
     * @param {object} [options] - Takes first argument position when `DataSources` omitted.
     * @param {string} [options.stash] - See {@link dataModels.JSON.prototype#getPipelineSchemaStash}. If given, saves the currently defined pipeline onto the indicated stash stack and then resets it with the given `DataSources`.
     * @memberOf dataModels.JSON.prototype
     */
    setPipeline: function(DataSources, options) {
        if (!Array.isArray(DataSources)) {
            options = DataSources;
            DataSources = undefined;
        }

        if (options && options.stash) {
            this.getPipelineSchemaStash(options.stash).push(this.DataSources);
        }

        var dataSource = this.source;

        /**
         * @summary Currently defined pipeline.
         * @desc Each instance has its own pipeline.
         * (Pipelines cannot be shared because they contain indexes specific to the data in the grid.)
         * @name pipeline
         * @type {dataSourcePipelineObject[]}
         * @memberOf dataModels.JSON.prototype
         */
        this.pipeline = [];

        DataSources = DataSources || this.defaultPipelineSchema;

        DataSources.forEach(function(DataSource) {
            if (DataSource) {
                dataSource = new DataSource(dataSource);
                this.pipeline.push(dataSource);

                // Ensure a null helper API defined for all data sources that require one
                if (dataSource.type && dataSource.set && !this.api[dataSource.type]) {
                    this.registerHelperAPI(dataSource.type);
                }
            }
        }, this);

        this.updateDataSources();

        this.dataSource = dataSource;

        this.DataSources = DataSources;
    },

    /**
     * Find the last data source in the pipeline of specified type.
     * @param {string} type
     * @returns {DataSourceBase}
     */
    findDataSourceByType: function(type) {
        var dataSource;
        for (var i = this.pipeline.length - 1; i >= 0; i--) {
            dataSource = this.pipeline[i];
            if (dataSource.type === type) {
                return dataSource;
            }
        }
    },

    /**
     * @summary Update data sources with APIs of matching types.
     * @desc Only updates _qualified_ data sources, which include:
     * * those for which an API of the data source's type is defined in `this.api`; and
     * * those that can accept an API (have an `api` property to set).
     * @param {string} [type] - Type of data source to update. If omitted, updates all data sources.
     * @returns {number|object} One of:
     * `type` specified - The number of updated data sources of the specified type.
     * `type` omitted - Hash containing the number of updated data sources by type.
     */
    updateDataSources: function(type) {
        var results = {},
            api = this.api;

        this.pipeline.forEach(function(dataSource) {
            if (
                (!type || dataSource.type === type) &&
                api[dataSource.type]
            ) {
                dataSource.set(api[dataSource.type]);
                results[dataSource.type] = (results[dataSource.type] || 0) + 1;
            }
        });

        return type ? results[type] : results;
    },

    /**
     * @summary The pipeline stash currently in use (either shared or instance).
     * @desc Instance stash is created here when requested and instance doesn't yet have its "own" version.
     * @param {string} [whichStash] - One of:
     * * `'shared'` - Use shared stash.
     * * `'own'' or `'instance'` - Use instance stash, creating it if it does not exist.
     * * `'default'` or `undefined` - Use instance stash if previously created; otherwise use shared stash.
     * @returns The pipeline stash push-down list.
     * @memberOf dataModels.JSON.prototype
     */
    getPipelineSchemaStash: function(whichStash) {
        var stash;
        switch (whichStash) {

            case 'shared':
                stash = DataModel.prototype.stash;
                break;

            case 'own':
            case 'instance':
                if (!this.hasOwnProperty('pipelineSchemaStash')) {
                    this.pipelineSchemaStash = [];
                }
            // disable eslint no-fallthrough
            case 'default':
            case undefined:
                stash = this.pipelineSchemaStash;
                break;

        }
        return stash;
    },

    /**
     * Pops the last stashed pipeline off the stash stack, making it the currently defined pipeline.
     * @param {string} [whichStash] - See {@link dataModels.JSON.prototype#getPipelineSchemaStash}.
     * @memberOf dataModels.JSON.prototype
     */
    unstashPipeline: function(whichStash) {
        var pipelineSchemaStash = this.getPipelineSchemaStash(whichStash);
        if (pipelineSchemaStash.length) {
            this.setPipeline(pipelineSchemaStash.pop());
        }
    },

    /**
     * @deprecated
     * @param {number} [newLength=0]
     * @memberOf dataModels.JSON.prototype
     */
    truncatePipeline: function(newLength) {
        return this.deprecated('truncatePipeline(newLength)', 'setPipeline()', '1.2.0', arguments, 'Build a local pipeline (array of data source constructors) and pass it to setPipeline.');
    },

    isDrillDown: function(event) {
        var colIndex = event && event.gridCell && event.gridCell.x;
        return this.dataSource.isDrillDown(colIndex);
    },

    /**
     * @deprecated
     * @summary Set the top total row(s).
     * @param {dataRowObject[]} totalRows - Array of 0 or more rows containing summary data. Omit to set to empty array.
     * @memberOf dataModels.JSON.prototype
     */
    setTopTotals: function(totalRows) {
        return this.deprecate('setTopTotals(rows)', 'grid.behavior.setTopTotals(rows)', '1.1.0', arguments);
    },

    /**
     * @deprecated
     * @summary Get the top total row(s).
     * @returns {dataRowObject[]}
     * @memberOf dataModels.JSON.prototype
     */
    getTopTotals: function() {
        return this.deprecate('getTopTotals(rows)', 'grid.behavior.getTopTotals(rows)', '1.1.0', arguments);
    },

    /**
     * @deprecated
     * @summary Set the bottom total row(s).
     * @param {dataRowObject[]} totalRows - Array of 0 or more rows containing summary data. Omit to set to empty array.
     * @memberOf dataModels.JSON.prototype
     */
    setBottomTotals: function(totalRows) {
        return this.deprecate('setBottomTotals(rows)', 'grid.behavior.setBottomTotals(rows)', '1.1.0', arguments);
    },

    /**
     * @deprecated
     * @summary Get the bottom total row(s).
     * @returns {dataRowObject[]}
     * @memberOf dataModels.JSON.prototype
     */
    getBottomTotals: function() {
        return this.deprecate('getBottomTotals(rows)', 'grid.behavior.getBottomTotals(rows)', '1.1.0', arguments);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {object[]}
     */
    getActiveColumns: function() {
        return this.grid.behavior.columns.filter(function(column) {
            return column.name !== 'tree';
        });
    },

    /**
     * @deprecated As of v1.0.6, use `this.getActiveColumns` instead.
     * @returns {*}
     */
    getVisibleColumns: function() {
        return this.deprecated('getVisibleColumns()', 'getActiveColumns()', '1.0.6', arguments);
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {object[]}
     */
    getHiddenColumns: function() {
        var visible = this.grid.behavior.columns;
        var all = this.grid.behavior.allColumns;
        var hidden = [];
        for (var i = 0; i < all.length; i++) {
            if (visible.indexOf(all[i]) === -1) {
                hidden.push(all[i]);
            }
        }
        hidden.sort(function(a, b) {
            return a.header < b.header;
        });
        return hidden;
    },
    /**
     * @memberOf dataModels.JSON.prototype
     * @returns {boolean}
     */
    hasHierarchyColumn: function() {
        var showTree = this.grid.properties.showTreeColumn === true;
        return this.isDrillDown() && showTree;
    },

    /**
     * @memberOf dataModels.JSON.prototype
     * @param index
     * @param returnAsString
     * @desc Provides the unicode character used to denote visually if a column is a sorted state
     * @returns {*}
     */
    getSortImageForColumn: function(columnIndex) {
        //Not implemented
    },

    /**
     * @param cell
     * @param event
     * @return {boolean} Clicked in a drill-down column.
     * @memberOf dataModels.JSON.prototype
     */
    cellClicked: function(event) {
        if (arguments.length === 2) {
            return this.deprecated('cellClicked(cell, event)', 'cellClicked(event)', '1.2.0', arguments);
        }
        return this.toggleRow(event.dataCell.y);
    },

    /**
     * @summary Toggle the drill-down control of a the specified row.
     * @desc Operates only on the following rows:
     * * Expandable rows - Rows with a drill-down control.
     * * Revealed rows - Rows not hidden inside of collapsed drill-downs.
     * @param y - Revealed row number. (This is not the row ID.)
     * @param {boolean} [expand] - One of:
     * * `true` - Expand row.
     * * `false` - Collapse row.
     * * `undefined` (or omitted) - Toggle state of row.
     * @returns {boolean|undefined} Changed. Specifically, one of:
     * * `undefined` row had no drill-down control
     * * `true` drill-down changed
     * * `false` drill-down unchanged (was already in requested state)
     * @memberOf dataModels.JSON.prototype
     */
    toggleRow: function(y, expand) {
        //TODO: fire a row toggle event
        var changed;
        if (this.isDrillDown()) {
            changed = this.dataSource.click(y, expand);
            if (changed) {
                this.reindex({rowClick: true});
                this.grid.behavior.changed();
            }
        }
        return changed;
    },

    /**
     * @param {number} r - Data row coordinate.
     * @returns {object|undefined} Returns data row object or `undefined` if a header row.
     * @memberOf dataModels.JSON.prototype
     */
    getRow: function(r) {
        return this.dataSource.getRow(r);
    },

    /**
     * @summary _Getter:_ Return the filter from the data model.
     * @method
     * @returns {dataSourceHelperAPI} The grid's currently assigned filter.
     * @memberOf dataModels.JSON.prototype
     */
    get filter() {
        return this.api.filter;
    },

    /**
     * @summary _Setter:_ Assign a filter to the data model.
     * @method
     * @param {dataSourceHelperAPI|undefined|null} filter - One of:
     * * A filter object - Turns the filter *ON*.
     * * `undefined` or `null` - Turns the filter *OFF.*
     * @memberOf dataModels.JSON.prototype
     */
    set filter(filter) {
        this.registerHelperAPI('filter', filter);
    },
    /**
     * @summary _Getter_
     * @method
     * @returns {sorterAPI} The grid's currently assigned sorter.
     * @memberOf dataModels.JSON.prototype
     */
    get sorter() {
        return this.api.sorter;
    },

    /**
     * @summary _Setter:_ Assign a sorter to the grid.
     * @method
     * @param {sorterAPI|undefined|null} sorter - One of:
     * * A sorter object, turning sorting *ON*.
     * * If `undefined` or `null`, the {@link dataModels.JSON~nullSorter|nullSorter} is reassigned to the grid, turning sorting *OFF.*
     * @memberOf dataModels.JSON.prototype
     */
    set sorter(sorter) {
        this.registerHelperAPI('sorter', sorter);
    },

    /**
     * @summary Register the data source helper API.
     * @desc The API is immediately applied to all data sources in the pipeline of the given type; and reassigned later whenever the pipeline is reset.
     * @param {string} dataSourceType
     * @param {dataSourceHelperAPI|undefined|null} helper - One of:
     * * A filter object - Turns the data source *ON*.
     * * `undefined` or `null` - Turns the data source *OFF.*
     * * A helper API. Turns the data source *ON*.
     */
    registerHelperAPI: function(dataSourceType, helper) {
        this.api[dataSourceType] = helper = helper || nullDataSourceHelperAPI;

        if (typeof helper.properties === 'function' && helper.properties.length === 1) {
            helper.prop = propPrep.bind(helper, this);
        }

        if (this.updateDataSources(dataSourceType)) {
            this.reindex();
        }
    },

    /**
     * @deprecated As of v1.1.0, use `this.reindex` instead.
     * @memberOf dataModels.JSON.prototype
     */
    applyState: function() {
        return this.deprecated('applyState()', 'reindex()', '1.2.0', arguments);
    },

    getUnfilteredValue: function(x, y) {
        return this.deprecated('getUnfilteredValue(x, y)', null, '1.2.0', arguments, 'No longer supported');
    },

    getUnfilteredRowCount: function() {
        return this.deprecated('getUnfilteredValue(x, y)', null, '1.2.0', arguments, 'No longer supported');
    },

    /**
     * @summary Add a new data row to the grid.
     * @desc If data source pipeline in use, to see the new row in the grid, you must eventually call:
     * ```javascript
     * this.grid.behavior.reindex();
     * this.grid.behaviorChanged();
     * ```
     * @param {object} newDataRow
     * @returns {object} The new row object.
     * @memberOf dataModels.JSON.prototype
     */
    addRow: function(newDataRow) {
        this.getData().push(newDataRow);
        return newDataRow;
    },

    get schema() { return this.source.schema; },

    set schema(schema) {
        this.source.setSchema(schema);
    }
});

// LOCAL METHODS -- to be called with `.call(this`

/**
 * Accumulate actual data row objects backing current grid row selections.
 * This call should be paired with a subsequent call to `reselectGridRowsBackedBySelectedDataRows`.
 * @private
 * @this {dataModels.JSON}
 * @memberOf dataModels.JSON.prototype
 */
function selectedDataRowsBackingSelectedGridRows() {
    var selectedData = this.selectedData,
        hasRowSelections = this.grid.selectionModel.hasRowSelections(),
        needIndexedDataList = selectedData.length || hasRowSelections;

    if (needIndexedDataList) {
        var indexedData = this.getIndexedData();
    }

    // STEP 1: Remove any filtered data rows from the recently selected list.
    selectedData.forEach(function(dataRow, index) {
        if (indexedData.indexOf(dataRow) >= 0) {
            delete selectedData[index];
        }
    });

    // STEP 2: Accumulate the data rows backing any currently selected grid rows in `this.selectedData`.
    if (hasRowSelections) { // any current grid row selections?
        this.grid.getSelectedRows().forEach(function(selectedRowIndex) {
            var dataRow = indexedData[selectedRowIndex];
            if (selectedData.indexOf(dataRow) < 0) {
                selectedData.push(dataRow);
            }
        });
    }
}

/**
 * Re-establish grid row selections based on actual data row objects accumulated by `selectedDataRowsBackingSelectedGridRows` which should be called first.
 * @private
 * @this {dataModels.JSON}
 * @memberOf dataModels.JSON.prototype
 */
function reselectGridRowsBackedBySelectedDataRows() {
    if (this.selectedData.length) { // any data row objects added from previous grid row selections?
        var selectionModel = this.grid.selectionModel,
            offset = this.grid.getHeaderRowCount(),
            filteredData = this.getIndexedData();

        selectionModel.clearRowSelection();

        this.selectedData.forEach(function(dataRow) {
            var index = filteredData.indexOf(dataRow);
            if (index >= 0) {
                selectionModel.selectRow(offset + index);
            }
        });
    }
}

/**
 * @inner
 * @summary Digests `(columnIndex, propName, value)` and calls `properties`.
 * @desc Digests the three parameters `(columnIndex, propName, value)` detailed below, creating a single object with which it then calls the helper API `properties` method.
 *
 * A helper API `properties` method:
 * * Supports two types of actions:
 *   * **Getter** call where you supply just the property name. The method gets the property value from the API and returns it.
 *   * **Setter** call where you supply a value along with the property name; or you supply a hash of property name/value pairs. The method sets the property on the API and returns nothing. All values are valid with the exception of `undefined` which deletes the property of the given name rather than setting it to `undefined`.
 * * Supports two types of properties:
 *   * **Global properties** affect the API globally.
 *   * **Column properties** pertain to specific columns.
 *
 * This method is overloaded. The way it is called as explained in the Parameters section below determines both the type of action (getter, setter) and the kind of property (global, column).
 *
 * Note: Not all API properties are dynamic; some are static and updating them later will have no effect.
 *
 * @this {dataSourceHelperAPI}
 *
 * @param {DataSourceBase} dataModel - The data model. This parameter is bound to the call by {@link dataModels.JSON#setHelperAPI|setHelperAPI}.
 *
 * @param {number} [columnIndex] - If given, this is a property on a specific column. If omitted, this is a property on the whole API properties object.
 *
 * @param {string|object} property - _If `columnIndex` is omitted, this arg takes its place._
 *
 * One of these types:
 * * **string** - Property name. The name of the explicit property to either get or (if `value` also given) set on the properties object.
 * * **object** - Hash of properties to set on the properties object.
 *
 * @param [value] - _If `columnIndex` is omitted, this arg takes its place._
 *
 * One of:
 * * Omitted (when `property` is a string), this is the "getter" action: Return the value from the properties object of the key in `property`.
 * * When `property` is a string and `value` is given, this is the "setter" action: Copy this value to properties object using the key in `property`.
 * * When `property` is a hash and `value` is given: Unexpected; throws an error.
 *
 * @returns {propObject}
 */
function propPrep(dataModel, columnIndex, propName, value) {
    var invalid,
        properties = {},
        argCount = arguments.length;

    if (typeof columnIndex === 'number') {
        argCount--;
    } else {
        value = propName;
        propName = columnIndex;
        columnIndex = undefined;
    }

    switch (argCount) {

        case 2: // getter propName name or setter hash
            if (typeof propName === 'object') {
                properties = propName;
            } else {
                properties.getPropName = propName;
            }
            break;

        case 3: // setter for value
            if (typeof propName !== 'string') {
                invalid = true;
            } else {
                properties[propName] = value;
            }
            break;

        default: // too few or too many args
            invalid = true;

    }

    if (invalid) {
        throw 'Invalid overload.';
    }

    if (columnIndex !== undefined) {
        // non-enumerable propName:
        Object.defineProperty(properties, 'column', {
            value: {
                index: columnIndex,
                name: dataModel.source.schema[columnIndex].name
            }
        });
    }

    return this.properties(properties);
}

var warned = {};
/**
 * @private
 * @param {string} propName
 * @this DataSourceOrigin#
 * @returns {*[]}
 */
function getSchemaPropArr(propName, deprecatedMethodName) {
    if (!warned[deprecatedMethodName]) {
        console.warn(deprecatedMethodName + '() has been deprecated as of v1.2.0 and will be removed in a future release. Constructs like ' + deprecatedMethodName + '()[i] should be changed to schema[i]. (This deprecated method now returns a new array derived from schema.)');
        warned[deprecatedMethodName] = true;
    }
    return this.schema.map(function(columnSchema) {
        return columnSchema[propName];
    }, this);
}

/**
 * @deprecated
 * @memberOf dataModels.JSON.prototype
 */
JSON.prototype.applyAnalytics = JSON.prototype.reindex; // eslint-disable-line no-extend-native

module.exports = JSON;

},{"../dataSources/DataSourceOrigin":84,"./DataModel":78}],82:[function(require,module,exports){
'use strict';

function SummaryRow(grid, options) {
    this.behavior = grid.behavior;

    /**
     * @type {dataRowObject[]}
     */
    this.data = [];

    if (options && options.name) {
        this.name = options.name;
    }
}

SummaryRow.prototype = {
    constructor: SummaryRow.prototype.constructor,

    type: 'summary',

    getRowCount: function() {
        return this.getData().length;
    },

    getData: function() {
        return this.behavior.dataModel.dataSource.getGrandTotals() || this.data;
    },

    setData: function(data) {
        this.data = data || [];
    },

    getValue: function(x, y) {
        return this.data[y][x];
    },

    setValue: function(x, y, value) {
        this.data[x] = value;
    },

    getRow: function(y) {
        return this.data[y];
    }
};

module.exports = SummaryRow;

},{}],83:[function(require,module,exports){
'use strict';

module.exports = {
    DataModel: require('./DataModel'), // abstract base class
    JSON: require('./JSON'),
    HeaderSubgrid: require('./HeaderSubgrid'),
    FilterSubgrid: require('./FilterSubgrid'),
    SummarySubgrid: require('./SummarySubgrid')
};

},{"./DataModel":78,"./FilterSubgrid":79,"./HeaderSubgrid":80,"./JSON":81,"./SummarySubgrid":82}],84:[function(require,module,exports){
'use strict';

var DataSourceBase = require('fin-hypergrid-data-source-base');

/**
 * See {@link DataSourceOrigin#initialize} for constructor parameters.
 * @constructor
 */
var DataSourceOrigin = DataSourceBase.extend('DataSourceOrigin',  {

    /**
     * Currently a synonym for {@link DataSourceOrigin#setData} (see).
     */
    initialize: function(data, schema) {
        delete this.dataSource; // added by DataSourceBase#initialize but we don't want here
        this.setData.call(this, data, schema || []);
    },

    /**
     * @memberOf DataSourceOrigin#
     */
    setData: setData,

    get schema() { return this._schema; },
    set schema(schema) { this._schema = schema; },

    /**
     * @memberOf DataSourceOrigin#
     * @returns {columnSchemaObject[]}
     */
    getSchema:  function(){
        return this._schema;
    },
    /**
     * @memberOf DataSourceOrigin#
     * Caveat: Do not call on a data update when you expect to reuse the existing schema.
     * @param schema
     */
    setSchema: function(schema){
        if (!schema.length) {
            var fields = computeFieldNames(this.data[0]);

            schema = Array(fields.length);

            for (var i = 0; i < fields.length; i++) {
                schema[i] = { name: fields[i] };
            }
        }

        /**
         * @summary The array of column schema objects.
         * @name schema
         * @type {columnSchemaObject[]}
         * @memberOf DataSourceOrigin#
         */
        this._schema = schema;
    },

    isNullObject: false,

    getDataIndex: function(y) {
        return y;
    },

    /**
     * @memberOf DataSourceOrigin#
     * @param y
     * @returns {dataRowObject}
     */
    getRow: function(y) {
        return this.data[y];
    },

    /**
     * @summary Find, replace, or update a row by it's primary key column.
     * @param {string|object} columnName - One of:
     * * _string_ - Column name. See `value`.
     * * _object_ - Hash of 0 or more key-value pairs to search for.
     * @param {string[]|*} [value] - One of:
     * _omitted_ - When `columnName` is a hash and you want to search all its keys.
     * _string[]_ - When `columnName` is a hash but you only want to search certain keys.
     * _otherwise_ - When `columnName` is a string. Value to search for.
     * Note that `null` is a valid search value.
     * @param {object|null|undefined} [replacement] - One of:
     * * _omitted_ - Ignored.
     * * _object_ - Replacement for the data row if found.
     * * `null` - Flag to delete the data row if found. The found data row is nonetheless returned.
     * * `undefined` - Flag to return index of found row instead of row object itself.
     * @returns {object|number|undefined} One of:
     * * `undefined` - data row not found
     * * _object_ - found data row object (will have been deleted if `replacement` was `null`)
     * * _number_ - index of found data row object in `this.data` (if `replacement` was `undefined`)
     * @todo Use a binary search (rather than `Array..find`) when column is known to be indexed (sorted).
     * @memberOf DataSourceOrigin#
     */
    findRow: function findRow(columnName, value, replacement) {
        var result, index, keys, hash, args;

        if (typeof columnName === 'object') {
            hash = columnName;

            if (value instanceof Array) {
                args = 2;
                keys = value;
                if (keys.reduce(function(sum, key) {
                        if (key in hash) {
                            sum++;
                        }
                        return sum;
                    }, 0) !== keys.length) {
                    throw 'Expected all keys given in 2nd arg to be found in hash given in 1st arg.';
                }
            } else {
                args = 1;
                keys = Object.keys(hash);
                replacement = value; // promote
            }

            if (keys.length === 1) {
                columnName = keys[0];
                value = hash[columnName];
                hash = undefined;
            } else if (keys.length) {
                result = this.data.find(function(row, idx) {
                    if (!row) {
                        return;
                    }
                    index = idx;
                    for (var key in keys) {
                        columnName = keys[key];
                        if (row[columnName] !== hash[columnName]) {
                            return; // bail
                        }
                    }
                    return true; // found!
                });
            }
        } else {
            if (arguments.length < 2) {
                throw 'Expected at least 2 arguments when first argument not object but found ' + arguments.length + '.';
            }
            args = 2;
        }

        if (!hash) {
            result = this.data.find(function(row, idx) {
                if (!row) { return; }
                index = idx;
                return row[columnName] === value;
            });
        }

        if (result) {
            this.foundRowIndex = index;
            if (replacement === null) {
                this.data.splice(index, 1);
            } else if (typeof replacement === 'object') {
                this.data[index] = replacement;
            } else if (replacement === undefined) {
                if (arguments.length > args) {
                    delete this.data[index];
                }
            } else {
                throw 'Expected null, undefined, or object but found ' + typeof replacement + '.';
            }
        } else {
            this.foundRowIndex = undefined;
        }

        return result;
    },

    /**
     * @summary Find, replace, or update a row by it's index.
     * @param {number} index - Row index that is being accessed
     * @param {object|null|undefined} [replacement] - One of:
     * * _omitted_ - Ignored.
     * * _object_ - Replacement for the data row if found.
     * * `null` - Flag to delete the data row if found. The found data row is nonetheless returned.
     * * `undefined` - Flag to delete the row at that index.
     * @returns {object|number|undefined} One of:
     * * `undefined` - data row not found
     * * _object_ - found data row object (will have been deleted if `replacement` was `null`)
     * @todo Use a binary search (rather than `Array..find`) when column is known to be indexed (sorted).
     * @memberOf DataSourceOrigin#
     */
    findRowByIndex: function findRow(index, replacement) {
        var result;

        if (arguments.length < 1) {
            throw 'Expected at least 1 argument but found ' + arguments.length + '.';
        }

        if (typeof index !== 'number') {
            throw 'Expected at index to be a number but got ' + index + '.';
        }

        result = this.data[index];

        if (result) {
            if (replacement === null) {
                this.data.splice(index, 1);
            } else if (typeof replacement === 'object') {
                this.data[index] = replacement;
            } else if (replacement === undefined && arguments.length >= 2) {
                delete this.data[index];
            } else if (replacement !== undefined) {
                throw 'Expected null, undefined, or object but found ' + typeof replacement + '.';
            }
        }

        return result;
    },


    /**
     * @memberOf DataSourceOrigin#
     * @param x
     * @param y
     * @returns {*}
     */
    getValue: function(x, y) {
        var row = this.getRow(y);
        if (!row) {
            return null;
        }
        return row[this.schema[x].name];
    },

    /**
     * @memberOf DataSourceOrigin#
     * @param {number} x
     * @param {number} y
     * @param value
     */
    setValue: function(x, y, value) {
        this.getRow(y)[this.schema[x].name] = value;
    },

    /**
     * @memberOf DataSourceOrigin#
     * @returns {number}
     */
    getRowCount: function() {
        return this.data.length;
    },

    /**
     * @memberOf DataSourceOrigin#
     * @returns {number}
     */
    getColumnCount: function() {
        return this.schema.length;
    },

    /**
     * @memberOf DataSourceOrigin#
     * @returns {number[]}
     */
    getFields: function() {
        return this.schema.map(function(columnSchema) { return columnSchema.name; });
    },

    /**
     * @memberOf DataSourceOrigin#
     * @returns {string[]}
     */
    getHeaders: function() {
        return this.schema.map(function(columnSchema) { return columnSchema.header; });
    },

    /**
     * @memberOf DataSourceOrigin#
     * @param {string[]} fields
     */
    setFields: function(fields) {
        if (!(Array.isArray(fields) && fields.length === this.schema.length)) {
            throw new this.DataSourceError('Expected argument to be an array with correct length.');
        }
        fields.forEach(function(field, i) {
            this.schema[i].field = field;
        }, this);
    },

    /**
     * @memberOf DataSourceOrigin#
     * @param {string[]} [headers] - If omitted, headers will be reset to their derived defaults on next call to `getHeaders`.
     */
    setHeaders: function(headers) {
        if (!(Array.isArray(headers) && headers.length === this.schema.length)) {
            throw new this.DataSourceError('Expected argument to be an array with correct length.');
        }
        headers.forEach(function(header, i) {
            this.schema[i].header = header;
        }, this);
    }
});

/** @typedef {object} columnSchemaObject
 * @property {string} name - The required column name.
 * @property {string} [header] - An override for derived header
 * @property {function} [calculator] - A function for a computed column. Undefined for normal data columns.
 * @property {string} [type] - Used for sorting when and only when comparator not given.
 * @property {object} [comparator] - For sorting, both of following required:
 * @property {function} comparator.asc - ascending comparator
 * @property {function} comparator.desc - descending comparator
 */

/**
 * @param {object[]} [data=[]] - Array of uniform objects containing the grid data.
 * @param {columnSchemaObject[]} [schema=[]]
 * @memberOf DataSourceOrigin#
 */
function setData(data, schema) {
    /**
     * @summary The array of uniform data objects.
     * @name schema
     * @type {columnSchemaObject[]}
     * @memberOf DataSourceOrigin#
     */
    this.data = data || [];

    if (schema) {
        this.setSchema(schema);
    }
}

/**
 * @private
 * @param {object} object
 * @returns {string[]}
 */
function computeFieldNames(object) {
    if (!object) {
        return [];
    }
    return Object.getOwnPropertyNames(object || []).filter(function(e) {
        return e.substr(0, 2) !== '__';
    });
}

module.exports = DataSourceOrigin;

},{"fin-hypergrid-data-source-base":8}],85:[function(require,module,exports){
'use strict';

module.exports = {
    dataSourceOrigin: require('./DataSourceOrigin'),
    DataSourceBase: require('fin-hypergrid-data-source-base')
};

},{"./DataSourceOrigin":84,"fin-hypergrid-data-source-base":8}],86:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var LRUCache = require('lru-cache');


/**
 * This module lists the properties that can be set on a {@link Hypergrid} along with their default values.
 * Edit this file to override the defaults.
 * @module defaults
 */

module.exports = {

    /**
     * The font for data cells.
     * @default
     * @type {string}
     * @instance
     */
    noDataMessage: '',


    /**
     * The font for data cells.
     * @default
     * @type {cssFont}
     * @instance
     */
    font: '13px Tahoma, Geneva, sans-serif',

    /**
     * Font color for data cells.
     * @default
     * @type {string}
     * @instance
     */
    color: 'rgb(25, 25, 25)',

    /**
     * Background color for data cells.
     * @default
     * @type {string}
     * @instance
     */
    backgroundColor: 'rgb(241, 241, 241)',

    /**
     * Font style for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    foregroundSelectionFont: 'bold 13px Tahoma, Geneva, sans-serif',

    /**
     * Font color for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    foregroundSelectionColor: 'rgb(0, 0, 128)',
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    sortOnHiddenColumns: true,
    /**
     * Background color for selected cell(s).
     * @default
     * @type {string}
     * @instance
     */
    backgroundSelectionColor: 'rgba(147, 185, 255, 0.625)',


    /********** SECTION: COLUMN HEADER COLORS **********/

    // IMPORTANT CAVEAT: The code is inconsistent regarding the terminology. Is the "column header" section _the row_ of cells at the top (that act as headers for each column) or is it _the column_ of cells (that act as headers for each row)? Oh my.

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    columnHeaderFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderColor: 'rgb(25, 25, 25)',

    /**
     * Font style for selected columns' headers.
     * @default
     * @type {string}
     * @instance
     */
    columnHeaderForegroundSelectionFont: 'bold 12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundColor: 'rgb(223, 227, 232)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderForegroundSelectionColor: 'rgb(80, 80, 80)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundSelectionColor: 'rgba(255, 220, 97, 0.45)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderForegroundColumnSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    columnHeaderBackgroundColumnSelectionColor: 'rgb(255, 180, 0)',

    /**
     * @default
     * @type {string}
     * @instance
     */
    columnHeaderHalign: 'center',


    /********** SECTION: ROW HEADER COLORS **********/

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    rowHeaderFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundColor: 'rgb(223, 227, 232)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderForegroundSelectionColor: 'rgb(80, 80, 80)',

    /**
     * Font style for selected rows' headers.
     * @default
     * @type {string}
     * @instance
     */
    rowHeaderForegroundSelectionFont: 'bold 12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundSelectionColor: 'rgba(255, 220, 97, 0.45)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderForegroundRowSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    rowHeaderBackgroundRowSelectionColor: 'rgb(255, 180, 0)',


    /********** SECTION: FILTER ROW COLORS **********/

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    filterFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterBackgroundColor: 'white',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterForegroundSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    filterBackgroundSelectionColor: 'rgb(255, 220, 97)',

    /**
     * @default
     * @type {string}
     * @instance
     */
    filterHalign: 'center',


    /********** SECTION: TREE COLUMN COLORS **********/
    // The "tree column" contains the hierarchical drill-down controls.

    /**
     * @default
     * @type {cssFont}
     * @instance
     */
    treeColumnFont: '12px Tahoma, Geneva, sans-serif',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundColor: 'rgb(223, 227, 232)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnForegroundSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundSelectionColor: 'rgba(255, 220, 97, 0.45)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnForegroundColumnSelectionColor: 'rgb(25, 25, 25)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    treeColumnBackgroundColumnSelectionColor: 'rgb(255, 180, 0)',

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    backgroundColor2: 'rgb(201, 201, 201)',

    /**
     * @default
     * @type {number}
     * @instance
     */
    voffset: 0,

    /**
     * @default
     * @type {string}
     * @instance
     */
    scrollbarHoverOver: 'visible',

    /**
     * @default
     * @type {string}
     * @instance
     */
    scrollbarHoverOff: 'hidden',

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    scrollingEnabled: true,

    /**
     * @default
     * @type {string}
     * @instance
     */
    vScrollbarClassPrefix: '',

    /**
     * @default
     * @type {string}
     * @instance
     */
    hScrollbarClassPrefix: '',

    //these used to be in the constants element

    /**
     * @default
     * @type {string}
     * @instance
     */
    fixedRowAlign: 'center',

    /**
     * @default
     * @type {string}
     * @instance
     */
    fixedColAlign: 'center',
    /**
     * @default
     * @type {string}
     * @instance
     */
    halign: 'center',

    /**
     * @default
     * @type {number}
     * @instance
     */
    cellPadding: 5,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesH: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesV: true,
    /**
     * @default
     * @type {boolean}
     * @instance
     */
    gridLinesVOverflow: false,

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    lineColor: 'rgb(199, 199, 199)',

    /**
     * @default
     * @type {number}
     * @instance
     */
    lineWidth: 1,


    /**
     * @default
     * @type {number}
     * @instance
     */
    defaultRowHeight: 15,

    /**
     * @default
     * @type {number}
     * @instance
     */
    defaultColumnWidth: 100,

    //for immediate painting, set these values to 0, true respectively

    /**
     * @default
     * @type {number}
     * @instance
     */
    repaintIntervalRate: 60,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    repaintImmediately: false,

    //enable or disable double buffering

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    useBitBlit: false,


    /**
     * @default
     * @type {boolean}
     * @instance
     */
    useHiDPI: true,

    /**
     * @default ['alt', 'esc']
     * @type {string}
     * @instance
     */
    editorActivationKeys: ['alt', 'esc'],

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    readOnly: false,

    // inherited by cell renderers

    /**
     * @default `getTextWidth`
     * @type {function}
     * @instance
     */
    getTextWidth: getTextWidth,

    /**
     * @default `getTextHeight`
     * @type {function}
     * @instance
     */
    getTextHeight: getTextHeight,


    /**
     * @default
     * @type {number}
     * @instance
     */
    fixedColumnCount: 0,

    /**
     * @default
     * @type {number}
     * @instance
     */
    fixedRowCount: 0,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showRowNumbers: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showTreeColumn: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showHeaderRow: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    showFilterRow: false,


    /** Clicking in a cell "selects" it; it is added to the select region and repainted with "cell selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    cellSelection: true,

    /** Clicking in a column header (top row) "selects" the column; the entire column is added to the select region and repainted with "column selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    columnSelection: true,

    /** Clicking in a row header (leftmost column) "selects" the row; the entire row is added to the select region and repainted with "row selection" colors.
     * @default
     * @type {boolean}
     * @instance
     */
    rowSelection: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    singleRowSelectionMode: true,

    /**
     * @default
     * @type {cssColor}
     * @instance
     */
    selectionRegionOverlayColor: 'rgba(0, 0, 48, 0.2)',

    /**
     * @default
     * @type {string}
     * @instance
     */
    selectionRegionOutlineColor: 'rgb(69, 69, 69)',

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    columnAutosizing: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    rowNumberAutosizing: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    headerTextWrapping: false,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    rowResize: false,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    editable: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    filterable: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    editOnDoubleClick: true,

    /**
     * @default
     * @type {number}
     * @instance
     */
    doubleClickDelay: 325,

    /**
     * Grid-level property.
     * When user presses a printable character key _or_ BACKSPACE _or_ DELETE:
     * 1. Activate cell editor on current cell (i.e., origin of most recent selection).
     * 2. If cell editor is a text editor:
     *    1. Replace current value with the character the user typed; or
     *    2. Clear it on BACKSPACE, DELETE, or other invalid character (_e.g._ when user types a letter but the cell editor only accepts digits).
     *
     * > In invoked, user has the option to back out by pressing the ESCAPE key.
     *
     * @default
     * @type {boolean}
     * @instance
     */
    editOnKeydown: true,

    /**
     * @default
     * @type {boolean}
     * @instance
     */
    checkboxOnlyRowSelections: false,

    /** @summary Name of a formatter for cell text.
     * @desc The default (`undefined`) falls back to `column.type`.
     * The value `null` does no formatting.
     * @default undefined
     * @type {undefined|null|string}
     * @instance
     * @tutorial localization
     */
    format: undefined,

    /** @summary Name of a cell editor from the {@link module:cellEditors|cellEditors API}..
     * @desc Not editable if named editor is does not exist.
     * @default undefined
     * @type {undefined|null|string}
     * @instance
     * @tutorial cell-editors
     */
    editor: undefined,

    /**
     * Name of cell renderer from the {@link module:cellRenderers|cellRenderers API}.
     * @default
     * @type {string}
     * @instance
     */
    renderer: 'SimpleCell',

    /********** HOVER COLORS **********/

    /** @typedef hoverColors
     * @property {boolean} [enable=false] - `false` means not hilite on hover
     * @property {cssColor} backgroundColor - cell, row, or column background color. Alpha channel will be respected and if given will be painted over the cells predetermined color.
     * @property {cssColor} [header.backgroundColor=backgroundColor] - for columns and rows, this is the background color of the column or row "handle" (header rows or columns, respectively). (Not used for cells.)
     */

    /** On mouse hover, whether to repaint the cell background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(160, 160, 40, 0.30) }'
     * @instance
     */
    hoverCellHighlight: {
        enabled: true,
        backgroundColor: 'rgba(160, 160, 40, 0.45)'
    },

    /** On mouse hover, whether to repaint the row background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(100, 100, 25, 0.15) }'
     * @instance
     */
    hoverRowHighlight: {
        enabled: true,
        backgroundColor: 'rgba(100, 100, 25, 0.30)'

    },

    /** On mouse hover, whether to repaint the column background and how.
     * @type {hoverColors}
     * @default '{ enabled: true, background: rgba(60, 60, 15, 0.15) }'
     * @instance
     */
    hoverColumnHighlight: {
        enabled: true,
        backgroundColor: 'rgba(60, 60, 15, 0.15)'
    },


    /** Display cell font with under-score line drawn over it.
     * > Implementation of links right now is not automatic; you must attach a 'fin-click' listener to the hypergrid object, etc.
     * @type {boolean}
     * @default
     * @instance
     */
    link: false,

    /** Display cell font with strike-through line drawn over it.
     * @type {boolean}
     * @default
     * @instance
     */
    strikeThrough: false,

    /** Ignore sort interaction (double-click).
     * @type {boolean}
     * @default
     * @instance
     */
    unsortable: false,

    /** Allow multiple cell region selections.
     * @type {boolean}
     * @default
     * @instance
     */
    multipleSelections: false,

    /** @summary Re-render grid at maximum speed.
     * @desc In this mode:
     * * The "dirty" flag, set by calling `grid.repaint()`, is ignored.
     * * `grid.getCanvas().currentFPS` is a measure of the number times the grid is being re-rendered each second.
     * * The Hypergrid renderer gobbles up CPU time even when the grid appears idle (the very scenario `repaint()` is designed to avoid). For this reason, we emphatically advise against shipping applications using this mode.
     * @type {boolean}
     * @default
     * @instance
     */
    enableContinuousRepaint: false,

    /** @summary Allow user to move columns .
     * @desc Columns can be reordered through either of two interfaces:
     * * Column Dragging feature
     * * Column Picker dialog
     * @type {boolean}
     * @default
     * @instance
     */
    columnsReorderable: true,

    /** @summary Apply cell properties before `getCell`.
     * @type {boolean}
     * @default
     * @instance
     */
    applyCellProperties: true,

    /** @summary Reapply cell properties after `getCell`.
     * @type {boolean}
     * @default
     * @instance
     */
    reapplyCellProperties: false,

    /** @summary Column grab within this number of pixels from top of cell.
     * @type {number}
     * @default
     * @instance
     */
    columnGrabMargin: 5
};

/** @typedef {string} cssColor
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
 */
/** @typedef {string} cssFont
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/font
 */

var textWidthCache = new LRUCache(2000);

function getTextWidth(gc, string) {
    if (string === null || string === undefined) {
        return 0;
    }
    string += '';
    if (string.length === 0) {
        return 0;
    }
    var key = gc.font + string;
    var width = textWidthCache.get(key);
    if (!width) {
        width = gc.measureText(string).width;
        textWidthCache.set(key, width);
    }
    return width;
}

var fontData = {};

function getTextHeight(font) {
    var result = fontData[font];

    if (!result) {
        result = {};

        var text = document.createElement('span');
        text.textContent = 'Hg';
        text.style.font = font;

        var block = document.createElement('div');
        block.style.display = 'inline-block';
        block.style.width = '1px';
        block.style.height = '0px';

        var div = document.createElement('div');
        div.appendChild(text);
        div.appendChild(block);

        div.style.position = 'absolute';
        document.body.appendChild(div);

        try {

            block.style.verticalAlign = 'baseline';

            var blockRect = block.getBoundingClientRect();
            var textRect = text.getBoundingClientRect();

            result.ascent = blockRect.top - textRect.top;

            block.style.verticalAlign = 'bottom';
            result.height = blockRect.top - textRect.top;

            result.descent = result.height - result.ascent;

        } finally {
            document.body.removeChild(div);
        }
        if (result.height !== 0) {
            fontData[font] = result;
        }
    }

    return result;
}

},{"lru-cache":40}],87:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var ListDragon = require('list-dragon');

var Dialog = require('./Dialog');
var stylesheet = require('../lib/stylesheet');

/**
 * @constructor
 * @extends Dialog
 */
var ColumnPicker = Dialog.extend('ColumnPicker', {
    /**
     * @param {Hypergrid} grid
     * @param {object} [options] - May include `Dialog` options.
     */
    initialize: function(grid, options) {
        var behavior = grid.behavior;

        this.grid = grid;

        if (behavior.isColumnReorderable()) {
            // parse & add the drag-and-drop stylesheet addendum
            var stylesheetAddendum = stylesheet.inject('list-dragon-addendum');

            // grab the group lists from the behavior
            if (behavior.setGroups) {
                this.selectedGroups = {
                    title: 'Groups',
                    models: behavior.getGroups()
                };

                this.availableGroups = {
                    title: 'Available Groups',
                    models: behavior.getAvailableGroups()
                };

                var groupPicker = new ListDragon([
                    this.selectedGroups,
                    this.availableGroups
                ]);

                // add the drag-and-drop sets to the dialog
                this.append(groupPicker.modelLists[0].container);
                this.append(groupPicker.modelLists[1].container);
            }

            // grab the column lists from the behavior
            this.inactiveColumns = {
                title: 'Inactive Columns',
                models: behavior.getHiddenColumns().sort(compareByName)
            };

            this.activeColumns = {
                title: 'Active Columns',
                models: behavior.getActiveColumns()
            };

            this.sortOnHiddenColumns = this.wasSortOnHiddenColumns = grid.properties.sortOnHiddenColumns;

            var columnPicker = new ListDragon([
                this.inactiveColumns,
                this.activeColumns
            ], {
                // add the list-dragon-base stylesheet right before the addendum
                cssStylesheetReferenceElement: stylesheetAddendum,
                // these models have a header property as their labels
                label: '{header}'
            });

            // add the drag-and-drop sets to the dialog
            this.append(columnPicker.modelLists[0].container);
            this.append(columnPicker.modelLists[1].container);

            //Listen to the visible column changes
            columnPicker.modelLists[1].element.addEventListener('listchanged', function(e){
                grid.fireSyntheticOnColumnsChangedEvent();
            });

            this.sortOnHiddenColumns = this.grid.properties.sortOnHiddenColumns;
        } else {
            var div = document.createElement('div');
            div.style.textAlign = 'center';
            div.style.marginTop = '2em';
            div.innerHTML = 'The selection of visible columns in the grid may not be changed.';
            this.append(div);
        }

        // Add checkbox to control panel for sorting on hidden fields
        var label = document.createElement('label');
        label.innerHTML = '<input type="checkbox"> Allow sorting on hidden columns';
        label.style.fontWeight = 'normal';
        label.style.marginRight = '2em';

        var checkbox = label.querySelector('input');
        checkbox.checked = this.sortOnHiddenColumns;
        checkbox.addEventListener('click', function(e){
            self.sortOnHiddenColumns = checkbox.checked;
            e.stopPropagation();
        });

        var panel = this.el.querySelector('.hypergrid-dialog-control-panel');
        panel.insertBefore(label, panel.firstChild);

        // add the dialog to the DOM
        this.open(options.container);
    },

    onClosed: function() {
        var behavior = this.grid.behavior,
            columns = behavior.columns;

        if (this.activeColumns) {
            var tree = columns[0];

            // TODO: breaking encapsulation; should be using setters and getters on the behavior
            columns.length = 0;
            if (tree && tree.label === 'Tree') {
                columns.push(tree);
            }
            this.activeColumns.models.forEach(function(column) {
                columns.push(column);
            });

            if (this.sortOnHiddenColumns !== this.wasSortOnHiddenColumns) {
                this.grid.addProperties({ sortOnHiddenColumns: this.sortOnHiddenColumns });
                behavior.sortChanged(this.inactiveColumns.models);
            }

            behavior.changed();
        }

        if (this.selectedGroups){
            var groupBys = this.selectedGroups.models.map(function(e) {
                return e.id;
            });
            behavior.setGroups(groupBys);
        }
    }
});

function compareByName(a, b) {
    a = a.header.toString().toUpperCase();
    b = b.header.toString().toUpperCase();
    return a < b ? -1 : a > b ? +1 : 0;
}


module.exports = ColumnPicker;

},{"../lib/stylesheet":120,"./Dialog":88,"list-dragon":39}],88:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var automat = require('automat');

var Base = require('../Base');
var markup = require('../../html');
var images = require('../../images');
var elfor = require('../lib/DOM/elfor');

/**
 * Creates and services a DOM element used as a cntainer for a dialog. The standard `markup.dialog` is simply a div with a _control panel_ containing a close box and a settings gear icon.
 *
 * You can supply an alternative dialog template. The interface is:
 * * Class name `hypergrid-dialog`.
 * * At least one child element. Content will be inserted before this first child.
 * * Typically contains a close-box element with class name `hypergrid-dialog-close` and possibly other controls with class name `hypergrid-dialog-xxxx` (where _xxxx_ is a unique name for your control).
 *
 * @constructor
 */
var Dialog = Base.extend('Dialog', {

    /**
     * Creates a basic dialog box in `this.el`.
     * @param {Hypergrid} grid
     * @param {object} [options]
     * @param {string|function} [options.dialogTemplate] - An alternate dialog template. The last child element must be the "control panel."
     * @param {boolean} [options.settings=true] - Control box has settings icon. (Settings icon must be included in template. This option removes it. That is, if explicitly `false` _and_ there is a settings control, remove it.)
     * @param {string|boolean} [options.backgroundImage=images.dialog.src] - A URI for a background image. If explicitly `false`, background image is suppressed.
     * @param {function} [terminate]
     */
    initialize: function(grid, options) {
        options = options || {};

        this.grid = grid;

        // create the backdrop; it is absolute-positioned and stretched
        this.el = automat.firstChild(options.dialogTemplate || markup.dialog, options.dialogReplacements);

        this.originalFirstChild = this.el.firstElementChild;

        if (options.settings === false) {
            var settings = this.el.querySelector('.hypergrid-dialog-settings');
            if (settings) {
                settings.remove();
            }
        }

        // add background image
        if (options.backgroundImage !== false) {
            this.el.style.backgroundImage = 'url(\'' + (options.backgroundImage || images.dialog.src) + '\')';
        }

        // listen for clicks
        this.el.addEventListener('click', onClick.bind(this));

        if (options.terminate) {
            this.terminate = options.terminate;
        }
    },

    /**
     * @summary Adds DOM `Node`s to dialog.
     * @desc Input can be nodes or a template from which to create nodes. The nodes are inserted into the dialog's DOM (`this.el`), right before the "control panel."
     * @param {string|function|Node|Node[]} nodes - See `automat`.
     * @param {...*} [replacements] - See `automat`.
     */
    append: function(nodes, replacements/*...*/) {
        var el = this.el;

        if (typeof nodes === 'string' || typeof nodes === 'function') {
            var args = Array.prototype.slice.call(arguments);
            args.splice(1, 0, el, this.originalFirstChild);
            automat.append.apply(null, args);

        } else if ('length' in nodes) {
            for (var i = 0; i < nodes.length; ++i) {
                el.insertBefore(nodes[i], this.originalFirstChild);
            }

        } else {
            el.insertBefore(nodes, this.originalFirstChild);
        }
    },

    /**
     * Insert dialog into DOM.
     *
     * @param {HTMLElement} [container] - If undefined, dialog is appended to body.
     *
     * If defined, dialog is appended to container. When container is not body, it will be:
     * # made visible before append (it should initially be hidden)
     * # made hidden after remove
     */
    open: function(container) {
        var error;

        if (!(this.opened || this.opening || this.closed || this.closing)) {
            error = this.onOpen();

            if (!error) {
                var el = this.el;

                this.opening = true;

                container = container || document.querySelector('body');

                if (container.tagName !== 'BODY') {
                    container.style.visibility = 'visible';
                }

                // insert the new dialog markup into the DOM
                container.appendChild(el);

                // schedule it for a show transition
                setTimeout(function() { el.classList.add('hypergrid-dialog-visible'); }, 50);

                // at end of show transition, hide all the hypergrids behind it to prevent any key/mouse events from getting to them
                // todo: pause all hypergrids so they don't spin uselessly
                el.addEventListener('transitionend', this.hideAppBound = hideApp.bind(this));
            }
        }

        return error;
    },

    /**
     * Remove dialog from DOM.
     */
    close: function() {
        var error;

        if (this.opened && !(this.closed || this.closing)) {
            error = this.onClose();

            if (!error) {
                var el = this.el;

                this.closing = true;

                // unhide all the hypergrids behind the dialog
                this.appVisible('visible');

                // start a hide transition of dialog revealing grids behind it
                el.classList.remove('hypergrid-dialog-visible');

                // at end of hide transition, remove dialog from the DOM
                el.addEventListener('transitionend', this.removeDialogBound = removeDialog.bind(this));
            }
        }

        return error;
    },

    appSelector: 'canvas.hypergrid',
    appVisible: function(visibility) {
        elfor.each(this.appSelector, function(el) {
            el.style.visibility = visibility;
        });
    },

    onOpen: nullPattern,
    onOpened: nullPattern,
    onClose: nullPattern,
    onClosed: nullPattern,
    terminate: nullPattern
});

function nullPattern() {}

function removeDialog(evt) {
    if (evt.target === this.el && evt.propertyName === 'opacity') {
        if (this.el.parentElement.tagName !== 'BODY') {
            this.el.parentElement.style.visibility = 'hidden';
        }
        this.el.remove();
        delete this.el;

        this.onClosed();
        this.terminate();
        this.closing = false;
        this.closed = true;
    }
}

function hideApp(evt) {
    if (evt.target === this.el && evt.propertyName === 'opacity') {
        this.appVisible('hidden');
        this.el.removeEventListener('transitionend', this.hideAppBound);
        this.onOpened();
        this.opening = false;
        this.opened = true;
    }
}

function onClick(evt) {
    if (this) {
        if (evt.target.classList.contains('hypergrid-dialog-close')) {
            evt.preventDefault(); // ignore href
            this.close();

        } else if (evt.target.classList.contains('hypergrid-dialog-settings')) {
            evt.preventDefault(); // ignore href
            if (this.settings) { this.settings(); }

        } else if (this.onClick && !this.onClick.call(this, evt) && evt.target.tagName === 'A') {
            evt.preventDefault(); // ignore href of handled event
        }
    }

    evt.stopPropagation(); // the click stops here, handled or not
}

module.exports = Dialog;

},{"../../html":2,"../../images":4,"../Base":49,"../lib/DOM/elfor":111,"automat":5}],89:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var Tabz = require('tabz');
var popMenu = require('pop-menu');
var automat = require('automat');

var Dialog = require('./Dialog');
var markup = require('../../html');
var copyInput = require('../lib/DOM/copy-input');

var tabProperties = {
    tableQB: {
        isTableFilter: true
    },
    tableSQL: {
        isTableFilter: true,
        language: 'SQL'
    },
    columnsQB: {
        isColumnFilter: true
    },
    columnsSQL: {
        isColumnFilter: true,
        language: 'SQL'
    },
    columnsCQL: {
        isColumnFilter: true,
        language: 'CQL'
    }
};

/**
 * @constructor
 * @extends Dialog
 */
var ManageFilters = Dialog.extend('ManageFilters', {

    /**
     * @param {Hypergrid} grid
     * @param {object} [options] - May include `Dialog` options.
     * @param {HTMLElement} [options.container=document.body]
     */
    initialize: function(grid, options) {
        this.filter = grid.filter;

        this.append(markup.filterTrees);

        // initialize the folder tabs
        var tabz = this.tabz = new Tabz({
            root: this.el,
            onEnable: renderFolder.bind(this),
            onDisable: saveFolders.bind(this, null) // null options
        });

        // wire-up the New Column drop-down
        var newColumnDropDown = this.el.querySelector('#add-column-filter-subexpression');
        newColumnDropDown.onmousedown = onNewColumnMouseDown.bind(this);
        newColumnDropDown.onchange = onNewColumnChange.bind(this);

        // put the two subtrees in the two panels
        tabz.folder('#tableQB').appendChild(this.filter.tableFilter.el);
        tabz.folder('#columnsQB').appendChild(this.filter.columnFilters.el);

        // copy the SQL more-info block from the table to the columns tab
        var columnSqlEl = tabz.folder('#columnsSQL');
        var moreSqlInfo = tabz.folder('#tableSQL').firstElementChild.cloneNode(true);
        columnSqlEl.insertBefore(moreSqlInfo, columnSqlEl.firstChild);

        // add it to the DOM
        this.open(options.container);

        // following needed for unclear reasons to get drop-down to display correctly
        newColumnDropDown.selectedIndex = 0;
    },

    onClose: function() {
        return saveFolders.call(this);
    },

    onClosed: function() {
        var behavior = this.grid.behavior;
        behavior.reindex();
        behavior.changed();
    },

    /**
     * Custom click handlers; called by curtain.onclick in context
     * @param evt
     * @returns {boolean}
     */
    onClick: function(evt) { // to be called with filter object as syntax
        var ctrl = evt.target;

        if (ctrl.classList.contains('more-info')) {
            // find all more-info links and their adjacent blocks (blocks always follow links)
            var els = this.el.querySelectorAll('.more-info');

            // hide all more-info blocks except the one following this link (unless it's already visible in which case hide it too).
            for (var i = 0; i < els.length; ++i) {
                var el = els[i];
                if (el.tagName === 'A') {
                    var found = el === ctrl;
                    el.classList[found ? 'toggle' : 'remove']('hide-info');
                    el = els[i + 1];
                    el.style.display = found && el.style.display !== 'block' ? 'block' : 'none';
                }
            }

        } else if (ctrl.classList.contains('filter-copy')) {
            var isCopyAll = ctrl.childNodes.length; // contains "All"
            if (isCopyAll) {
                ctrl = this.tabz.folder(ctrl).querySelector(copyInput.selectorTextControls);
                copyInput(ctrl, this.filter.columnFilters.getState({ syntax: 'SQL' }));
            } else {
                copyInput(ctrl.parentElement.querySelector(copyInput.selectorTextControls));
            }

        } else {
            return true; // means unhandled
        }
    }
});

/**
 * @param options
 * @param tab
 * @param folder
 * @param [panel] Panel to save (from tab click). If omitted, save both panels (from onclose).
 * @returns {boolean|undefined|string}
 */
function saveFolders(options, tab, folder, panel) {
    return (
        (!panel || panel.id === 'tableFilterPanel') && saveFolder.call(this, this.filter.tableFilter, options) ||
        (!panel || panel.id === 'columnFiltersPanel') && saveFolder.call(this, this.filter.columnFilters, options)
    );
}

/**
 * @this Filter
 * @param {DefaultFilter} subtree
 * @param {object} [options={alert:true,focus:true}] - Side effects as per `FilterTree.prototype.invalid`'s `options`' parameter.
 * @returns {undefined|string} - Validation error text; falsy means valid (no error).
 */
function saveFolder(subtree, options) { // to be called with filter object as syntax
    var isColumnFilters = subtree === this.filter.columnFilters,
        tabQueryBuilder = this.tabz.tab(isColumnFilters ? '#columnsQB' : '#tableQB'),
        tab = this.tabz.enabledTab(tabQueryBuilder),
        folder = this.tabz.folder(tab),
        isQueryBuilder = tab === tabQueryBuilder,
        defaultedOptions = options || {
            alert: true,
            focus: true
        },
        enhancedOptions = {
            alert: defaultedOptions.alert,
            focus: defaultedOptions.focus && isQueryBuilder
        },
        error, ctrl;

    if (isColumnFilters || isQueryBuilder) {
        error = subtree.invalid(enhancedOptions);
    } else { // table filter SQL tab
        ctrl = folder.querySelector('textarea');
        error = this.filter.setTableFilterState(ctrl.value, options);
    }

    if (error && !isQueryBuilder) {
        // If there was a validation error, move the focus from the query builder control to the text box control.
        if (isColumnFilters) {
            // We're in SQL or CQL tab so find text box that goes with this subexpression and focus on it instead of QB control.
            var errantColumnName = error.node.el.parentElement.querySelector('input').value;
            ctrl = folder.querySelector('[name="' + errantColumnName + '"]');
        }
    }

    if (ctrl) {
        decorateFilterInput(ctrl, error);
    }

    return error;
}

function decorateFilterInput(ctrl, error) {
    ctrl.classList.toggle('filter-tree-error', !!error);

    ctrl.focus();

    // find the nearby warning element
    var warningEl;
    do {
        ctrl = ctrl.parentElement;
        warningEl = ctrl.querySelector('.filter-tree-warn');
    } while (!warningEl);

    // show or hide the error
    warningEl.innerHTML = error.message || error || '';
}

function onNewColumnMouseDown(evt) { // to be called with filter object as syntax
    if (saveFolder.call(this, this.filter.columnFilters)) {
        evt.preventDefault(); // do not drop down
    } else {
        // (re)build the drop-down contents, with same prompt, but excluding columns with active filter subexpressions
        var ctrl = evt.target,
            prompt = ctrl.options[0].text.replace('…', ''), // use original but w/o ellipsis as .build() appends one
            blacklist = this.filter.columnFilters.children.map(function(columnFilter) {
                return columnFilter.children.length && columnFilter.children[0].column;
            }),
            options = {
                prompt: prompt,
                blacklist: blacklist
            };

        popMenu.build(ctrl, this.filter.root.schema, options);
    }
}

function onNewColumnChange(evt) {
    var ctrl = evt.target,
        tabColumnQB = this.tabz.folder('#tableQB'),
        tab = this.tabz.enabledTab(tabColumnQB.parentElement),
        isQueryBuilder = tab === tabColumnQB,
        tabProps = tabProperties[tab.id];

    this.filter.columnFilters.add({
        state: {
            type: 'columnFilter',
            children: [ { column: ctrl.value } ]
        },
        focus: isQueryBuilder
    });

    if (tabProps.isColumnFilter && tabProps.lanugage) {
        renderFolder.call(this, tab);
    }

    // remove all but the prompt option (first child)
    ctrl.selectedIndex = 0;
    while (ctrl.lastChild !== ctrl.firstChild) {
        ctrl.removeChild(ctrl.lastChild);
    }
}

function renderFolder(tab) { // to be called with filter object as syntax
    var tabProps = tabProperties[tab.id],
        queryLanguage = tabProps.language;

    if (queryLanguage) {
        var globalFilter = this.filter,
            folder = this.tabz.folder(tab);

        if (tabProps.isTableFilter) {

            folder.querySelector('textarea').value = globalFilter.tableFilter.getState({ syntax: 'SQL' });

        } else { // column filter

            var columnFilters = globalFilter.columnFilters.children,
                el = folder.lastElementChild,
                msgEl = el.querySelector('span'),
                listEl = el.querySelector('ol'),
                copyAllLink = el.querySelector('a:first-of-type');

            msgEl.innerHTML = activeFiltersMessage(columnFilters.length);
            listEl.innerHTML = '';

            // for each column filter subtree, append an <li>...</li> element containing:
            // column title, "(copy)" link, and editable text input box containing the subexpression
            columnFilters.forEach(function(filter) {
                var conditional = filter.children[0],
                    item = conditional.schema[0],
                    name = conditional.column,
                    alias = item.alias || name,
                    expression = filter.getState({ syntax: queryLanguage }),
                    isNull = expression === '(NULL IS NULL)' || expression === '',
                    content = isNull ? '' : expression,
                    className = isNull ? 'filter-tree-error' : '',
                    li = automat.firstChild(markup[queryLanguage], alias, name, content, className);

                listEl.appendChild(li);
            });

            folder.onkeyup = setColumnFilterState.bind(this, queryLanguage);

            if (copyAllLink) {
                // if there's a "(copy all)" link, hide it if only 0 or 1 subexpressions
                copyAllLink.style.display = columnFilters.length > 1 ? 'block' : 'none';
            }
        }

    }
}

//var RETURN_KEY = 0x0d, ESCAPE_KEY = 0x1b;
/**
 * Called from key-up events from `#columnSQL` and `#columnCQL` tabs.
 * @this Filter
 * @param {string} queryLanguage
 * @param {KeyboardEvent} evt
 */
function setColumnFilterState(queryLanguage, evt) {
    var ctrl = evt.target;

    // Only handle if key was pressed inside a text box.
    if (ctrl.classList.contains('filter-text-box')) {
        //switch (evt.keyCode) {
        //    case ESCAPE_KEY:
        //        ctrl.value = oldArg;
        //    case RETURN_KEY: // eslint-disable-line no-fallthrough
        //        ctrl.blur();
        //        break;
        //    default:
        var error,
            options = { syntax: queryLanguage, alert: true };

        try {
            error = this.filter.setColumnFilterState(ctrl.name, ctrl.value, options);
        } catch (err) {
            error = err;
        }

        decorateFilterInput(ctrl, error);
        //}
    }
}

function activeFiltersMessage(n) {
    var result;

    switch (n) {
        case 0:
            result = 'There are no active column filters.';
            break;
        case 1:
            result = 'There is 1 active column filter:';
            break;
        default:
            result = 'There are ' + n + ' active column filters:';
    }

    return result;
}


module.exports = ManageFilters;

},{"../../html":2,"../lib/DOM/copy-input":109,"./Dialog":88,"automat":5,"pop-menu":44,"tabz":47}],90:[function(require,module,exports){
'use strict';

module.exports.ColumnPicker = require('./ColumnPicker');
module.exports.ManageFilters = require('./ManageFilters');

},{"./ColumnPicker":87,"./ManageFilters":89}],91:[function(require,module,exports){
/* eslint-env browser */

'use strict';

/* NOTE
 *
 * What this file is:
 * * This file is browserify's entry point.
 * * This file creates the `window.fin.Hypergrid` object.
 *
 * What this file is not:
 * * This file is not a node module; it has no reference to `module.exports` or `exports`; it cannot be "required" by any other file.
 * * This file is blacklisted in .npmignore and is not published to npm.
 *
 * Note: The npm "main" entry point (as noted in package.json) is src/Hypergrid.js.
 */

var Hypergrid = require('./Hypergrid');

// Expose some namespaces to users of the hypergrid.js file through `fin.Hypergrid`:
Hypergrid.images = require('../images');
Hypergrid.behaviors = require('./behaviors');
Hypergrid.dataModels = require('./dataModels');
Hypergrid.features = require('./features');
Hypergrid.analytics = require('./Shared.js').analytics;
Hypergrid.DataSourceBase = require('./dataSources').DataSourceBase;
Hypergrid.rectangular = require('rectangular');

// Create the `fin` namespace and the `fin.Hypergrid` objects:
(window.fin = window.fin || {}).Hypergrid = Hypergrid;

// Create the `datasaur` namespace and the `datasaur.base` objects:
(window.datasaur = window.datasaur || {}).base = Hypergrid.DataSourceBase;

// Note that while users of the npm module can also access the above namespaces through the Hypergrid object, in reality they also have access to any namespace through `require`, for example:
// var behaviorJSON = require('fin-hypergrid/src/behaviors/JSON');

},{"../images":4,"./Hypergrid":50,"./Shared.js":51,"./behaviors":57,"./dataModels":83,"./dataSources":85,"./features":108,"rectangular":45}],92:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 * @extends Feature
 */
var CellClick = Feature.extend('CellClick', {

    /**
     * @memberOf CellClick.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleClick: function(grid, event) {
        var consumed;

        if (
            event.gridCell.y >= grid.behavior.getHeaderRowCount() &&
            event.gridCell.x >= 0
        ) {
            consumed = grid.cellClicked(event);
        }

        if (!consumed && this.next) {
            this.next.handleClick(grid, event);
        }
    }
});

module.exports = CellClick;

},{"./Feature":101}],93:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');
var CellEditor = require('../cellEditors/CellEditor');

/**
 * @constructor
 * @extends Feature
 */
var CellEditing = Feature.extend('CellEditing', {

    /**
     * @memberOf CellEditing.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDoubleClick: function(grid, event) {
        if (
            grid.properties.editOnDoubleClick &&
            event.isGridCell
        ) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    handleClick: function(grid, event) {
        if (
            !grid.properties.editOnDoubleClick &&
            event.isGridCell
        ) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleClick(grid, event);
        }
    },

    /**
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf KeyPaging.prototype
     */
    handleKeyDown: function(grid, event) {
        var char, isVisibleChar, isDeleteChar, currentCell, editor;

        if (
            grid.properties.editOnKeydown &&
            !grid.cellEditor &&
            (
                (char = event.detail.char) === 'F2' ||
                (isVisibleChar = char.length === 1 && !(event.detail.meta || event.detail.ctrl)) ||
                (isDeleteChar = char === 'DELETE' || char === 'BACKSPACE')
            )
        ) {
            currentCell = grid.selectionModel.getLastSelection();
            if (currentCell) {
                var pseudoEvent = new grid.behavior.CellEvent(currentCell.origin.x,
                    currentCell.origin.y + grid.behavior.getHeaderRowCount());

                editor = grid.onEditorActivate(pseudoEvent);

                if (editor instanceof CellEditor) {
                    if (isVisibleChar) {
                        editor.input.value = char;
                    } else if (isDeleteChar) {
                        editor.setEditorValue('');
                    }
                    event.detail.primitiveEvent.preventDefault();
                }
            }
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    }

});

module.exports = CellEditing;

},{"../cellEditors/CellEditor":58,"./Feature":101}],94:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 * @extends Feature
 */
var CellSelection = Feature.extend('CellSelection', {

    /**
     * The pixel location of the mouse pointer during a drag operation.
     * @type {window.fin.rectangular.Point}
     * @memberOf CellSelection.prototype
     */
    currentDrag: null,

    /**
     * the cell coordinates of the where the mouse pointer is during a drag operation
     * @type {Object}
     * @memberOf CellSelection.prototype
     */
    lastDragCell: null,

    /**
     * a millisecond value representing the previous time an autoscroll started
     * @type {number}
     * @default 0
     * @memberOf CellSelection.prototype
     */
    sbLastAuto: 0,

    /**
     * a millisecond value representing the time the current autoscroll started
     * @type {number}
     * @default 0
     * @memberOf CellSelection.prototype
     */
    sbAutoStart: 0,

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        if (this.dragging) {
            this.dragging = false;
        }
        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        var dx = event.gridCell.x,
            dy = event.dataCell.y,
            isSelectable = grid.behavior.getCellProperty(event.dataCell.x, event.gridCell.y, 'cellSelection');

        if (isSelectable && event.isGridCell && !event.primitiveEvent.detail.isRightClick) {
            var dCell = grid.newPoint(dx, dy),
                primEvent = event.primitiveEvent,
                keys = primEvent.detail.keys;
            this.dragging = true;
            this.extendSelection(grid, dCell, keys);
        } else if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {
        if (this.dragging && grid.isCellSelection() && !event.primitiveEvent.detail.isRightClick) {
            this.currentDrag = event.primitiveEvent.detail.mouse;
            this.lastDragCell = grid.newPoint(event.gridCell.x, event.dataCell.y);
            this.checkDragScroll(grid, this.currentDrag);
            this.handleMouseDragCellSelection(grid, this.lastDragCell, event.primitiveEvent.detail.keys);
        } else  if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyDown: function(grid, event) {
        var handler;
        if ((handler = this['handle' + event.detail.char])) {
            handler.call(this, grid, event.detail);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Handle a mousedrag selection.
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    handleMouseDragCellSelection: function(grid, gridCell, keys) {
        var x = Math.max(0, gridCell.x),
            y = Math.max(0, gridCell.y),
            previousDragExtent = grid.getDragExtent(),
            mouseDown = grid.getMouseDown(),
            newX = x - mouseDown.x,
            newY = y - mouseDown.y;

        if (previousDragExtent.x === newX && previousDragExtent.y === newY) {
            return;
        }

        grid.clearMostRecentSelection();

        grid.select(mouseDown.x, mouseDown.y, newX, newY);
        grid.setDragExtent(grid.newPoint(newX, newY));

        grid.repaint();
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc this checks while were dragging if we go outside the visible bounds, if so, kick off the external autoscroll check function (above)
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     */
    checkDragScroll: function(grid, mouse) {
        if (!grid.properties.scrollingEnabled) {
            return;
        }
        var b = grid.getDataBounds();
        var inside = b.contains(mouse);
        if (inside) {
            if (grid.isScrollingNow()) {
                grid.setScrollingNow(false);
            }
        } else if (!grid.isScrollingNow()) {
            grid.setScrollingNow(true);
            this.scrollDrag(grid);
        }
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc this function makes sure that while we are dragging outside of the grid visible bounds, we srcroll accordingly
     * @param {Hypergrid} grid
     */
    scrollDrag: function(grid) {
        if (!grid.isScrollingNow()) {
            return;
        }

        var dragStartedInHeaderArea = grid.isMouseDownInHeaderArea(),
            lastDragCell = this.lastDragCell,
            b = grid.getDataBounds(),

            xOffset = 0,
            yOffset = 0,

            numFixedColumns = grid.getFixedColumnCount(),
            numFixedRows = grid.getFixedRowCount(),

            dragEndInFixedAreaX = lastDragCell.x < numFixedColumns,
            dragEndInFixedAreaY = lastDragCell.y < numFixedRows;

        if (!dragStartedInHeaderArea) {
            if (this.currentDrag.x < b.origin.x) {
                xOffset = -1;
            }
            if (this.currentDrag.y < b.origin.y) {
                yOffset = -1;
            }
        }
        if (this.currentDrag.x > b.origin.x + b.extent.x) {
            xOffset = 1;
        }
        if (this.currentDrag.y > b.origin.y + b.extent.y) {
            yOffset = 1;
        }

        var dragCellOffsetX = xOffset;
        var dragCellOffsetY = yOffset;

        if (dragEndInFixedAreaX) {
            dragCellOffsetX = 0;
        }
        if (dragEndInFixedAreaY) {
            dragCellOffsetY = 0;
        }

        this.lastDragCell = lastDragCell.plusXY(dragCellOffsetX, dragCellOffsetY);
        grid.scrollBy(xOffset, yOffset);
        this.handleMouseDragCellSelection(grid, lastDragCell, []); // update the selection
        grid.repaint();
        setTimeout(this.scrollDrag.bind(this, grid), 25);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc extend a selection or create one if there isnt yet
     * @param {Hypergrid} grid
     * @param {Object} gridCell - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    extendSelection: function(grid, gridCell, keys) {
        var hasCTRL = keys.indexOf('CTRL') >= 0,
            hasSHIFT = keys.indexOf('SHIFT') >= 0,
            mousePoint = grid.getMouseDown(),
            x = gridCell.x, // - numFixedColumns + scrollLeft;
            y = gridCell.y; // - numFixedRows + scrollTop;

        //were outside of the grid do nothing
        if (x < 0 || y < 0) {
            return;
        }

        //we have repeated a click in the same spot deslect the value from last time
        if (
            hasCTRL &&
            x === mousePoint.x &&
            y === mousePoint.y
        ) {
            grid.clearMostRecentSelection();
            grid.popMouseDown();
            grid.repaint();
            return;
        }

        if (!hasCTRL && !hasSHIFT) {
            grid.clearSelections();
        }

        if (hasSHIFT) {
            grid.clearMostRecentSelection();
            grid.select(mousePoint.x, mousePoint.y, x - mousePoint.x, y - mousePoint.y);
            grid.setDragExtent(grid.newPoint(x - mousePoint.x, y - mousePoint.y));
        } else {
            grid.select(x, y, 0, 0);
            grid.setMouseDown(grid.newPoint(x, y));
            grid.setDragExtent(grid.newPoint(0, 0));
        }
        grid.repaint();
    },


    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     */
    handleDOWNSHIFT: function(grid) {
        this.moveShiftSelect(grid, 0, 1);
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUPSHIFT: function(grid) {
        this.moveShiftSelect(grid, 0, -1);
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFTSHIFT: function(grid) {
        this.moveShiftSelect(grid, -1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHTSHIFT: function(grid) {
        this.moveShiftSelect(grid, 1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDOWN: function(grid, event) {
        //keep the browser viewport from auto scrolling on key event
        event.primitiveEvent.preventDefault();

        var count = this.getAutoScrollAcceleration();
        this.moveSingleSelect(grid, 0, count);
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUP: function(grid, event) {
        //keep the browser viewport from auto scrolling on key event
        event.primitiveEvent.preventDefault();

        var count = this.getAutoScrollAcceleration();
        this.moveSingleSelect(grid, 0, -count);
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFT: function(grid) {
        this.moveSingleSelect(grid, -1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHT: function(grid) {
        this.moveSingleSelect(grid, 1, 0);
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc If we are holding down the same navigation key, accelerate the increment we scroll
     * #### returns: integer
     */
    getAutoScrollAcceleration: function() {
        var count = 1;
        var elapsed = this.getAutoScrollDuration() / 2000;
        count = Math.max(1, Math.floor(elapsed * elapsed * elapsed * elapsed));
        return count;
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc set the start time to right now when we initiate an auto scroll
     */
    setAutoScrollStartTime: function() {
        this.sbAutoStart = Date.now();
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc update the autoscroll start time if we haven't autoscrolled within the last 500ms otherwise update the current autoscroll time
     */
    pingAutoScroll: function() {
        var now = Date.now();
        if (now - this.sbLastAuto > 500) {
            this.setAutoScrollStartTime();
        }
        this.sbLastAuto = Date.now();
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc answer how long we have been auto scrolling
     * #### returns: integer
     */
    getAutoScrollDuration: function() {
        if (Date.now() - this.sbLastAuto > 500) {
            return 0;
        }
        return Date.now() - this.sbAutoStart;
    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Augment the most recent selection extent by (offsetX,offsetY) and scroll if necessary.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveShiftSelect: function(grid, offsetX, offsetY) {

        var maxColumns = grid.getColumnCount() - 1,
            maxRows = grid.getRowCount() - 1,

            maxViewableColumns = grid.renderer.visibleColumns.length - 1,
            maxViewableRows = grid.renderer.visibleRows.length - 1,

            origin = grid.getMouseDown(),
            extent = grid.getDragExtent(),

            newX = extent.x + offsetX,
            newY = extent.y + offsetY;

        if (!grid.properties.scrollingEnabled) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        newX = Math.min(maxColumns - origin.x, Math.max(-origin.x, newX));
        newY = Math.min(maxRows - origin.y, Math.max(-origin.y, newY));

        grid.clearMostRecentSelection();
        grid.select(origin.x, origin.y, newX, newY);

        grid.setDragExtent(grid.newPoint(newX, newY));

        if (grid.insureModelColIsVisible(newX + origin.x, offsetX)) {
            this.pingAutoScroll();
        }
        if (grid.insureModelRowIsVisible(newY + origin.y, offsetY)) {
            this.pingAutoScroll();
        }

        grid.repaint();

    },

    /**
     * @memberOf CellSelection.prototype
     * @desc Replace the most recent selection with a single cell selection that is moved (offsetX,offsetY) from the previous selection extent.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveSingleSelect: function(grid, offsetX, offsetY) {
        var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent()),

            newX = mouseCorner.x + offsetX,
            newY = mouseCorner.y + offsetY,

            maxColumns = grid.getColumnCount() - 1,
            maxRows = grid.getRowCount() - 1,

            maxViewableColumns = grid.getVisibleColumnsCount() - 1,
            maxViewableRows = grid.getVisibleRowsCount() - 1;

        if (!grid.properties.scrollingEnabled) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        newX = Math.min(maxColumns, Math.max(0, newX));
        newY = Math.min(maxRows, Math.max(0, newY));

        grid.clearSelections();
        grid.select(newX, newY, 0, 0);
        grid.setMouseDown(grid.newPoint(newX, newY));
        grid.setDragExtent(grid.newPoint(0, 0));

        grid.selectCellAndScrollToMakeVisible(newX, newY);

        // if (grid.insureModelColIsVisible(newX, offsetX)) {
        //     this.pingAutoScroll();
        // }
        // if (grid.insureModelRowIsVisible(newY, offsetY)) {
        //     this.pingAutoScroll();
        // }

        grid.repaint();

    }

});

module.exports = CellSelection;

},{"./Feature":101}],95:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 * @extends Feature
 */
var ColumnAutosizing = Feature.extend('ColumnAutosizing', {

    /**
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf ColumnAutosizing.prototype
     */
    handleDoubleClick: function(grid, event) {
        var headerRowCount = grid.getHeaderRowCount();
        //var headerColCount = grid.getHeaderColumnCount();
        var gridCell = event.gridCell;
        if (gridCell.y <= headerRowCount) {
            grid.autosizeColumn(gridCell.x);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    }

});

module.exports = ColumnAutosizing;

},{"./Feature":101}],96:[function(require,module,exports){
/* eslint-env browser */
/* global requestAnimationFrame */

'use strict';

// This feature is responsible for column drag and drop reordering.
// This object is a mess and desperately needs a complete rewrite.....

var Feature = require('./Feature');

var canDragCursorName = '-webkit-grab',
    draggingCursorName = '-webkit-grabbing';

var columnAnimationTime = 150;
var dragger;
var draggerCTX;
var floatColumn;
var floatColumnCTX;

/**
 * @constructor
 * @extends Feature
 */
var ColumnMoving = Feature.extend('ColumnMoving', {

    /**
     * queue up the animations that need to play so they are done synchronously
     * @type {Array}
     * @memberOf CellMoving.prototype
     */
    floaterAnimationQueue: [],

    /**
     * am I currently auto scrolling right
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    columnDragAutoScrollingRight: false,

    /**
     * am I currently auto scrolling left
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    columnDragAutoScrollingLeft: false,

    /**
     * is the drag mechanism currently enabled ("armed")
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    dragArmed: false,

    /**
     * am I dragging right now
     * @type {boolean}
     * @memberOf CellMoving.prototype
     */
    dragging: false,

    /**
     * the column index of the currently dragged column
     * @type {number}
     * @memberOf CellMoving.prototype
     */
    dragCol: -1,

    /**
     * an offset to position the dragged item from the cursor
     * @type {number}
     * @memberOf CellMoving.prototype
     */
    dragOffset: 0,

    /**
     * @memberOf CellMoving.prototype
     * @desc give me an opportunity to initialize stuff on the grid
     * @param {Hypergrid} grid
     */
    initializeOn: function(grid) {
        this.isFloatingNow = false;
        this.initializeAnimationSupport(grid);
        if (this.next) {
            this.next.initializeOn(grid);
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc initialize animation support on the grid
     * @param {Hypergrid} grid
     */
    initializeAnimationSupport: function(grid) {
        if (!dragger) {
            dragger = document.createElement('canvas');
            dragger.setAttribute('width', '0px');
            dragger.setAttribute('height', '0px');
            dragger.style.position = 'fixed';

            document.body.appendChild(dragger);
            draggerCTX = dragger.getContext('2d');
        }
        if (!floatColumn) {
            floatColumn = document.createElement('canvas');
            floatColumn.setAttribute('width', '0px');
            floatColumn.setAttribute('height', '0px');
            floatColumn.style.position = 'fixed';

            document.body.appendChild(floatColumn);
            floatColumnCTX = floatColumn.getContext('2d');
        }

    },

    /**
     * @memberOf CellMoving.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {

        var gridCell = event.gridCell;
        var x;
        //var y;

        var distance = Math.abs(event.primitiveEvent.detail.dragstart.x - event.primitiveEvent.detail.mouse.x);

        if (distance < 10 || event.isColumnFixed) {
            if (this.next) {
                this.next.handleMouseDrag(grid, event);
            }
            return;
        }

        if (event.isHeaderCell && this.dragArmed && !this.dragging) {
            this.dragging = true;
            this.dragCol = gridCell.x;
            this.dragOffset = event.mousePoint.x;
            this.detachChain();
            x = event.primitiveEvent.detail.mouse.x - this.dragOffset;
            //y = event.primitiveEvent.detail.mouse.y;
            this.createDragColumn(grid, x, this.dragCol);
        } else if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }

        if (this.dragging) {
            x = event.primitiveEvent.detail.mouse.x - this.dragOffset;
            //y = event.primitiveEvent.detail.mouse.y;
            this.dragColumn(grid, x);
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        if (
            grid.behavior.isColumnReorderable() &&
            !event.isColumnFixed
        ) {
            if (event.isHeaderCell) {
                this.dragArmed = true;
                this.cursor = draggingCursorName;
                grid.clearSelections();
            }
        }
        if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        //var col = event.gridCell.x;
        if (this.dragging) {
            this.cursor = null;
            //delay here to give other events a chance to be dropped
            var self = this;
            this.endDragColumn(grid);
            setTimeout(function() {
                self.attachChain();
            }, 200);
        }
        this.dragCol = -1;
        this.dragging = false;
        this.dragArmed = false;
        this.cursor = null;
        grid.repaint();

        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }

    },

    /**
     * @memberOf CellMoving.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseMove: function(grid, event) {
        if (
            grid.behavior.isColumnReorderable() &&
            !event.isColumnFixed &&
            !this.dragging &&
            event.isHeaderCell &&
            event.mousePoint.y < grid.properties.columnGrabMargin
        ) {
            this.cursor = canDragCursorName;
        } else {
            this.cursor = null;
        }

        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }

        if (event.isHeaderCell && this.dragging) {
            this.cursor = draggingCursorName; //move';
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc this is the main event handler that manages the dragging of the column
     * @param {Hypergrid} grid
     * @param {boolean} draggedToTheRight - are we moving to the right
     */
    floatColumnTo: function(grid, draggedToTheRight) {
        this.floatingNow = true;

        var visibleColumns = grid.renderer.visibleColumns;
        var scrollLeft = grid.getHScrollValue();
        var floaterIndex = grid.renderOverridesCache.floater.columnIndex;
        var draggerIndex = grid.renderOverridesCache.dragger.columnIndex;
        var hdpiratio = grid.renderOverridesCache.dragger.hdpiratio;

        var draggerStartX;
        var floaterStartX;
        var fixedColumnCount = grid.getFixedColumnCount();
        var draggerWidth = grid.getColumnWidth(draggerIndex);
        var floaterWidth = grid.getColumnWidth(floaterIndex);

        var max = grid.getVisibleColumnsCount();

        var doffset = 0;
        var foffset = 0;

        if (draggerIndex >= fixedColumnCount) {
            doffset = scrollLeft;
        }
        if (floaterIndex >= fixedColumnCount) {
            foffset = scrollLeft;
        }

        if (draggedToTheRight) {
            draggerStartX = visibleColumns[Math.min(max, draggerIndex - doffset)].left;
            floaterStartX = visibleColumns[Math.min(max, floaterIndex - foffset)].left;

            grid.renderOverridesCache.dragger.startX = (draggerStartX + floaterWidth) * hdpiratio;
            grid.renderOverridesCache.floater.startX = draggerStartX * hdpiratio;

        } else {
            floaterStartX = visibleColumns[Math.min(max, floaterIndex - foffset)].left;
            draggerStartX = floaterStartX + draggerWidth;

            grid.renderOverridesCache.dragger.startX = floaterStartX * hdpiratio;
            grid.renderOverridesCache.floater.startX = draggerStartX * hdpiratio;
        }
        grid.swapColumns(draggerIndex, floaterIndex);
        grid.renderOverridesCache.dragger.columnIndex = floaterIndex;
        grid.renderOverridesCache.floater.columnIndex = draggerIndex;


        this.floaterAnimationQueue.unshift(this.doColumnMoveAnimation(grid, floaterStartX, draggerStartX));

        this.doFloaterAnimation(grid);

    },

    /**
     * @memberOf CellMoving.prototype
     * @desc manifest the column drag and drop animation
     * @param {Hypergrid} grid
     * @param {number} floaterStartX - the x start coordinate of the column underneath that floats behind the dragged column
     * @param {number} draggerStartX - the x start coordinate of the dragged column
     */
    doColumnMoveAnimation: function(grid, floaterStartX, draggerStartX) {
        var self = this;
        return function() {
            var d = floatColumn;
            d.style.display = 'inline';
            self.setCrossBrowserProperty(d, 'transform', 'translate(' + floaterStartX + 'px, ' + 0 + 'px)');

            //d.style.webkit-webkit-Transform = 'translate(' + floaterStartX + 'px, ' + 0 + 'px)';
            //d.style.webkit-webkit-Transform = 'translate(' + floaterStartX + 'px, ' + 0 + 'px)';

            requestAnimationFrame(function() {
                self.setCrossBrowserProperty(d, 'transition', (self.isWebkit ? '-webkit-' : '') + 'transform ' + columnAnimationTime + 'ms ease');
                self.setCrossBrowserProperty(d, 'transform', 'translate(' + draggerStartX + 'px, ' + -2 + 'px)');
            });
            grid.repaint();
            //need to change this to key frames

            setTimeout(function() {
                self.setCrossBrowserProperty(d, 'transition', '');
                grid.renderOverridesCache.floater = null;
                grid.repaint();
                self.doFloaterAnimation(grid);
                requestAnimationFrame(function() {
                    d.style.display = 'none';
                    self.isFloatingNow = false;
                });
            }, columnAnimationTime + 50);
        };
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc manifest the floater animation
     * @param {Hypergrid} grid
     */
    doFloaterAnimation: function(grid) {
        if (this.floaterAnimationQueue.length === 0) {
            this.floatingNow = false;
            grid.repaint();
            return;
        }
        var animation = this.floaterAnimationQueue.pop();
        animation();
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc create the float column at columnIndex underneath the dragged column
     * @param {Hypergrid} grid
     * @param {number} columnIndex - the index of the column that will be floating
     */
    createFloatColumn: function(grid, columnIndex) {

        var fixedColumnCount = grid.getFixedColumnCount();
        var scrollLeft = grid.getHScrollValue();

        if (columnIndex < fixedColumnCount) {
            scrollLeft = 0;
        }

        var columnWidth = grid.getColumnWidth(columnIndex);
        var colHeight = grid.div.clientHeight;
        var d = floatColumn;
        var style = d.style;
        var location = grid.div.getBoundingClientRect();

        style.top = (location.top - 2) + 'px';
        style.left = location.left + 'px';

        var hdpiRatio = grid.getHiDPI(floatColumnCTX);

        d.setAttribute('width', Math.round(columnWidth * hdpiRatio) + 'px');
        d.setAttribute('height', Math.round(colHeight * hdpiRatio) + 'px');
        style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
        style.width = columnWidth + 'px'; //Math.round(columnWidth / hdpiRatio) + 'px';
        style.height = colHeight + 'px'; //Math.round(colHeight / hdpiRatio) + 'px';
        style.borderTop = '1px solid ' + grid.properties.lineColor;
        style.backgroundColor = grid.properties.backgroundColor;

        var startX = grid.renderer.visibleColumns[columnIndex - scrollLeft].left * hdpiRatio;

        floatColumnCTX.scale(hdpiRatio, hdpiRatio);

        grid.renderOverridesCache.floater = {
            columnIndex: columnIndex,
            ctx: floatColumnCTX,
            startX: startX,
            width: columnWidth,
            height: colHeight,
            hdpiratio: hdpiRatio
        };

        style.zIndex = '4';
        this.setCrossBrowserProperty(d, 'transform', 'translate(' + startX + 'px, ' + -2 + 'px)');
        style.cursor = draggingCursorName;
        grid.repaint();
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc utility function for setting cross browser css properties
     * @param {HTMLElement} element - descripton
     * @param {string} property - the property
     * @param {string} value - the value to assign
     */
    setCrossBrowserProperty: function(element, property, value) {
        var uProperty = property[0].toUpperCase() + property.substr(1);
        this.setProp(element, 'webkit' + uProperty, value);
        this.setProp(element, 'Moz' + uProperty, value);
        this.setProp(element, 'ms' + uProperty, value);
        this.setProp(element, 'O' + uProperty, value);
        this.setProp(element, property, value);
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc utility function for setting properties on HTMLElements
     * @param {HTMLElement} element - descripton
     * @param {string} property - the property
     * @param {string} value - the value to assign
     */
    setProp: function(element, property, value) {
        if (property in element.style) {
            element.style[property] = value;
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc create the dragged column at columnIndex above the floated column
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     * @param {number} columnIndex - the index of the column that will be floating
     */
    createDragColumn: function(grid, x, columnIndex) {

        var fixedColumnCount = grid.getFixedColumnCount();
        var scrollLeft = grid.getHScrollValue();

        if (columnIndex < fixedColumnCount) {
            scrollLeft = 0;
        }

        var hdpiRatio = grid.getHiDPI(draggerCTX);
        var columnWidth = grid.getColumnWidth(columnIndex);
        var colHeight = grid.div.clientHeight;
        var d = dragger;
        var location = grid.div.getBoundingClientRect();
        var style = d.style;

        style.top = location.top + 'px';
        style.left = location.left + 'px';
        style.opacity = 0.85;
        style.boxShadow = '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)';
        //style.zIndex = 100;
        style.borderTop = '1px solid ' + grid.properties.lineColor;
        style.backgroundColor = grid.properties.backgroundColor;

        d.setAttribute('width', Math.round(columnWidth * hdpiRatio) + 'px');
        d.setAttribute('height', Math.round(colHeight * hdpiRatio) + 'px');

        style.width = columnWidth + 'px'; //Math.round(columnWidth / hdpiRatio) + 'px';
        style.height = colHeight + 'px'; //Math.round(colHeight / hdpiRatio) + 'px';

        var startX = grid.renderer.visibleColumns[columnIndex - scrollLeft].left * hdpiRatio;

        draggerCTX.scale(hdpiRatio, hdpiRatio);

        grid.renderOverridesCache.dragger = {
            columnIndex: columnIndex,
            startIndex: columnIndex,
            ctx: draggerCTX,
            startX: startX,
            width: columnWidth,
            height: colHeight,
            hdpiratio: hdpiRatio
        };

        this.setCrossBrowserProperty(d, 'transform', 'translate(' + x + 'px, -5px)');
        style.zIndex = '5';
        style.cursor = draggingCursorName;
        grid.repaint();
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc this function is the main dragging logic
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     */
    dragColumn: function(grid, x) {

        //TODO: this function is overly complex, refactor this in to something more reasonable
        var self = this;

        var autoScrollingNow = this.columnDragAutoScrollingRight || this.columnDragAutoScrollingLeft;

        var hdpiRatio = grid.getHiDPI(draggerCTX);

        var dragColumnIndex = grid.renderOverridesCache.dragger.columnIndex;

        var minX = 0;
        var maxX = grid.renderer.getFinalVisibleColumnBoundary();
        x = Math.min(x, maxX + 15);
        x = Math.max(minX - 15, x);

        //am I at my lower bound
        var atMin = x < minX && dragColumnIndex !== 0;

        //am I at my upper bound
        var atMax = x > maxX;

        var d = dragger;

        this.setCrossBrowserProperty(d, 'transition', (self.isWebkit ? '-webkit-' : '') + 'transform ' + 0 + 'ms ease, box-shadow ' + columnAnimationTime + 'ms ease');

        this.setCrossBrowserProperty(d, 'transform', 'translate(' + x + 'px, ' + -10 + 'px)');
        requestAnimationFrame(function() {
            d.style.display = 'inline';
        });

        var overCol = grid.renderer.getColumnFromPixelX(x + (d.width / 2 / hdpiRatio));

        if (atMin) {
            overCol = 0;
        }

        if (atMax) {
            overCol = grid.getColumnCount() - 1;
        }

        var doAFloat = dragColumnIndex > overCol;
        doAFloat = doAFloat || (overCol - dragColumnIndex >= 1);

        if (doAFloat && !atMax && !autoScrollingNow) {
            var draggedToTheRight = dragColumnIndex < overCol;
            // if (draggedToTheRight) {
            //     overCol -= 1;
            // }
            if (this.isFloatingNow) {
                return;
            }

            this.isFloatingNow = true;
            this.createFloatColumn(grid, overCol);
            this.floatColumnTo(grid, draggedToTheRight);
        } else {

            if (x < minX - 10) {
                this.checkAutoScrollToLeft(grid, x);
            }
            if (x > minX - 10) {
                this.columnDragAutoScrollingLeft = false;
            }
            //lets check for autoscroll to right if were up against it
            if (atMax || x > maxX + 10) {
                this.checkAutoScrollToRight(grid, x);
                return;
            }
            if (x < maxX + 10) {
                this.columnDragAutoScrollingRight = false;
            }
        }
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc autoscroll to the right if necessary
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     */
    checkAutoScrollToRight: function(grid, x) {
        if (this.columnDragAutoScrollingRight) {
            return;
        }
        this.columnDragAutoScrollingRight = true;
        this._checkAutoScrollToRight(grid, x);
    },

    _checkAutoScrollToRight: function(grid, x) {
        if (!this.columnDragAutoScrollingRight) {
            return;
        }
        var scrollLeft = grid.getHScrollValue();
        if (!grid.dragging || scrollLeft > (grid.sbHScroller.range.max - 2)) {
            return;
        }
        var draggedIndex = grid.renderOverridesCache.dragger.columnIndex;
        grid.scrollBy(1, 0);
        var newIndex = draggedIndex + 1;

        grid.swapColumns(newIndex, draggedIndex);
        grid.renderOverridesCache.dragger.columnIndex = newIndex;

        setTimeout(this._checkAutoScrollToRight.bind(this, grid, x), 250);
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc autoscroll to the left if necessary
     * @param {Hypergrid} grid
     * @param {number} x - the start position
     */
    checkAutoScrollToLeft: function(grid, x) {
        if (this.columnDragAutoScrollingLeft) {
            return;
        }
        this.columnDragAutoScrollingLeft = true;
        this._checkAutoScrollToLeft(grid, x);
    },

    _checkAutoScrollToLeft: function(grid, x) {
        if (!this.columnDragAutoScrollingLeft) {
            return;
        }

        var scrollLeft = grid.getHScrollValue();
        if (!grid.dragging || scrollLeft < 1) {
            return;
        }
        var draggedIndex = grid.renderOverridesCache.dragger.columnIndex;
        grid.swapColumns(draggedIndex + scrollLeft, draggedIndex + scrollLeft - 1);
        grid.scrollBy(-1, 0);
        setTimeout(this._checkAutoScrollToLeft.bind(this, grid, x), 250);
    },

    /**
     * @memberOf CellMoving.prototype
     * @desc a column drag has completed, update data and cleanup
     * @param {Hypergrid} grid
     */
    endDragColumn: function(grid) {

        var fixedColumnCount = grid.getFixedColumnCount();
        var scrollLeft = grid.getHScrollValue();

        var columnIndex = grid.renderOverridesCache.dragger.columnIndex;

        if (columnIndex < fixedColumnCount) {
            scrollLeft = 0;
        }

        var self = this;
        var startX = grid.renderer.visibleColumns[columnIndex - scrollLeft].left;
        var d = dragger;
        var changed = grid.renderOverridesCache.dragger.startIndex !== grid.renderOverridesCache.dragger.columnIndex;
        self.setCrossBrowserProperty(d, 'transition', (self.isWebkit ? '-webkit-' : '') + 'transform ' + columnAnimationTime + 'ms ease, box-shadow ' + columnAnimationTime + 'ms ease');
        self.setCrossBrowserProperty(d, 'transform', 'translate(' + startX + 'px, ' + -1 + 'px)');
        d.style.boxShadow = '0px 0px 0px #888888';

        setTimeout(function() {
            grid.renderOverridesCache.dragger = null;
            grid.repaint();
            requestAnimationFrame(function() {
                d.style.display = 'none';
                grid.endDragColumnNotification(); //internal notification
                if (changed){
                    grid.fireSyntheticOnColumnsChangedEvent(); //public notification
                }
            });
        }, columnAnimationTime + 50);

    }

});

module.exports = ColumnMoving;

},{"./Feature":101}],97:[function(require,module,exports){
/* eslint-env browser */
/* global requestAnimationFrame */

'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 * @extends Feature
 */
var ColumnPicker = Feature.extend('ColumnPicker', {

    /**
     * @memberOf ColumnPicker.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyUp: function(grid, event) {
        var key = event.detail.char.toLowerCase();
        var keys = grid.properties.editorActivationKeys;
        if (keys.indexOf(key) > -1) {
           grid.toggleDialog('ColumnPicker');
        }
    },

});

module.exports = ColumnPicker;

},{"./Feature":101}],98:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 * @extends Feature
 */
var ColumnResizing = Feature.extend('ColumnResizing', {

    /**
     * the index of the column wall were currently dragging
     * @type {number}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    dragIndex: -2,

    /**
     * the pixel location of the where the drag was initiated
     * @type {number}
     * @default -1
     * @memberOf ColumnResizing.prototype
     */
    dragStart: -1,

    /**
     * the starting width/height of the row/column we are dragging
     * @type {number}
     * @default -1
     * @memberOf ColumnResizing.prototype
     */
    dragIndexStartingSize: -1,

    /**
     * @memberOf ColumnResizing.prototype
     * @desc get the mouse x,y coordinate
     * @returns {number}
     * @param {MouseEvent} event - the mouse event to query
     */
    getMouseValue: function(event) {
        return event.primitiveEvent.detail.mouse.x;
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc get the grid cell x,y coordinate
     * @returns {number}
     * @param {window.fin.rectangular.Point} gridCell
     */
    getGridCellValue: function(gridCell) {
        return gridCell.y;
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the grids x,y scroll value
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getScrollValue: function(grid) {
        return grid.getHScrollValue();
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the width/height of the row/column of interest
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getAreaSize: function(grid, index) {
        return grid.getColumnWidth(index);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc set the width/height of the row/column at index
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     * @param {number} value - the width/height to set to
     */
    setAreaSize: function(grid, index, value) {
        grid.setColumnWidth(index, value);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the recently rendered area's width/height
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getPreviousAbsoluteSize: function(grid, index) {
        return grid.getRenderedWidth(index);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc returns the index of which divider I'm over
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    overAreaDivider: function(grid, event) {
        return grid.overColumnDivider(event);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc am I over the column/row area
     * @returns {boolean}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedOtherArea: function(grid, event) {
        return this.isFirstFixedRow(grid, event);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the cursor name
     * @returns {string}
     */
    getCursorName: function() {
        return 'col-resize';
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {
        if (this.dragIndex > -2) {
            //var fixedAreaCount = this.getFixedAreaCount(grid);
            //var offset = this.getFixedAreaSize(grid, fixedAreaCount + areaIndex);
            var mouse = this.getMouseValue(event);
            var scrollValue = this.getScrollValue(grid);
            if (this.dragIndex < this.getFixedAreaCount(grid)) {
                scrollValue = 0;
            }
            var previous = this.getPreviousAbsoluteSize(grid, this.dragIndex - scrollValue);
            var distance = mouse - previous;
            this.setAreaSize(grid, this.dragIndex, distance);
        } else if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc get the width/height of a specific row/column
     * @param {Hypergrid} grid
     * @param {number} areaIndex - the row/column index of interest
     */
    getSize: function(grid, areaIndex) {
        return this.getAreaSize(grid, areaIndex);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc return the fixed area rows/columns count
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getOtherFixedAreaCount: function(grid) {
        return grid.getFixedRowCount();
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        var overArea = this.overAreaDivider(grid, event);
        if (isEnabled && overArea > -1 && this.isFirstFixedOtherArea(grid, event)) {
            var scrollValue = this.getScrollValue(grid);
            if (overArea < this.getFixedAreaCount(grid)) {
                scrollValue = 0;
            }
            this.dragIndex = overArea - 1 + scrollValue;
            this.dragStart = this.getMouseValue(event);
            this.dragIndexStartingSize = 0;
            this.detachChain();
        } else if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        if (isEnabled && this.dragIndex > -2) {
            this.cursor = null;
            this.dragIndex = -2;

            event.primitiveEvent.stopPropagation();
            //delay here to give other events a chance to be dropped
            var self = this;
            grid.synchronizeScrollingBoundaries();
            setTimeout(function() {
                self.attachChain();
            }, 200);
        } else if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseMove: function(grid, event) {
        if (this.dragIndex > -2) {
            return;
        }
        this.cursor = null;
        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
        this.checkForAreaResizeCursorChange(grid, event);
    },

    /**
     * @memberOf ColumnResizing.prototype
     * @desc fill this in
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    checkForAreaResizeCursorChange: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        if (isEnabled && this.overAreaDivider(grid, event) > -1 && this.isFirstFixedOtherArea(grid, event)) {
            this.cursor = this.getCursorName();
        } else {
            this.cursor = null;
        }

    },

    /**
     * @param {Hypergrid} grid
     * @returns {number}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    getFixedAreaCount: function(grid) {
        var count = grid.getFixedColumnCount() + (grid.isShowRowNumbers() ? 1 : 0) + (grid.hasHierarchyColumn() ? 1 : 0);
        return count;
    },

    /**
     * @param {Hypergrid} grid
     * @param event
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    handleDoubleClick: function(grid, event) {
        var isEnabled = this.isEnabled(grid);
        var hasCursor = this.overAreaDivider(grid, event) > -1; //this.cursor !== null;
        var headerRowCount = grid.getHeaderRowCount();
        //var headerColCount = grid.getHeaderColumnCount();
        var gridCell = event.gridCell;
        if (isEnabled && hasCursor && (gridCell.y <= headerRowCount)) {
            grid.autosizeColumn(gridCell.x - 1);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @param {Hypergrid} grid
     * @returns {boolean}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    isEnabled: function(grid) {
        return true;
    }

});

module.exports = ColumnResizing;

},{"./Feature":101}],99:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * Extra msecs to avoid race condition with fincanvas's double click timer.
 * @type {number}
 * @defaultvalue 50
 * NOTE: 50 msecs seems to work well. 10 and even 25 proved insufficient in Chrome.
 * @private
 */
var RACE_TIME = 50;

/**
 * @constructor
 * @extends Feature
 */
var ColumnSelection = Feature.extend('ColumnSelection', {

    /**
     * The pixel location of the mouse pointer during a drag operation.
     * @type {window.fin.rectangular.Point}
     * @default null
     * @memberOf ColumnSelection.prototype
     */
    currentDrag: null,

    /**
     * The horizontal cell coordinate of the where the mouse pointer is during a drag operation.
     * @type {Object}
     * @default null
     * @memberOf ColumnSelection.prototype
     */
    lastDragColumn: null,

    /**
     * a millisecond value representing the previous time an autoscroll started
     * @type {number}
     * @default 0
     * @memberOf ColumnSelection.prototype
     */
    sbLastAuto: 0,

    /**
     * a millisecond value representing the time the current autoscroll started
     * @type {number}
     * @default 0
     * @memberOf ColumnSelection.prototype
     */
    sbAutoStart: 0,


    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        if (this.dragging) {
            this.dragging = false;
        }
        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    handleDoubleClick: function(grid, event) {
        if (this.doubleClickTimer) {
            clearTimeout(this.doubleClickTimer); // prevent mouseDown from continuing
            this.doubleClickTimer = undefined;
        }
        if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        if (this.doubleClickTimer) {
            return;
        }

        // todo: >= 5 depends on header being top-most row which is currently always true but we may allow header "section" to be arbitrary position within quadrant (see also handleMouseDown in ColumnMoving.js)
        if (
            grid.isColumnSelection() &&
            event.mousePoint.y >= 5 &&
            !event.primitiveEvent.detail.isRightClick &&
            event.isHeaderCell
        ) {
            // HOLD OFF WHILE WAITING FOR DOUBLE-CLICK
            this.doubleClickTimer = setTimeout(function() {
                this.doubleClickTimer = undefined;
                this.dragging = true;
                this.extendSelection(grid, event.gridCell.x, event.primitiveEvent.detail.keys);
            }.bind(this), grid.properties.doubleClickDelay + RACE_TIME);
        } else if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {
        if (
            grid.isColumnSelection() &&
            !this.isColumnDragging(grid) &&
            !event.primitiveEvent.detail.isRightClick &&
            this.dragging
        ) {
            //if we are in the fixed area do not apply the scroll values
            this.lastDragColumn = event.gridCell.x;
            this.currentDrag = event.primitiveEvent.detail.mouse;
            this.checkDragScroll(grid, this.currentDrag);
            this.handleMouseDragCellSelection(grid, this.lastDragColumn, event.primitiveEvent.detail.keys);
        } else if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyDown: function(grid, event) {
        var handler;
        if (
            grid.getLastSelectionType() === 'column' &&
            (handler = this['handle' + event.detail.char])
        ) {
            handler.call(this, grid, event.detail);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc Handle a mousedrag selection
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    handleMouseDragCellSelection: function(grid, x, keys) {
        var mouseX = grid.getMouseDown().x;

        grid.clearMostRecentColumnSelection();

        grid.selectColumn(mouseX, x);
        grid.setDragExtent(grid.newPoint(x - mouseX, 0));

        grid.repaint();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc this checks while were dragging if we go outside the visible bounds, if so, kick off the external autoscroll check function (above)
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     */
    checkDragScroll: function(grid, mouse) {
        if (
            grid.properties.scrollingEnabled &&
            grid.getDataBounds().contains(mouse)
        ) {
            if (grid.isScrollingNow()) {
                grid.setScrollingNow(false);
            }
        } else {
            if (!grid.isScrollingNow()) {
                grid.setScrollingNow(true);
                this.scrollDrag(grid);
            }
        }
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc this function makes sure that while we are dragging outside of the grid visible bounds, we srcroll accordingly
     * @param {Hypergrid} grid
     */
    scrollDrag: function(grid) {
        if (!grid.isScrollingNow()) {
            return;
        }

        var b = grid.getDataBounds(),
            xOffset;

        if (this.currentDrag.x < b.origin.x) {
            xOffset = -1;
        } else if (this.currentDrag.x > b.origin.x + b.extent.x) {
            xOffset = 1;
        }

        if (xOffset) {
            if (this.lastDragColumn >= grid.getFixedColumnCount()) {
                this.lastDragColumn += xOffset;
            }
            grid.scrollBy(xOffset, 0);
        }

        this.handleMouseDragCellSelection(grid, this.lastDragColumn, []); // update the selection
        grid.repaint();
        setTimeout(this.scrollDrag.bind(this, grid), 25);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc extend a selection or create one if there isnt yet
     * @param {Hypergrid} grid
     * @param {Object} gridCell - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    extendSelection: function(grid, x, keys) {
        if (!grid.abortEditing()) { return; }

        var mouseX = grid.getMouseDown().x,
            hasSHIFT = keys.indexOf('SHIFT') > 0;

        if (x < 0) { // outside of the grid?
            return; // do nothing
        }

        if (hasSHIFT) {
            grid.clearMostRecentColumnSelection();
            grid.selectColumn(x, mouseX);
            grid.setDragExtent(grid.newPoint(x - mouseX, 0));
        } else {
            grid.toggleSelectColumn(x, keys);
            grid.setMouseDown(grid.newPoint(x, 0));
            grid.setDragExtent(grid.newPoint(0, 0));
        }

        grid.repaint();
    },


    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     */
    handleDOWNSHIFT: function(grid) {},

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUPSHIFT: function(grid) {},

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFTSHIFT: function(grid) {
        this.moveShiftSelect(grid, -1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHTSHIFT: function(grid) {
        this.moveShiftSelect(grid, 1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDOWN: function(grid) {

        // var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent());
        // var maxRows = grid.getRowCount() - 1;

        // var newX = mouseCorner.x;
        // var newY = grid.getHeaderRowCount() + grid.getVScrollValue();

        // newY = Math.min(maxRows, newY);

        // grid.clearSelections();
        // grid.select(newX, newY, 0, 0);
        // grid.setMouseDown(new grid.rectangular.Point(newX, newY));
        // grid.setDragExtent(new grid.rectangular.Point(0, 0));

        // grid.repaint();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUP: function(grid) {},

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFT: function(grid) {
        this.moveSingleSelect(grid, -1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHT: function(grid) {
        this.moveSingleSelect(grid, 1);
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc If we are holding down the same navigation key, accelerate the increment we scroll
     * #### returns: integer
     */
    getAutoScrollAcceleration: function() {
        var elapsed = this.getAutoScrollDuration() / 2000;
        return Math.max(1, Math.floor(elapsed * elapsed * elapsed * elapsed));
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc set the start time to right now when we initiate an auto scroll
     */
    setAutoScrollStartTime: function() {
        this.sbAutoStart = Date.now();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc update the autoscroll start time if we haven't autoscrolled within the last 500ms otherwise update the current autoscroll time
     */
    pingAutoScroll: function() {
        var now = Date.now();
        if (now - this.sbLastAuto > 500) {
            this.setAutoScrollStartTime();
        }
        this.sbLastAuto = Date.now();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc answer how long we have been auto scrolling
     * #### returns: integer
     */
    getAutoScrollDuration: function() {
        if (Date.now() - this.sbLastAuto > 500) {
            return 0;
        }
        return Date.now() - this.sbAutoStart;
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc Augment the most recent selection extent by (offsetX,offsetY) and scroll if necessary.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveShiftSelect: function(grid, offsetX) {
        var origin = grid.getMouseDown(),
            extent = grid.getDragExtent(),
            newX = extent.x + offsetX,
            maxViewableColumns = grid.renderer.visibleColumns.length - 1,
            maxColumns = grid.getColumnCount() - 1;

        if (!grid.properties.scrollingEnabled) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
        }

        newX = Math.min(maxColumns - origin.x, Math.max(-origin.x, newX));

        grid.clearMostRecentColumnSelection();
        grid.selectColumn(origin.x, origin.x + newX);
        grid.setDragExtent(grid.newPoint(newX, 0));

        if (grid.insureModelColIsVisible(newX + origin.x, offsetX)) {
            this.pingAutoScroll();
        }

        grid.repaint();
    },

    /**
     * @memberOf ColumnSelection.prototype
     * @desc Replace the most recent selection with a single cell selection that is moved (offsetX,offsetY) from the previous selection extent.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveSingleSelect: function(grid, offsetX) {
        var extent = grid.getDragExtent(),
            mouseCorner = grid.getMouseDown().plus(extent),
            newX = mouseCorner.x + offsetX,
            maxColumns = grid.getColumnCount() - 1,
            maxViewableColumns = grid.getVisibleColumnsCount() - 1;

        if (!grid.properties.scrollingEnabled) {
            maxColumns = Math.min(maxColumns, maxViewableColumns);
        }

        newX = Math.min(maxColumns, Math.max(0, newX));

        grid.clearSelections();
        grid.selectColumn(newX);
        grid.setMouseDown(grid.newPoint(newX, 0));
        grid.setDragExtent(grid.newPoint(0, 0));

        if (grid.insureModelColIsVisible(newX, offsetX)) {
            this.pingAutoScroll();
        }

        grid.repaint();
    },

    isColumnDragging: function(grid) {
        var dragger = grid.lookupFeature('ColumnMoving');
        return dragger && dragger.dragging && !this.dragging;
    }

});

module.exports = ColumnSelection;

},{"./Feature":101}],100:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 * @extends Feature
 */
var ColumnSorting = Feature.extend('ColumnSorting', {

    /**
     * @memberOf ColumnSorting.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */

    handleDoubleClick: function(grid, event) {
        var columnProperties;
        if (
            event.isHeaderCell &&
            (columnProperties = grid.behavior.getColumnProperties(event.gridCell.x)) &&
            !columnProperties.unsortable
        ) {
            grid.fireSyntheticColumnSortEvent(event.gridCell.x, event.primitiveEvent.detail.keys);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @memberOf ColumnSorting.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseMove: function(grid, event) {
        var columnProperties;
        if (
            event.isRowFixed &&
            event.isHeaderCell &&
            (columnProperties = grid.behavior.getColumnProperties(event.gridCell.x)) &&
            !columnProperties.unsortable
        ) {
            this.cursor = 'pointer';
        } else {
            this.cursor = null;
        }
        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
    }

});

module.exports = ColumnSorting;

},{"./Feature":101}],101:[function(require,module,exports){
'use strict';

var Base = require('../Base');

var warned = {};

/**
 * Instances of features are connected to one another to make a chain of responsibility for handling all the input to the hypergrid.
 * @constructor
 */
var Feature = Base.extend('Feature', {

    /**
     * the next feature to be given a chance to handle incoming events
     * @type {Feature}
     * @default null
     * @memberOf Feature.prototype
     */
    next: null,

    /**
     * a temporary holding field for my next feature when I'm in a disconnected state
     * @type {Feature}
     * @default null
     * @memberOf Feature.prototype
     */
    detached: null,

    /**
     * the cursor I want to be displayed
     * @type {string}
     * @default null
     * @memberOf Feature.prototype
     */
    cursor: null,

    /**
     * the cell location where the cursor is currently
     * @type {Point}
     * @default null
     * @memberOf Feature.prototype
     */
    currentHoverCell: null,

    /**
     * @memberOf Feature.prototype
     * @desc set my next field, or if it's populated delegate to the feature in my next field
     * @param {Feature} nextFeature - this is how we build the chain of responsibility
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    setNext: function(nextFeature) {
        if (this.next) {
            this.next.setNext(nextFeature);
        } else {
            this.next = nextFeature;
            this.detached = nextFeature;
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc disconnect my child
     */
    detachChain: function() {
        this.next = null;
    },

    /**
     * @memberOf Feature.prototype
     * @desc reattach my child from the detached reference
     */
    attachChain: function() {
        this.next = this.detached;
    },

    /**
     * @memberOf Feature.prototype
     * @desc handle mouse move down the feature chain of responsibility
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseMove: function(grid, event) {
        if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseExit: function(grid, event) {
        if (this.next) {
            this.next.handleMouseExit(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseEnter: function(grid, event) {
        if (this.next) {
            this.next.handleMouseEnter(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseDown: function(grid, event) {
        if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseUp: function(grid, event) {
        if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleKeyDown: function(grid, event) {
        if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleKeyUp: function(grid, event) {
        if (this.next) {
            this.next.handleKeyUp(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleWheelMoved: function(grid, event) {
        if (this.next) {
            this.next.handleWheelMoved(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleDoubleClick: function(grid, event) {
        if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleClick: function(grid, event) {
        if (this.next) {
            this.next.handleClick(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleMouseDrag: function(grid, event) {
        if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    handleContextMenu: function(grid, event) {
        if (this.next) {
            this.next.handleContextMenu(grid, event);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @desc toggle the column picker
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    moveSingleSelect: function(grid, x, y) {
        if (this.next) {
            this.next.moveSingleSelect(grid, x, y);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFixedRow: function(grid, event) {
        if (!warned.isFixedRow) {
            warned.isFixedRow = true;
            console.warn('isFixedRow(grid, event) has been deprecated as of v1.2.0 in favor of event.isRowFixed and will be removed in a future version.');
        }
        return event.isRowFixed;
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedRow: function(grid, event) {
        return event.gridCell.y < 1;
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFixedColumn: function(grid, event) {
        if (!warned.isFixedColumn) {
            warned.isFixedColumn = true;
            console.warn('isFixedColumn(grid, event) has been deprecated as of v1.2.0 in favor of event.isColumnFixed and will be removed in a future version.');
        }
        return event.isColumnFixed;
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedColumn: function(grid, event) {
        return event.gridCell.x === 0;
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isTopLeft: function(grid, event) {
        if (!warned.isTopLeft) {
            warned.isTopLeft = true;
            console.warn('isTopLeft(grid, event) has been deprecated as of v1.2.0 in favor of event.isCellFixed and will be removed in a future version.');
        }
        return event.isCellFixed;
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    setCursor: function(grid) {
        if (this.next) {
            this.next.setCursor(grid);
        }
        if (this.cursor) {
            grid.beCursor(this.cursor);
        }
    },

    /**
     * @memberOf Feature.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @private Not really private but was cluttering up all the feature doc pages.
     */
    initializeOn: function(grid) {
        if (this.next) {
            this.next.initializeOn(grid);
        }
    }

});

module.exports = Feature;

},{"../Base":49}],102:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 */
var Filters = Feature.extend('Filters', {

    handleDoubleClick: function(grid, event) {
        if (event.isFilterCell) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleDoubleClick(grid, event);
        }
    },

    handleClick: function(grid, event) {
        if (event.isFilterCell) {
            grid.onEditorActivate(event);
        } else if (this.next) {
            this.next.handleClick(grid, event);
        }
    }

});

module.exports = Filters;

},{"./Feature":101}],103:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

var commands = {
    PAGEDOWN: function(grid) { grid.pageDown(); },
    PAGEUP: function(grid) { grid.pageUp(); },
    PAGELEFT: function(grid) { grid.pageLeft(); },
    PAGERIGHT: function(grid) { grid.pageRight(); }
};

/**
 * @constructor
 */
var KeyPaging = Feature.extend('KeyPaging', {

    /**
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf KeyPaging.prototype
     */
    handleKeyDown: function(grid, event) {
        var func = commands[event.detail.char];
        if (func) {
            func(grid);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    }

});

module.exports = KeyPaging;

},{"./Feature":101}],104:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 */
var OnHover = Feature.extend('OnHover', {

    /**
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     * @memberOf OnHover.prototype
     */
    handleMouseMove: function(grid, event) {
        var hoverCell = grid.hoverCell;
        if (!event.gridCell.equals(hoverCell)) {
            if (hoverCell) {
                this.handleMouseExit(grid, hoverCell);
            }
            this.handleMouseEnter(grid, event);
            grid.setHoverCell(event.gridCell);
        } else if (this.next) {
            this.next.handleMouseMove(grid, event);
        }
    }

});

module.exports = OnHover;

},{"./Feature":101}],105:[function(require,module,exports){
'use strict';

var ColumnResizing = require('./ColumnResizing');

/**
 * @constructor
 * @extends ColumnResizing
 */
var RowResizing = ColumnResizing.extend('RowResizing', {

    /**
     * the index of the row/column we are dragging
     * @type {number}
     * @default -1
     * @memberOf RowResizing.prototype
     */
    dragArea: -1,

    /**
     * the pixel location of the where the drag was initiated
     * @type {number}
     * @default -1
     * @memberOf RowResizing.prototype
     */
    dragStart: -1,

    /**
     * the starting width/height of the row/column we are dragging
     * @type {number}
     * @default -1
     * @memberOf RowResizing.prototype
     */
    dragAreaStartingSize: -1,

    /**
     * @memberOf RowResizing.prototype
     * @desc get the mouse x,y coordinate
     * @returns {number}
     * @param {MouseEvent} event - the mouse event to query
     */
    getMouseValue: function(event) {
        return event.primitiveEvent.detail.mouse.y;
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc get the grid cell x,y coordinate
     * @returns {number}
     * @param {Point} gridCell
     */
    getGridCellValue: function(gridCell) {
        return gridCell.x;
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the grids x,y scroll value
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getScrollValue: function(grid) {
        return grid.getVScrollValue();
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the width/height of the row/column of interest
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getAreaSize: function(grid, index) {
        return grid.getRowHeight(index);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc set the width/height of the row/column at index
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     * @param {number} value - the width/height to set to
     */
    setAreaSize: function(grid, index, value) {
        grid.setRowHeight(index, value);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc returns the index of which divider I'm over
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    overAreaDivider: function(grid, event) {
        return grid.overRowDivider(event);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc am I over the column/row area
     * @returns {boolean}
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    isFirstFixedOtherArea: function(grid, event) {
        return this.isFirstFixedColumn(grid, event);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the cursor name
     * @returns {string}
     */
    getCursorName: function() {
        return 'row-resize';
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the recently rendered area's width/height
     * @returns {number}
     * @param {Hypergrid} grid
     * @param {number} index - the row/column index of interest
     */
    getPreviousAbsoluteSize: function(grid, index) {
        return grid.getRenderedHeight(index);
    },

    /**
     * @function
     * @memberOf RowResizing.prototype
     * @desc return the fixed area rows/columns count
     * @returns {number}
     * @param {Hypergrid} grid
     */
    getOtherFixedAreaCount: function(grid) {
        return grid.getFixedColumnCount();
    },

    /**
     *
     * @param {Hypergrid} grid
     * @returns {number}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    getFixedAreaCount: function(grid) {
        return grid.getFixedRowCount() + grid.getHeaderRowCount();
    },

    /**
     *
     * @param {Hypergrid} grid
     * @returns {boolean}
     * @default -2
     * @memberOf ColumnResizing.prototype
     */
    isEnabled: function(grid) {
        return grid.isRowResizeable();
    }

});

module.exports = RowResizing;

},{"./ColumnResizing":98}],106:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 */
var RowSelection = Feature.extend('RowSelection', {

    /**
     * The pixel location of the mouse pointer during a drag operation.
     * @type {Point}
     * @default null
     * @memberOf RowSelection.prototype
     */
    currentDrag: null,

    /**
     * The cell coordinates of the where the mouse pointer is during a drag operation.
     * @type {Object}
     * @default null
     * @memberOf RowSelection.prototype
     */
    lastDragCell: null,

    /**
     * a millisecond value representing the previous time an autoscroll started
     * @type {number}
     * @default 0
     * @memberOf RowSelection.prototype
     */
    sbLastAuto: 0,

    /**
     * a millisecond value representing the time the current autoscroll started
     * @type {number}
     * @default 0
     * @memberOf RowSelection.prototype
     */
    sbAutoStart: 0,

    dragArmed: false,

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseUp: function(grid, event) {
        if (this.dragArmed) {
            this.dragArmed = false;
            grid.fireSyntheticRowSelectionChangedEvent();
        } else if (this.dragging) {
            this.dragging = false;
            grid.fireSyntheticRowSelectionChangedEvent();
        } else if (this.next) {
            this.next.handleMouseUp(grid, event);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDown: function(grid, event) {
        var rowSelectable = grid.isRowSelection() &&
            !event.primitiveEvent.detail.isRightClick &&
            grid.isShowRowNumbers() &&
            event.isHandleColumn;

        if (rowSelectable && event.isHeaderHandle) {
            //global row selection
            grid.toggleSelectAllRows();
        } else if (rowSelectable && event.isGridRow)  {
            // if we are in the fixed area, do not apply the scroll values
            this.dragArmed = true;
            this.extendSelection(grid, event.dataCell.y, event.primitiveEvent.detail.keys);
        } else if (this.next) {
            this.next.handleMouseDown(grid, event);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleMouseDrag: function(grid, event) {
        if (
            this.dragArmed &&
            grid.isRowSelection() &&
            !event.primitiveEvent.detail.isRightClick
        ) {
            //if we are in the fixed area do not apply the scroll values
            this.lastDragRow = event.dataCell.y;
            this.dragging = true;
            this.currentDrag = event.primitiveEvent.detail.mouse;
            this.checkDragScroll(grid, this.currentDrag);
            this.handleMouseDragCellSelection(grid, this.lastDragRow, event.primitiveEvent.detail.keys);
        } else if (this.next) {
            this.next.handleMouseDrag(grid, event);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleKeyDown: function(grid, event) {
        var handler;
        if (
            grid.getLastSelectionType() === 'row' &&
            (handler = this['handle' + event.detail.char])
        ) {
            handler.call(this, grid, event.detail);
        } else if (this.next) {
            this.next.handleKeyDown(grid, event);
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc Handle a mousedrag selection
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    handleMouseDragCellSelection: function(grid, y, keys) {
        var mouseY = grid.getMouseDown().y;

        grid.clearMostRecentRowSelection();

        grid.selectRow(mouseY, y);
        grid.setDragExtent(grid.newPoint(0, y - mouseY));

        grid.repaint();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc this checks while were dragging if we go outside the visible bounds, if so, kick off the external autoscroll check function (above)
     * @param {Hypergrid} grid
     * @param {Object} mouse - the event details
     */
    checkDragScroll: function(grid, mouse) {
        if (
            grid.properties.scrollingEnabled &&
            grid.getDataBounds().contains(mouse)
        ) {
            if (grid.isScrollingNow()) {
                grid.setScrollingNow(false);
            }
        } else {
            if (!grid.isScrollingNow()) {
                grid.setScrollingNow(true);
                this.scrollDrag(grid);
            }
        }
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc this function makes sure that while we are dragging outside of the grid visible bounds, we srcroll accordingly
     * @param {Hypergrid} grid
     */
    scrollDrag: function(grid) {
        if (!grid.isScrollingNow()) {
            return;
        }

        var b = grid.getDataBounds(),
            yOffset;

        if (this.currentDrag.y < b.origin.y) {
            yOffset = -1;
        } else if (this.currentDrag.y > b.origin.y + b.extent.y) {
            yOffset = 1;
        }

        if (yOffset) {
            if (this.lastDragRow >= grid.getFixedRowCount()) {
                this.lastDragRow += yOffset;
            }
            grid.scrollBy(0, yOffset);
        }

        this.handleMouseDragCellSelection(grid, this.lastDragRow, []); // update the selection
        grid.repaint();
        setTimeout(this.scrollDrag.bind(this, grid), 25);
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc extend a selection or create one if there isnt yet
     * @param {Hypergrid} grid
     * @param {Object} gridCell - the event details
     * @param {Array} keys - array of the keys that are currently pressed down
     */
    extendSelection: function(grid, y, keys) {
        if (!grid.abortEditing()) { return; }

        var mouseY = grid.getMouseDown().y,
            hasSHIFT = keys.indexOf('SHIFT') > 0;

        if (y < 0) { // outside of the grid?
            return; // do nothing
        }

        if (hasSHIFT) {
            grid.clearMostRecentRowSelection();
            grid.selectRow(y, mouseY);
            grid.setDragExtent(grid.newPoint(0, y - mouseY));
        } else {
            grid.toggleSelectRow(y, keys);
            grid.setMouseDown(grid.newPoint(0, y));
            grid.setDragExtent(grid.newPoint(0, 0));
        }

        grid.repaint();
    },


    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     */
    handleDOWNSHIFT: function(grid) {
        this.moveShiftSelect(grid, 1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUPSHIFT: function(grid) {
        this.moveShiftSelect(grid, -1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFTSHIFT: function(grid) {},

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHTSHIFT: function(grid) {},

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleDOWN: function(grid) {
        this.moveSingleSelect(grid, 1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleUP: function(grid) {
        this.moveSingleSelect(grid, -1);
    },

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleLEFT: function(grid) {},

    /**
     * @memberOf RowSelection.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleRIGHT: function(grid) {
        var mouseCorner = grid.getMouseDown().plus(grid.getDragExtent()),
            maxColumns = grid.getColumnCount() - 1,
            newX = grid.getHScrollValue(),
            newY = mouseCorner.y;

        newX = Math.min(maxColumns, newX);

        grid.clearSelections();
        grid.select(newX, newY, 0, 0);
        grid.setMouseDown(grid.newPoint(newX, newY));
        grid.setDragExtent(grid.newPoint(0, 0));

        grid.repaint();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc If we are holding down the same navigation key, accelerate the increment we scroll
     * #### returns: integer
     */
    getAutoScrollAcceleration: function() {
        var count = 1;
        var elapsed = this.getAutoScrollDuration() / 2000;
        count = Math.max(1, Math.floor(elapsed * elapsed * elapsed * elapsed));
        return count;
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc set the start time to right now when we initiate an auto scroll
     */
    setAutoScrollStartTime: function() {
        this.sbAutoStart = Date.now();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc update the autoscroll start time if we haven't autoscrolled within the last 500ms otherwise update the current autoscroll time
     */
    pingAutoScroll: function() {
        var now = Date.now();
        if (now - this.sbLastAuto > 500) {
            this.setAutoScrollStartTime();
        }
        this.sbLastAuto = Date.now();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc answer how long we have been auto scrolling
     * #### returns: integer
     */
    getAutoScrollDuration: function() {
        if (Date.now() - this.sbLastAuto > 500) {
            return 0;
        }
        return Date.now() - this.sbAutoStart;
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc Augment the most recent selection extent by (offsetX,offsetY) and scroll if necessary.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveShiftSelect: function(grid, offsetY) {
        var origin = grid.getMouseDown(),
            extent = grid.getDragExtent(),
            maxViewableRows = grid.renderer.visibleRows.length - 1,
            maxRows = grid.getRowCount() - 1;

        if (!grid.properties.scrollingEnabled) {
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        var newY = extent.y + offsetY;

        newY = Math.min(maxRows - origin.y, Math.max(-origin.y, newY));

        grid.clearMostRecentRowSelection();
        grid.selectRow(origin.y, origin.y + newY);
        grid.setDragExtent(grid.newPoint(0, newY));

        if (grid.insureModelRowIsVisible(newY + origin.y, offsetY)) {
            this.pingAutoScroll();
        }

        grid.fireSyntheticRowSelectionChangedEvent();

        grid.repaint();
    },

    /**
     * @memberOf RowSelection.prototype
     * @desc Replace the most recent selection with a single cell selection that is moved (offsetX,offsetY) from the previous selection extent.
     * @param {Hypergrid} grid
     * @param {number} offsetX - x coordinate to start at
     * @param {number} offsetY - y coordinate to start at
     */
    moveSingleSelect: function(grid, offsetY) {
        var maxRows = grid.getRowCount() - 1,
            maxViewableRows = grid.getVisibleRowsCount() - 1,
            mouseCorner = grid.getMouseDown().plus(grid.getDragExtent()),
            newY = mouseCorner.y + offsetY;

        if (!grid.properties.scrollingEnabled) {
            maxRows = Math.min(maxRows, maxViewableRows);
        }

        newY = Math.min(maxRows, Math.max(0, newY));

        grid.clearSelections();
        grid.selectRow(newY);
        grid.setMouseDown(grid.newPoint(0, newY));
        grid.setDragExtent(grid.newPoint(0, 0));

        if (grid.insureModelRowIsVisible(newY, offsetY)) {
            this.pingAutoScroll();
        }

        grid.fireSyntheticRowSelectionChangedEvent();
        grid.repaint();
    },

    isSingleRowSelection: function() {
        return true;
    }

});

module.exports = RowSelection;

},{"./Feature":101}],107:[function(require,module,exports){
'use strict';

var Feature = require('./Feature');

/**
 * @constructor
 */
var ThumbwheelScrolling = Feature.extend('ThumbwheelScrolling', {

    /**
     * @memberOf ThumbwheelScrolling.prototype
     * @param {Hypergrid} grid
     * @param {Object} event - the event details
     */
    handleWheelMoved: function(grid, e) {
        if (!grid.properties.scrollingEnabled) {
            return;
        }

        var primEvent = e.primitiveEvent,
            deltaX = Math.sign(primEvent.wheelDeltaX || -primEvent.deltaX),
            deltaY = Math.sign(primEvent.wheelDeltaY || -primEvent.deltaY);

        if (deltaX || deltaY) {
            grid.scrollBy(
                -deltaX || 0, // 0 if NaN
                -deltaY || 0
            );
        }
    }

});


module.exports = ThumbwheelScrolling;

},{"./Feature":101}],108:[function(require,module,exports){
'use strict';

module.exports = {
    Feature: require('./Feature'), // abstract base class
    CellClick: require('./CellClick'),
    CellEditing: require('./CellEditing'),
    CellSelection: require('./CellSelection'),
    ColumnAutosizing: require('./ColumnAutosizing'),
    ColumnMoving: require('./ColumnMoving'),
    ColumnResizing: require('./ColumnResizing'),
    ColumnSelection: require('./ColumnSelection'),
    ColumnSorting: require('./ColumnSorting'),
    Filters: require('./Filters'),
    KeyPaging: require('./KeyPaging'),
    OnHover: require('./OnHover'),
    ColumnPicker: require('./ColumnPicker'),
    RowResizing: require('./RowResizing'),
    RowSelection: require('./RowSelection'),
    ThumbwheelScrolling: require('./ThumbwheelScrolling')
};

},{"./CellClick":92,"./CellEditing":93,"./CellSelection":94,"./ColumnAutosizing":95,"./ColumnMoving":96,"./ColumnPicker":97,"./ColumnResizing":98,"./ColumnSelection":99,"./ColumnSorting":100,"./Feature":101,"./Filters":102,"./KeyPaging":103,"./OnHover":104,"./RowResizing":105,"./RowSelection":106,"./ThumbwheelScrolling":107}],109:[function(require,module,exports){
/* eslint-env browser */

'use strict';

/**
 *
 * @param {HTMLElement} [containingEl=document]
 * @param {string} [prefix='']
 * @param {string} [separator='']
 * @param {string} [suffix='']
 * @param {function} [transformer=multiLineTrim] - Function to transform each input control's text value.
 */
function copyAll(containingEl, prefix, separator, suffix, transformer) {
    var texts = [], lastTextEl, text;

    Array.prototype.forEach.call((containingEl || document).querySelectorAll(copyAll.selector), function(textEl) {
        text = (transformer || multiLineTrim)(textEl.value);
        if (text) { texts.push(text); }
        lastTextEl = textEl;
    });

    if (lastTextEl) {
        copy(lastTextEl, (prefix || '') + texts.join(separator || '') + (suffix || ''));
    }
}

/**
 * 1. Trim the text in the given input element
 * 2. select it
 * 3. copy it to the clipboard
 * 4. deselect it
 * 5. return it
 * @param {HTMLElement|HTMLTextAreaElement} el
 * @param {string} [text=el.value] - Text to copy.
 * @returns {undefined|string} Trimmed text in element or undefined if unable to copy.
 */
function copy(el, text) {
    var result, textWas;

    if (text) {
        textWas = el.value;
        el.value = text;
    } else {
        text = el.value;
    }

    el.value = multiLineTrim(text);

    try {
        el.select();
        result = document.execCommand('copy');
    } catch (err) {
        result = false;
    } finally {
        if (textWas !== undefined) {
            el.value = textWas;
        }
        el.blur();
    }
    return result;
}

function multiLineTrim(s) {
    return s.replace(/^\s*(.*?)\s*$/, '$1');
}

copy.all = copyAll;
copy.multiLineTrim = multiLineTrim;
copy.selectorTextControls = 'input:not([type]), input[type=text], textarea';

module.exports = copy;

},{}],110:[function(require,module,exports){
/* eslint-env browser */

/** @module effects */

/** @typedef {function} effectFunction
 * @desc Element to perform transitions upon is `options.el` if defined or `this.el`.
 * @param {object} [options]
 * @param {HTMLElement} [options.el=this.el]
 * @param {function} [options.callback] Function to call at conclusion of transitions.
 * @param {string} [options.duration='0.065s'] - Duration of each transition.
 * @param {object} [options.styles=defaultGlowerStyles] - Hash of CSS styles and values to transition. (For {@link effects~glower|glower} only.
 */

'use strict';

/**
 * Shake element back and fourth a few times as if to say, "Nope!"
 * @type {effectFunction}
 * @memberOf module:effects
 */
exports.shaker = function(options) {
    options = options || {};
    var context = this,
        el = options.el || context.el,
        duration = options.duration || '0.065s',
        computedStyle = window.getComputedStyle(el),
        transitions = computedStyle.transition.split(','),
        position = computedStyle.position,
        x = parseInt(computedStyle.left),
        dx = -3,
        shakes = 6;

    transitions.push('left ' + duration);
    el.style.transition = transitions.join(',');
    el.addEventListener('transitionend', shaker);
    shaker();
    function shaker(event) {
        if (!event || event.propertyName === 'left') {
            el.style.left = x + dx + 'px';
            if (!shakes--) {
                el.removeEventListener('transitionend', shaker);
                transitions.pop();
                el.style.transition = transitions.join(',');
                el.style.position = position;
                if (options.callback) {
                    options.callback.call(context, options);
                }
            }
            dx = shakes ? -dx : 0;
        }
    }
};

var defaultGlowerStyles = {
    'background-color': 'yellow',
    'box-shadow': '0 0 10px red'
};

/**
 * Transition styles on element for a moment and revert as if to say, "Whoa!."
 * @type {effectFunction}
 * @memberOf module:effects
 */
exports.glower = function(options) {
    options = options || {};
    var context = this,
        el = options.el || context.el,
        duration = options.duration || '0.25s',
        styles = options.styles || defaultGlowerStyles,
        values = styles.length,
        computedStyle = window.getComputedStyle(el),
        styleWas = {},
        transition = computedStyle.transition,
        transitions = transition.split(',');

    Object.keys(styles).forEach(function(style) {
        styleWas[style] = {
            style: computedStyle[style],
            undo: true
        };
        transitions.push(style + ' ' + duration);
    });

    el.style.transition = transitions.join(',');
    el.addEventListener('transitionend', glower);
    Object.keys(styles).forEach(function(style) {
        el.style[style] = styles[style];
    });

    function glower(event) {
        var was = styleWas[event.propertyName];
        if (was.undo) {
            el.style[event.propertyName] = was.style;
            was.undo = false;
        } else if (!--values) {
            el.removeEventListener('transitionend', glower);
            el.style.transition = transition;
            if (options.callback) {
                options.callback.call(context, options);
            }
        }
    }
};

},{}],111:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports.each = function(selector, iteratee, context) {
    return Array.prototype.forEach.call((context || document).querySelectorAll(selector), iteratee);
};

module.exports.find = function(selector, iteratee, context) {
    return Array.prototype.find.call((context || document).querySelectorAll(selector), iteratee);
};

},{}],112:[function(require,module,exports){
'use strict';

function Queueless(element, context) {
    this.element = element;
    this.context = context;
    this.transitioning = false;
}

Queueless.prototype.begin = function(callback) {
    var self = this;

    this.transitioning = true;

    this.element.addEventListener('transitionend', function end(transEvent) {
        self.element.removeEventListener('transitionend', end);

        if (callback) {
            callback.call(this, transEvent, self);
        }

        self.transitioning = false;
    });
};

module.exports = Queueless;

},{}],113:[function(require,module,exports){
/* eslint-env browser */

/**
 * @module localization
 */

'use strict';

var Base = require('../Base');
var deprecated = require('./deprecated');


/**
 * @param {string} defaultLocale
 * @param {string} [locale=defaultlocale]
 * @param {object} [options]
 * @constructor
 */
var Formatter = Base.extend({
    initialize: function(defaultLocale, locale, options) {
        if (typeof locale === 'object') {
            options = locale;
            locale = defaultLocale;
        }

        this.locale = locale;

        if (options) {
            if (typeof options.invalid === 'function') {
                this.invalid = options.invalid;
            }

            if (options.expectation) {
                this.expectation = options.expectation;
            }
        }
    }
});


// Safari has no Intl implementation
if (!window.Intl) {
    window.Intl = {
        NumberFormat: function(locale, options) {
            var digits = '0123456789';
            this.format = function(n) {
                var s = n.toString();
                if (!options || options.useGrouping === undefined || options.useGrouping) {
                    var dp = s.indexOf('.');
                    if (dp < 0) {
                        dp = s.length;
                    }
                    while ((dp -= 3) > 0 && digits.indexOf(s[dp - 1]) >= 0) {
                        s = s.substr(0, dp) + ',' + s.substr(dp);
                    }
                }
                return s;
            };
        },
        DateTimeFormat: function(locale, options) {
            this.format = function(date) {
                if (date != null) {
                    if (typeof date !== 'object') {
                        date = new Date(date);
                    }
                    date = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear();
                } else {
                    date = null;
                }
                return date;
            };
        }
    };
}


/**
 * @summary Create a number localizer.
 * @implements localizerInterface
 * @desc Create an object conforming to {@link localizerInterface} for numbers, using {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat|Intl.NumberFormat}.
 * @param {string} defaultLocale
 * @param {string} [locale=defaultLocale] - Passed to the {@link Intl.NumberFormat|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat} constructor.
 * @param {object} [options] - Passed to the `Intl.NumberFormat` constructor.
 * @param {boolean} [options.acceptStandardDigits=false] - Accept standard digits and decimal point interchangeably with localized digits and decimal point. (This option is interpreted here; it is not used by `Intl.NumberFormat`.)
 * @constructor
 * @extends Formatter
 * @tutorial localization
 */
var NumberFormatter = Formatter.extend('NumberFormatter', {
    initialize: function(defaultLocale, locale, options) {
        if (typeof locale === 'object') {
            options = locale;
        }

        options = options || {};

        this.format = new Intl.NumberFormat(this.locale, options).format;

        var mapperOptions = { useGrouping: false },
            mapper = new Intl.NumberFormat(this.locale, mapperOptions).format;

        this.demapper = demap.bind(this);

        /**
         * @summary A string containing the valid characters.
         * @desc Contains all localized digits + localized decimal point.
         * If we're accepting standard digits, will also contain all the standard digits + standard decimal point (if different than localized versions).
         * @type {string}
         * @private
         * @desc Localized digits and decimal point. Will also include standardized digits and decimal point if `options.acceptStandardDigits` is truthy.
         *
         * For internal use by the {@link NumberFormatter#parse|parse} method.
         * @memberOf NumberFormatter.prototype
         */
        this.map = mapper(10123456789.5).substr(1, 11); // localized '0123456789.'

        if (options.acceptStandardDigits && this.map !== '0123456789.') {
            this.map += '0123456789.';  // standard '0123456789.'
        }

        /** @summary A regex that tests `true` on first invalid character.
         * @type {RegExp}
         * @private
         * @desc Valid characters include:
         *
         * * Localized digits
         * * Localized decimal point
         * * Standard digits (when `options.acceptStandardDigits` is truthy)
         * * Standard decimal point (when `options.acceptStandardDigits` is truthy)
         * * Cosmetic characters added by formatter as per `options` (for human-friendly readability).
         *
         * Any characters outside this set are considered invalid.
         *
         * Set by the constructor; consumed by the {@link module:localization~NumberFormatter#invalid|invalid} method.
         *
         * Testing a string against this pattern yields `true` if at least one invalid character or `false` if all characters are valid.
         * @memberOf NumberFormatter.prototype
         */
        this.invalids = new RegExp(
            '[^' +
            this.format(11111).replace(this.map[1], '') + // thousands separator if in use
            this.map + // digits + decimal point
            ']'
        );
    },

    /** @summary Tests for invalid characters.
     * @desc Tests a localized string representation of a number that it contains any invalid characters.
     *
     * The number may be unformatted or it may be formatted with any of the permitted formatting characters, as implied by the constructor's `options` (passed to `Intl.NumberFormat`). Any other characters are considered invalid.
     *
     * However, standard digits and the standard decimal point are considered valid if the value of `options.acceptStandardDigits` as provided to the constructor was truthy. (Of course, these are always valid for locales that use them.)
     *
     * Use this method to:
     * 1. Filter out invalid characters on a `onkeydown` event; or
     * 2. Test an edited string prior to calling the {@link module:localization~NumberFormatter#parse|parse}.
     *
     * NOTE: This method does not check grammatical syntax; it only checks for invalid characters.
     *
     * @param number
     * @returns {boolean|string} Falsy means valid which in this case means contains only valid characters.
     * @memberOf NumberFormatter.prototype
     */
    invalid: function(number) {
        return this.invalids.test(number);
    },

    expectation:
        'Expected a number with optional commas (thousands grouping separator), optional decimal point, and an optional fractional part.\n' +
        'Comma separators are part of the format and will always be displayed for values >= 1000.\n' +
        'Edited values are always saved in their entirety even though the formatted value is rounded to the specified number of decimal places.',

    /**
     * This method will:
     * * Convert localized digits and decimal point characters to standard digits and decimal point characters.
     * * "Clean" the string by ignoring all other characters.
     * * Coerce the string to a number primitive.
     * @param {string} formattedLocalizedNumber - May or may not be formatted.
     * @returns {number} Number primitive.
     * @throws {string} Invalid number.
     * @memberOf NumberFormatter.prototype
     */
    parse: function(formattedLocalizedNumber) {
        var number = Number(
            formattedLocalizedNumber.split('').map(this.demapper).join('')
        );

        if (isNaN(number)) {
            throw 'Invalid Number';
        }

        return number;
    }
});

function demap(c) {
    var d = this.map.indexOf(c) % 11;
    return d < 0 ? '' : d < 10 ? d : '.';
}

/**
 * @implements localizerInterface
 * @param {string} defaultLocale
 * @param {string} [locale=defaultlocale] - Passed to the {@link Intl.DateFormat|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateFormat} constructor.
 * @param {object} [options] - Passed to the `Intl.DateFormat` constructor.
 * @constructor
 * @extends Formatter
 */
var DateFormatter = Formatter.extend('DateFormatter', {
    initialize: function(defaultLocale, locale, options) {
        if (typeof locale === 'object') {
            options = locale;
        }

        options = options || {};

        /** @summary Transform a date object into human-friendly string representation.
         * @method
         */
        this.format = new Intl.DateTimeFormat(this.locale, options).format;

        // Get digits because may be chinese or "real Arabic" numerals.
        var testOptions = { useGrouping: false, style: 'decimal' },
            localizeNumber = new Intl.NumberFormat(this.locale, testOptions).format,
            localizedDigits = this.localizedDigits = localizeNumber(10123456789).substr(1, 10); // all localized digits in numerical order

        this.digitFormatter = formatDigit.bind(this);
        this.digitParser = parseDigit.bind(this);

        // Localize a test date with the default numeric parts to find out the resulting order of these parts.
        var yy = 1987,
            mm = 12,
            dd = 30,
            YY = this.transformNumber(this.digitFormatter, yy),
            MM = this.transformNumber(this.digitFormatter, mm),
            DD = this.transformNumber(this.digitFormatter, dd),
            testDate = new Date(yy, mm - 1, dd),
            localizeDate = new Intl.DateTimeFormat(this.locale).format,
            localizedDate = localizeDate(testDate), // all localized digits + localized punctuation
            missingDigits = new Intl.NumberFormat(this.locale).format(456),
            localizedNumberPattern = this.localizedNumberPattern = new RegExp('[' + localizedDigits + ']+', 'g'),
            parts = localizedDate.match(localizedNumberPattern);

        this.partsMap = {
            yy: parts.indexOf(YY),
            mm: parts.indexOf(MM),
            dd: parts.indexOf(DD)
        };

        if (options.acceptStandardDigits) {
            missingDigits += '1234567890';
        }

        /** @summary A regex that tests `true` on first invalid character.
         * @type {RegExp}
         * @private
         * @desc Valid characters include:
         *
         * * Localized digits
         * * Standard digits (when `options.acceptStandardDigits` is truthy)
         * * Localized punctuation to delimit date parts
         *
         * Any characters outside this set are considered invalid. Note that this only currently implemented when all three date parts are numeric
         *
         * Set by the constructor; consumed by the {@link NumberFormatter#valid|valid} method.
         *
         * Testing a string against this pattern yields `true` if at least one invalid character or `false` if all characters are valid.
         * @memberOf DateFormatter.prototype
         */
        this.invalids = new RegExp(
            '[^' +
            localizedDate.replace(/-/g, '\\-') +
            missingDigits +
            ']'
        );
    },

    /** @summary Tests for invalid characters.
     * @desc Tests a localized string representation of a number that it contains any invalid characters.
     *
     * The date is assumed to contain localized digits and punctuation as would be returned by `Intl.DateFormat` with the given `locale` and `options`. Any other characters are considered invalid.
     *
     * However, standard digits and the standard decimal point are also considered valid if the value of `options.acceptStandardDigits` as provided to the constructor was truthy. (Of course, these are always valid for locales that use them.)
     *
     * Use this method to:
     * 1. Filter out invalid characters on a `onkeydown` event; or
     * 2. Test an edited string prior to calling the {@link module:localization~DateFormatter#parse|parse}.
     *
     * NOTE: The current implementation only supports date formats using all numerics (which is the default for `Intl.DateFormat`).
     *
     * NOTE: This method does not check grammatical syntax; it only checks for invalid characters.
     *
     * @param number
     * @returns {boolean} Contains only valid characters.
     * @memberOf DateFormatter.prototype
     */
    invalid: function(number) {
        return this.invalids.test(number);
    },

    /**
     * This method will:
     * * Convert localized date to Date object.
     * * "Clean" the string by ignoring all other characters.
     * * Coerce the string to a number primitive.
     * @param {string} localizedDate
     * @returns {Date}
     * @throws {string} Invalid date.
     * @memberOf DateFormatter.prototype
     */
    parse: function(localizedDate) {
        var date,
            parts = localizedDate.match(this.localizedNumberPattern);

        if (parts && parts.length === 3) {
            var y = this.transformNumber(this.digitParser, parts[this.partsMap.yy]),
                m = this.transformNumber(this.digitParser, parts[this.partsMap.mm]) - 1,
                d = this.transformNumber(this.digitParser, parts[this.partsMap.dd]);

            date = new Date(y, m, d);
        } else {
            throw 'Invalid Date';
        }

        return date;
    },

    /**
     * Transform a number to or from a string representation with localized digits.
     * @param {function} digitTransformer - A function bound to `this`.
     * @param {number} number
     * @returns {string}
     * @private
     * @memberOf DateFormatter.prototype
     */
    transformNumber: function(digitTransformer, number) {
        return number.toString().split('').map(digitTransformer).join('');
    }
});

function formatDigit(d) {
    return this.localizedDigits[d];
}

function parseDigit(c) {
    var d = this.localizedDigits.indexOf(c);
    if (d < 0) { d = ''; }
    return d;
}

/**
 * All members are localizers (conform to {@link localizerInterface}) with exception of `get`, `set`, and localizer constructors which are named (by convention) ending in "Formmatter".
 *
 * The application developer is free to add localizers and localizer factory methods. See the {@link Localization#construct|construct} convenience method which may be helpful in this regard.
 * @param locale
 * @param {object} [numberOptions]
 * @param {object} [dateOptions]
 * @constructor
 */
function Localization(locale, numberOptions, dateOptions) {
    this.locale = locale;

    /**
     * @name number
     * @see The {@link NumberFormatter|NumberFormatter} class
     * @memberOf Localization.prototype
     */
    this.int = this.float = this.construct('number', NumberFormatter, numberOptions);

    /**
     * @see The {@link DateFormatter|DateFormatter} class
     * @memberOf Localization.prototype
     */
    this.construct('date', DateFormatter, dateOptions);
}

Localization.prototype = {
    constructor: Localization.prototype.constructor,

    /** @summary Creates a localizer from a localizer factory object using the default locale.
     * @desc Performs the following actions:
     * 1. Binds `Constructor` to `locale`.
     * 2. Adds the newly bound constructor to this object (for future reference) with the key "NameFormatter" (where "Name" is the localizer name, all lower case but with an initial capital).
     * 3. Uses the newly bound constructor to create a new localized localizer with the provided options.
     * 4. Adds new localizer to this object via {@link Localization#add|add}.
     *
     * @param {string} localizerName
     * @param {Constructor
     * @param {object} {factoryOptions}
     * @returns {localizeInerface} The new localizer.
     */
    construct: function(localizerName, Constructor, factoryOptions) {
        var constructorName = localizerName[0].toUpperCase() + localizerName.substr(1).toLowerCase() + 'Formatter',
            BoundConstructor = Constructor.bind(null, this.locale),
            localizer = new BoundConstructor(factoryOptions);

        this[constructorName] = BoundConstructor;

        return this.add(localizerName, localizer);
    },

    /** @summary Register a localizer.
     * @desc Checks the provided localizer that it conforms to {@link localizerInterface}
     * and adds it to the object using localizerName all lower case as the key.
     * @param {string} name
     * @param {localizerInterface} localizer
     * @memberOf Localization.prototype
     * @returns {localizeInerface} The provided localizer.
     */
    add: function(name, localizer) {
        if (typeof name === 'object') {
            localizer = name;
            name = undefined;
        }

        if (
            typeof localizer !== 'object' ||
            typeof localizer.format !== 'function' ||
            typeof localizer.parse !== 'function' ||
            localizer.invalid && typeof localizer.invalid !== 'function' ||
            localizer.expectation && typeof localizer.expectation !== 'string'
        ) {
            throw 'Expected localizer object to conform to interface.';
        }

        name = name || localizer.name;
        name = name && name.toLowerCase();
        this[name] = localizer;

        return localizer;
    },
    deprecated: deprecated,
    set: function(name) {
        return this.deprecated('set(name, localizer)', 'add(name, localizer)', '1.0.6', arguments);
    },

    /**
     *
     * @param localizerName
     * @returns {localizerInterface}
     * @memberOf Localization.prototype
     */
    get: function(name) {
        return this[name && name.toLowerCase()] || this.string;
    },

    ///  ///  ///  ///  ///    LOCALIZERS    ///  ///  ///  ///  ///

    // Special localizer for use by Chrome's date input control.
    chromeDate: {
        format: function(date) {
            if (date != null) {
                if (typeof date !== 'object') {
                    date = new Date(date);
                }

                var yy = date.getFullYear(),
                    m = date.getMonth() + 1, mm = m < 10 ? '0' + m : m,
                    d = date.getDate(), dd = d < 10 ? '0' + d : d;

                date = yy + '-' + mm + '-' + dd;
            } else {
                date = null;
            }
            return date;
        },
        parse: function(str) {
            var date,
                parts = str.split('-');
            if (parts && parts.length === 3) {
                date = new Date(parts[0], parts[1] - 1, parts[2]);
            } else {
                date = null;
            }
            return date;
        }
    },

    null: {
        format: function(value) {
            return value;
        },
        parse: function(str) {
            return str;
        }
    },

    string: {
        format: function(value) {
            return value + '';
        },
        parse: function(str) {
            return str + '';
        }
    }
};

module.exports = Localization;

},{"../Base":49,"./deprecated":117}],114:[function(require,module,exports){
/* eslint-env browser */
/* global requestAnimationFrame */

'use strict';

var _ = require('object-iterators');

var Base = require('../Base');
var images = require('../../images');

/** @typedef {object} CanvasRenderingContext2D
 * @see [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
 */

/** @typedef {object} visibleColumnDescriptor
 * @property {number} index - A back reference to the element's array index in {@link Renderer#visibleColumns}.
 * @property {number} columnIndex - Dereferences {@link Behavior#columns}, the subset of _active_ columns, specifying which column to show in that position.
 * @property {number} left - Pixel coordinate of the left edge of this column, rounded to nearest integer.
 * @property {number} right - Pixel coordinate of the right edge of this column, rounded to nearest integer.
 * @property {number} width - Width of this column in pixels, rounded to nearest integer.
 */

/** @typedef {object} visibleRowDescriptor
 * @property {number} index - A back reference to the element's array index in {@link Renderer#visibleRows}.
 * @property {number} rowIndex - Local vertical row coordinate within the subgrid to which the row belongs, adjusted for scrolling.
 * @property {DataModel} subgrid - A reference to the subgrid to which the row belongs.
 * @property {number} top - Pixel coordinate of the top edge of this row, rounded to nearest integer.
 * @property {number} bottom - Pixel coordinate of the bottom edge of this row, rounded to nearest integer.
 * @property {number} height - Height of this row in pixels, rounded to nearest integer.
 */

/**
 * @constructor
 * @desc fin-hypergrid-renderer is the canvas enabled top level sub component that handles the renderering of the Grid.
 *
 * It relies on two other external subprojects
 *
 * 1. fin-canvas: a wrapper to provide a simpler interface to the HTML5 canvas component
 * 2. rectangular: a small npm module providing Point and Rectangle objects
 *
 * The fin-hypergrid-renderer is in a unique position to provide critical functionality to the fin-hypergrid in a hightly performant manner.
 * Because it MUST iterate over all the visible cells it can store various bits of information that can be encapsulated as a service for consumption by the fin-hypergrid component.
 *
 * Instances of this object have basically four main functions.
 *
 * 1. render fixed row headers
 * 2. render fixed col headers
 * 3. render main data cells
 * 4. render grid lines
 *
 * Same parameters as {@link Renderer#initialize|initialize}, which is called by this constructor.
 *
 */
var Renderer = Base.extend('Renderer', {

    //the shared single item "pooled" cell object for drawing each cell
    cell: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },

    scrollHeight: 0,

    viewHeight: 0,

    reset: function() {
        this.bounds = {
            width: 0,
            height: 0
        };
        this.renderedColumnMinWidths = [];

        /**
         * Represents the ordered set of visible columns. Array size is always the exact number of visible columns, the last of which may only be partially visible.
         *
         * This sequence of elements' `columnIndex` values assumes one of three patterns. Which pattern is base on the following two questions:
         * * Are there "fixed" columns on the left?
         * * Is the grid horizontally scrolled?
         *
         * The set of `columnIndex` values consists of:
         * 1. The first element will be -1 if the row handle column is being rendered.
         * 2. A zero-based list of consecutive of integers representing the fixed columns (if any).
         * 3. An n-based list of consecutive of integers representing the scrollable columns (where n = number of fixed columns + the number of columns scrolled off to the left).
         * @type {visibleColumnDescriptor}
         */
        this.visibleColumns = [];

        /**
         * Represents the ordered set of visible rows. Array size is always the exact number of visible rows.
         *
         * The sequence of elements' `rowIndex` values is local to each subgrid.
         * * **For each non-scrollable subgrid:** The sequence is a zero-based list of consecutive integers.
         * * **For the scrollable subgrid:**
         *   1. A zero-based list of consecutive of integers representing the fixed rows (if any).
         *   2. An n-based list of consecutive of integers representing the scrollable rows (where n = number of fixed rows + the number of rows scrolled off the top).
         *
         * Note that non-scrollable subgrids can come both before _and_ after the scrollable subgrid.
         * @type {visibleRowDescriptor}
         */
        this.visibleRows = [];

        this.insertionBounds = [];
    },

    /**
     * @summary Constructor logic
     * @desc This method will be called upon instantiation of this class or of any class that extends from this class.
     * > All `initialize()` methods in the inheritance chain are called, in turn, each with the same parameters that were passed to the constructor, beginning with that of the most "senior" class through that of the class of the new instance.
     * @memberOf Renderer.prototype
     */
    initialize: function(grid) {
        this.grid = grid;
        this.reset();
    },

    /**
     * This function creates several data structures:
     * * {@link Renderer#visibleColumns}
     * Original comment:
     * "this function computes the grid coordinates used for extremely fast iteration over
     * painting the grid cells. this function is very fast, for thousand rows X 100 columns
     * on a modest machine taking usually 0ms and no more that 3 ms."
     */
    computeCellsBounds: function() {

        //var startTime = Date.now();

        var scrollTop = this.getScrollTop(),
            scrollLeft = this.getScrollLeft(),

            fixedColumnCount = this.getFixedColumnCount(),
            fixedRowCount = this.getFixedRowCount(),

            numRows = this.getRowCount(),
            bounds = this.getBounds(),
            grid = this.grid,
            behavior = grid.behavior,
            editorCellEvent = grid.cellEditor && grid.cellEditor.event,
            dx = editorCellEvent && editorCellEvent.gridCell.x,
            dy = editorCellEvent && editorCellEvent.dataCell.y,
            vcEd,
            vrEd,

            insertionBoundsCursor = 0,
            previousInsertionBoundsCursorValue = 0,

            lineWidth = grid.properties.lineWidth,

            start = this.grid.isShowRowNumbers() ? -1 : 0,
            x, X, // horizontal pixel loop index and limit
            y, Y, // vertical pixel loop index and limit
            c, C, // column loop index and limit
            g, G, // subgrid loop index and limit
            r, R, // row loop index and limitrows in current subgrid
            subrows, // rows in subgrid g
            base, // sum of rows for all subgrids so far
            subgrids = behavior.subgrids,
            subgrid,
            rowIndex,
            scrollableSubgrid,
            footerHeight,
            vx, vy,
            vr, vc,
            width, height,
            firstVX, lastVX,
            firstVY, lastVY,
            topR,
            xSpaced, widthSpaced, heightSpaced; // adjusted for cell spacing

        this.scrollHeight = 0;

        this.visibleColumns.length = 0;
        this.visibleRows.length = 0;

        this.visibleColumnsByIndex = []; // array because number of columns will always be reasonable
        this.visibleRowsByDataRowIndex = {}; // hash because keyed by (fixed and) scrolled row indexes

        this.insertionBounds = [];

        for (
            x = 0, c = start, C = this.getColumnCount(), X = bounds.width || grid.canvas.width;
            c < C && x <= X;
            c++
        ) {
            vx = c;
            if (c >= fixedColumnCount) {
                lastVX = vx += scrollLeft;
                if (firstVX === undefined) {
                    firstVX = lastVX;
                }
            }
            if (vx >= C) {
                break; // scrolled beyond last column
            }

            width = grid.getColumnWidth(vx);

            xSpaced = x ? x + lineWidth : x;
            widthSpaced = x ? width - lineWidth : width;
            this.visibleColumns[c] = this.visibleColumnsByIndex[vx] = vc = {
                index: c,
                columnIndex: vx,
                left: xSpaced,
                width: widthSpaced,
                right: xSpaced + widthSpaced
            };
            if (dx === vx) {
                vcEd = vc;
            }

            x += width;

            insertionBoundsCursor += Math.round(width / 2) + previousInsertionBoundsCursorValue;
            this.insertionBounds.push(insertionBoundsCursor);
            previousInsertionBoundsCursorValue = Math.round(width / 2);
        }

        footerHeight = grid.properties.defaultRowHeight * subgrids.reduce(function(rows, subgrid) {
            if (scrollableSubgrid) {
                rows += subgrid.getRowCount();
            } else {
                scrollableSubgrid = !subgrid.type;
            }
            return rows;
        }, 0);

        for (
            base = r = g = y = 0, G = subgrids.length, Y = bounds.height - footerHeight;
            g < G;
            g++, base += subrows
        ) {
            subgrid = subgrids[g];
            subrows = subgrid.getRowCount();
            scrollableSubgrid = !subgrid.type;
            topR = r;

            // For each row of each subgrid...
            for (R = Math.min(numRows, r + subrows); r < R && y < Y; r++) {
                vy = r;
                if (scrollableSubgrid && r >= fixedRowCount) {
                    vy += scrollTop;
                    lastVY = vy - base;
                    if (firstVY === undefined) {
                        firstVY = lastVY;
                    }
                    if (vy >= R) {
                        break; // scrolled beyond last row
                    }
                }


                rowIndex = vy - base;
                height = behavior.getRowHeight(rowIndex, subgrid);

                heightSpaced = height - lineWidth;
                this.visibleRows[r] = vr = {
                    index: r,
                    subgrid: subgrid,
                    rowIndex: rowIndex,
                    top: y,
                    height: heightSpaced,
                    bottom: y + heightSpaced
                };
                if (scrollableSubgrid) {
                    this.visibleRowsByDataRowIndex[vy - base] = vr;
                    if (dy === rowIndex) {
                        vrEd = vr;
                    }
                }

                y += height;
            }

            if (scrollableSubgrid) {
                subrows = r - topR;
                Y += footerHeight;
            }
        }

        if (editorCellEvent) {
            editorCellEvent.visibleColumn = vcEd;
            editorCellEvent.visibleRow = vrEd;
            editorCellEvent.gridCell.y = vrEd && vrEd.index;
            editorCellEvent._bounds = null;
        }

        this.viewHeight = Y;

        this.dataWindow = this.grid.newRectangle(firstVX, firstVY, lastVX - firstVX, lastVY - firstVY);
    },

    /**
     * Keep in place! Used by fin-canvas.
     * @memberOf Renderer.prototype
     * @returns {Object} a property value at a key, delegates to the grid
     */
    resolveProperty: function(key) {
        return this.grid.properties[key];
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Notify the fin-hypergrid everytime we've repainted.
     * @desc This is the entry point from fin-canvas.
     * @param {CanvasRenderingContext2D} gc
     */
    paint: function(gc) {
        if (this.grid) {
            if (!this.hasData()) {
                var message = this.grid.properties.noDataMessage;
                gc.font = '20px Arial';
                gc.fillText(message, 20, 30);
            } else {
                this.renderGrid(gc);
                this.grid.gridRenderedNotification();
            }
        }
    },

    hasData: function() {
        var data = this.grid.behavior.getData();
        if (data) {
            return data.length > 0;
        }
        return false;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Answer how many rows we rendered
     */
    getVisibleRowsCount: function() {
        return this.visibleRows.length - 1;
    },

    getVisibleScrollHeight: function() {
        return this.viewHeight - this.grid.getFixedRowsHeight();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number[]} Rows we just rendered.
     */
    getVisibleRows: function() {
        warn('getVisibleRows', 'The getVisibleRows() method has been deprecated as of v1.2.0 and will be removed in a future version. Previously returned the this.visibleRows array but because this.visibleRows is no longer a simple array of integers but is now an array of objects, it now returns an array mapped to this.visibleRows[*].rowIndex. Note however that this mapping is not equivalent to what this method previously returned because while each object\'s .rowIndex property is still adjusted for scrolling within the data subgrid, the index is now local to (zero-based within) each subgrid');
        return this.visibleRows.map(function(vr) { return vr.rowIndex; });
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Number of columns we just rendered.
     */
    getVisibleColumnsCount: function() {
        return this.visibleColumns.length - 1;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Columns we just rendered.
     */
    getVisibleColumns: function() {
        warn('visibleColumns', 'The getVisibleColumns() method has been deprecated as of v1.2.0 and will be removed in a future version. Previously returned the this.visibleColumns but because this.visibleColumns is no longer a simple array of integers but is now an array of objects, it now returns an array mapped to the equivalent visibleColumns[*].columnIndex.');
        return this.visibleColumns.map(function(vc) { return vc.columnIndex; });
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The column index when the mouseEvent coordinates are over a column divider.
     */
    overColumnDivider: function(x) {
        var vc = this.visibleColumns,
            xi = Math.round(x),
            x1 = xi - 3,
            x2 = xi + 1;

        for (var c = (-1 in vc ? -1 : 0), C = vc.length; c < C; ++c) {
            x = vc[c].right;
            if (x1 <= x && x <= x2) {
                return c + 1;
            }
        }

        return -1;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The row index when the mouseEvent coordinates are over a row divider.
     */
    overRowDivider: function(y) {
        var vr = this.visibleRows,
            yi = Math.round(y),
            y1 = yi - 3,
            y2 = yi + 1;

        for (var r = 0, R = vr.length; r < R; ++r) {
            y = vr[r].bottom;
            if (y1 <= y && y <= y2) {
                return r + 1;
            }
        }

        return -1;
    },

    /**
     * @memberOf Renderer.prototype
     * @param {CellEvent|number} x - CellEvent object or grid column coordinate.
     * @param {number} [y] - Grid row coordinate. Omit if `xOrCellEvent` is a CellEvent.
     * @returns {Rectangle} Bounding rect of cell with the given coordinates.
     */
    getBoundsOfCell: function(x, y) {
        var vc = this.visibleColumns[x],
            vr = this.visibleRows[y];

        return {
            x: vc.left,
            y: vr.top,
            width: vc.width,
            height: vr.height
        };
    },

    /**
     * @memberOf Renderer.prototype
     * @desc answer the column index under the coordinate at pixelX
     * @param {number} pixelX - The horizontal coordinate.
     * @returns {number} The column index under the coordinate at pixelX.
     */
    getColumnFromPixelX: function(pixelX) {
        var width = 0,
            fixedColumnCount = this.getFixedColumnCount(),
            scrollLeft = this.grid.getHScrollValue(),
            visibleColumns = this.visibleColumns;

        for (var c = 1; c < visibleColumns.length - 1; c++) {
            width = visibleColumns[c].left - (visibleColumns[c].left - visibleColumns[c - 1].left) / 2;
            if (pixelX < width) {
                if (c > fixedColumnCount) {
                    c += scrollLeft;
                }
                return c - 1;
            }
        }
        if (c > fixedColumnCount) {
            c += scrollLeft;
        }
        return c - 1;
    },


    /**
     * @memberOf Renderer.prototype
     * @desc Answer specific data cell coordinates given mouse coordinates in pixels.
     * @param {Point} point
     * @returns {Point} Cell coordinates
     */
    getGridCellFromMousePoint: function(point) {
        var x = point.x,
            y = point.y,
            vrs = this.visibleRows,
            vcs = this.visibleColumns,
            firstColumn = vcs[this.grid.isShowRowNumbers() ? -1 : 0],
            inFirstColumn = x < firstColumn.right,
            vc = inFirstColumn ? firstColumn : vcs.find(function(vc) { return x < vc.right; }) || vcs[vcs.length - 1],
            vr = vrs.find(function(vr) { return y < vr.bottom; }) || vrs[vrs.length - 1],
            mousePoint = this.grid.newPoint(x - vc.left, y - vr.top),
            cellEvent = new this.grid.behavior.CellEvent(vc.columnIndex, vr.index);

        // cellEvent.visibleColumn = vc;
        // cellEvent.visibleRow = vr;

        return Object.defineProperty(cellEvent, 'mousePoint', { value: mousePoint });
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Determines if a column is visible.
     * @param {number} colIndex - the column index*
     * @returns {boolean} The given column is fully visible.
     */
    isColumnVisible: function(columnIndex) {
        return !!this.visibleColumns.find(function(vc) { return vc.columnIndex === columnIndex; });
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The width x coordinate of the last rendered column
     */
    getFinalVisibleColumnBoundary: function() {
        var chop = this.isLastColumnVisible() ? 2 : 1;
        var colWall = this.visibleColumns[this.visibleColumns.length - chop].right;
        return Math.min(colWall, this.getBounds().width);
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Determines visibility of a row.
     * @param {number} y - The physical (unscrolled) grid row index.
     * @returns {boolean} The given row is fully visible.
     */
    isRowVisible: function(y) {
        return !!this.visibleRows[y];
    },

    /**
     * @memberOf Renderer.prototype
     * @summary Determines if a cell is selected.
     * @param {number} x - the x cell coordinate
     * @param {number} y - the y cell coordinate*
     * @returns {boolean} The given cell is fully visible.
     */
    isSelected: function(x, y) {
        return this.grid.isSelected(x, y);
    },

    /**
     * @memberOf Renderer.prototype
     * @desc This is the main forking of the renderering task.
     * @param {CanvasRenderingContext2D} gc
     */
    renderGrid: function(gc) {
        gc.beginPath();

        this.paintCells(gc);
        this.renderOverrides(gc);
        this.renderLastSelection(gc);
        gc.closePath();
    },

    renderLastSelection: function(gc) {
        gc.beginPath();
        this._renderLastSelection(gc);
        gc.closePath();
    },

    _renderLastSelection: function(gc) {
        var selections = this.grid.selectionModel.getSelections();
        if (!selections || selections.length === 0) {
            return;
        }
        var selection = this.grid.selectionModel.getLastSelection();

        if (selection.origin.x === -1) {
            // no selected area, lets exit
            return;
        }

        var vci = this.visibleColumnsByIndex,
            vri = this.visibleRowsByDataRowIndex,
            lastColumn = this.visibleColumns[this.visibleColumns.length - 1], // last column in scrollable section
            lastRow = vri[this.dataWindow.corner.y]; // last row in scrollable data section

        if (
            !lastColumn || !lastRow ||
            selection.origin.x > lastColumn.columnIndex ||
            selection.origin.y > lastRow.rowIndex
        ) {
            // selection area begins to right or below grid
            return;
        }

        var vcOrigin = vci[selection.origin.x],
            vcCorner = vci[selection.corner.x],
            vrOrigin = vri[selection.origin.y],
            vrCorner = vri[selection.corner.y];

        if (
            !(vcOrigin || vcCorner) || // entire selection scrolled out of view to left of scrollable region
            !(vrOrigin || vrCorner)    // entire selection scrolled out of view above scrollable region
        ) {
            return;
        }

        var props = this.grid.properties;
        vcOrigin = vcOrigin || lastColumn;
        vcCorner = vcCorner || selection.corner.x > lastColumn.columnIndex
            ? lastColumn.columnIndex
            : vci[props.fixedColumnCount - 1];
        vrOrigin = vrOrigin || lastRow;
        vrCorner = vrCorner || selection.corner.y > lastRow.rowIndex
            ? lastRow.rowIndex
            : vri[props.fixedRowCount - 1];

        // Render the selection model around the bounds
        var config = {
            bounds: {
                x: vcOrigin.left,
                y: vrOrigin.top,
                width: vcCorner.right - vcOrigin.left,
                height: vrCorner.bottom - vrOrigin.top
            },
            selectionRegionOverlayColor: this.grid.properties.selectionRegionOverlayColor,
            selectionRegionOutlineColor: this.grid.properties.selectionRegionOutlineColor
        };
        this.grid.cellRenderers.get('lastselection').paint(gc, config);
    },

    /**
     * @memberOf Renderer.prototype
     * @desc iterate the renderering overrides and manifest each
     * @param {CanvasRenderingContext2D} gc
     */
    renderOverrides: function(gc) {
        var cache = this.grid.renderOverridesCache;
        for (var key in cache) {
            if (cache.hasOwnProperty(key)) {
                var override = cache[key];
                if (override) {
                    this.renderOverride(gc, override);
                }
            }
        }
    },

    /**
     * @memberOf Renderer.prototype
     * @desc copy each overrides specified area to it's target and blank out the source area
     * @param {CanvasRenderingContext2D} gc
     * @param {OverrideObject} override - an object with details contain an area and a target context
     */
    renderOverride: function(gc, override) {
        //lets blank out the drag row
        var hdpiRatio = override.hdpiratio;
        var startX = override.startX; //hdpiRatio * edges[override.columnIndex];
        var width = override.width + 1;
        var height = override.height;
        var targetCTX = override.ctx;
        var imgData = gc.getImageData(startX, 0, Math.round(width * hdpiRatio), Math.round(height * hdpiRatio));
        targetCTX.putImageData(imgData, 0, 0);
        gc.fillStyle = this.grid.properties.backgroundColor2;
        gc.fillRect(Math.round(startX / hdpiRatio), 0, width, height);
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Current vertical scroll value.
     */
    getScrollTop: function() {
        return this.grid.getVScrollValue();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} Current horizontal scroll value.
     */
    getScrollLeft: function() {
        return this.grid.getHScrollValue();
    },

    getColumnEdges: function() {
        warn('columnEdges', 'The getColumnEdges() mehtod has been deprecated as of version 1.2.0 in favor of visibleColumns[*].top and will be removed in a future version. Note however that columnEdges had one additional element (representing the right edge of the last visible column) which visibleColumns lacks. Instead you can reference visibleColumns[*].bottom.');
        return this.visibleColumns.map(function(vc) { return vc.left; }).concat([this.visibleColumns[this.visibleColumns.length - 1].right]);
    },

    getRowEdges: function() {
        warn('rowEdges', 'The getRowEdges() method has been deprecated as of version 1.2.0 in favor of visibleRows[*].top and will be removed in a future version. Note however that rowEdges had one additional element (representing the bottom edge of the last visible row) which visibleRows lacks. Instead you can reference visibleRows[*].bottom.');
        return this.visibleRows.map(function(vr) { return vr.top; }).concat([this.visibleRows[this.visibleRows.length - 1].bottom]);
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {boolean} The last col was rendered (is visible)
     */
    isLastColumnVisible: function() {
        var lastColumnIndex = this.getColumnCount() - 1;
        return !!this.visibleColumns.find(function(vc) { return vc.columnIndex === lastColumnIndex; });
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The rendered column width at index
     */
    getRenderedWidth: function(index) {
        var result,
            columns = this.visibleColumns;

        if (index >= columns.length) {
            result = columns[columns.length - 1].right;
        } else {
            result = columns[index].left;
        }

        return result;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The rendered row height at index
     */
    getRenderedHeight: function(index) {
        var result,
            rows = this.visibleRows;

        if (index >= rows.length) {
            var last = rows[rows.length - 1];
            result = last.bottom;
        } else {
            result = rows[index].top;
        }

        return result;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {fin-canvas} my [fin-canvas](https://github.com/stevewirts/fin-canvas)
     */
    getCanvas: function() {
        return this.grid.getCanvas();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {boolean} User is currently dragging a column for reordering.
     */
    isDraggingColumn: function() {
        return this.grid.isDraggingColumn();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The row to go to for a page up.
     */
    getPageUpRow: function() {
        var grid = this.grid,
            scrollHeight = this.getVisibleScrollHeight(),
            top = this.dataWindow.origin.y - this.grid.properties.fixedRowCount - 1,
            scanHeight = 0;
        while (scanHeight < scrollHeight && top >= 0) {
            scanHeight += grid.getRowHeight(top);
            top--;
        }
        return top + 1;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The row to goto for a page down.
     */
    getPageDownRow: function() {
        return this.dataWindow.corner.y - this.grid.properties.fixedRowCount + 1;
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of columns.
     */
    getColumnCount: function() {
        return this.grid.getColumnCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of rows.
     */
    getRowCount: function() {
        return this.grid.getRowCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of fixed columns.
     */
    getFixedColumnCount: function() {
        return this.grid.getFixedColumnCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of fixed rows.
     */
    getFixedRowCount: function() {
        return this.grid.getFixedRowCount();
    },

    /**
     * @memberOf Renderer.prototype
     * @returns {number} The number of header rows.
     */
    getHeaderRowCount: function() {
        return this.grid.getHeaderRowCount();
    },

    /** @summary Smart render the grid.
     * @desc Paint all the cells of a grid, including all "fixed" columns and rows.
     * We snapshot the context to insure against its pollution.
     * `try...catch` surrounds each cell paint in case a cell renderer throws an error.
     * The error message is error-logged to console AND displayed in cell.
     *
     * For performance reasons, we do not create a new `CellEvent` on for each `_paintCell` call.
     * Rather, we create one for all the calls and maintain the instance variables in the loops
     * (which is why `CellEvent` uses `WritablePoint` instead of `Point` for `gridCell` and `dataCell`):
     * * Set in column loop:
     *   * `cellEvent.column`
     *   * `cellEvent.gridCell.x`
     *   * `cellEvent.dataCell.x`
     *   * `cellEvent.bounds.x`
     *   * `cellEvent.bounds.width`
     * * Set in subgrid loop:
     *   * `cellEvent.subgrid`
     * * Set in row loop:
     *   * `cellEvent.gridCell.y`
     *   * `cellEvent.dataCell.y`
     *   * `cellEvent.bounds.y`
     *   * `cellEvent.bounds.height`
     * @memberOf Renderer.prototype
     * @param {CanvasRenderingContext2D} gc
     */
    paintCells: function(gc) {
        var message,
            behavior = this.grid.behavior,
            c, C, // column loop index and limit
            r, R, // row loop index and limit
            cellEvent = new behavior.CellEvent(0, 0),
            bounds = cellEvent._bounds = { x:0, y:0, width:0, height:0 },
            gridCell = cellEvent.gridCell,
            dataCell = cellEvent.dataCell,
            vc, visibleColumns = this.visibleColumns,
            vr, visibleRows = this.visibleRows,
            clipHeight = this.getBounds().height;

        this.buttonCells = {};

        // For each column...
        for (
            c = this.grid.isShowRowNumbers() ? -1 : 0, C = visibleColumns.length;
            c < C;
            c++
        ) {
            cellEvent.visibleColumn = vc = visibleColumns[c];
            cellEvent.column = behavior.getActiveColumn(vc.columnIndex);

            gridCell.x = vc.columnIndex;
            dataCell.x = cellEvent.column && cellEvent.column.index;

            bounds.x = vc.left;
            bounds.width = vc.width;

            this.renderedColumnMinWidths[gridCell.x] = 0;

            gc.save();

            // Clip to visible portion of column to prevent overflow to right. Previously we clipped to entire visible grid and dealt with overflow by overpainting with next column. However, this strategy fails when transparent background (no background color).
            // TODO: if extra clip() calls per column affect performance (not the clipping itself which was happening anyway, but the clip calls which set up the clipping), use previous strategy when there is a background color
            gc.beginPath();
            gc.rect(0, 0, bounds.x + bounds.width, clipHeight);
            gc.clip();

            // For each row of each subgrid (of each column)...
            for (
                r = 0, R = visibleRows.length;
                r < R;
                r++
            ) {
                cellEvent.visibleRow = vr = visibleRows[r];

                bounds.y = vr.top;
                bounds.height = vr.height;

                gridCell.y = vr.index;
                dataCell.y = vr.rowIndex;

                try {
                    this._paintCell(gc, cellEvent);
                } catch (e) {
                    message = e && (e.message || e) || 'Unknown error.';

                    console.error(message);

                    var rawGc = gc.gc || gc, // Don't log these canvas calls
                        errX = vc.left, errWidth = vc.right,
                        errY = vr.top, errHeight = vr.bottom,
                        config = { bounds: { c: errX, y: errY, width: errWidth, height: errHeight } };

                    rawGc.save(); // define clipping region
                    rawGc.beginPath();
                    rawGc.rect(errX, errY, errWidth, errHeight);
                    rawGc.clip();

                    this.grid.cellRenderers.get('errorcell').paint(rawGc, config, message);

                    rawGc.restore(); // discard clipping region
                }
            }

            gc.restore(); // Remove column's clip region (and anything else renderCellError() might have set)
        }

        setNumberColumnWidth(gc, behavior, this.grid.getRowCount());
    },

    /**
     * @memberOf Renderer.prototype
     * @param {CanvasRenderingContext2D} gc
     * @param x
     * @param y
     */
    paintCell: function(gc, x, y) {
        gc.moveTo(0, 0);

        var c = this.visibleColumns[x].index, // todo refac
            r = this.visibleRows[y].index;

        if (c) { //something is being viewed at at the moment (otherwise returns undefined)
            this._paintCell(gc, c, r);
        }
    },

    _paintCell: function(gc, cellEvent) {

        var grid = this.grid,
            behavior = grid.behavior,
            x = cellEvent.gridCell.x,
            // y = cellEvent.gridCell.y,
            c = cellEvent.dataCell.x,
            r = cellEvent.dataCell.y,

            isHandleColumn = cellEvent.isHandleColumn,
            isHierarchyColumn = cellEvent.isHierarchyColumn,
            isColumnSelected = cellEvent.isColumnSelected,

            isShowRowNumbers = grid.isShowRowNumbers(),
            isRowHandleOrHierarchyColumn = isShowRowNumbers && isHandleColumn || isHierarchyColumn,

            isGridRow = cellEvent.isGridRow,
            isRowSelected = cellEvent.isRowSelected,
            isCellSelected = cellEvent.isCellSelected,

            isHeaderRow = cellEvent.isHeaderRow,
            isFilterRow = cellEvent.isFilterRow,

            cellProperties = behavior.getCellOwnProperties(cellEvent),
            baseProperties,
            nonGridCellProps,
            config = this.config;

        if (cellProperties && cellProperties.applyCellProperties) {
            this.c = undefined;
            config = undefined;
            baseProperties = cellProperties;
            nonGridCellProps = !isGridRow;
        } else if (!config || c !== this.c) {
            this.c = c;
            config = undefined;
        }

        var configType;
        if (isRowHandleOrHierarchyColumn) {
            configType = isRowSelected ? 1 : 2;
        } else if (isGridRow) {
            configType = 3;
        } else if (isFilterRow) {
            configType = 4;
        } else if (isColumnSelected) {
            configType = 5;
        } else { // header or summary or other
            configType = 6;
        }

        if (!config || configType !== this.configType) {
            this.configType = configType;
            if (!baseProperties) {
                baseProperties = behavior.getColumnProperties(c);
                if (!baseProperties) {
                    this.config = undefined;
                    return;
                }
            }
            switch (configType) {
                case 1: config = Object.create(baseProperties.rowHeaderRowSelection); break;
                case 2: config = Object.create(baseProperties.rowHeader); break;
                case 3: config = Object.create(baseProperties); break;
                case 4: config = Object.create(baseProperties.filterProperties); break;
                case 5: config = Object.create(baseProperties.columnHeaderColumnSelection); break;
                case 6: config = Object.create(baseProperties.columnHeader); break;
            }
            this.config = config;
            this.baseProperties = baseProperties;
        }

        // Create `config` (render props) object
        // * with appropriate prototype
        // * set `isSelected` (added to `config` below as a read-only property)
        // * for row handle column, set `config.halign` to `'right'`
        // * for hierarchy column, set `config.halign` to `'left'`
        var isSelected;
        if (isRowHandleOrHierarchyColumn) {
            isSelected = isRowSelected || grid.isCellSelectedInRow(r);
            config.halign = isHierarchyColumn ? 'left' : 'right';
        } else if (isGridRow) {
            isSelected = isCellSelected || isRowSelected || isColumnSelected;
        } else if (isFilterRow) {
            isSelected = false;
        } else if (isColumnSelected) {
            isSelected = true;
        } else { // header or summary or other
            isSelected = grid.isCellSelectedInColumn(x);
        }

        // Set cell contents:
        // * For all cells: set `config.value` (writable property)
        // * For cells outside of row handle column: also set `config.dataRow` for use by valOrFunc
        if (!isHandleColumn) {
            config.dataRow = grid.getRow(r);
            config.value = cellEvent.value;
        } else if (isGridRow) {
            // row handle for a data row
            config.value = [images.checkbox(isRowSelected), r + 1, null]; // row number is 1-based
        } else if (isHeaderRow) {
            // row handle for header row: gets "master" checkbox
            config.value = [images.checkbox(grid.areAllRowsSelected()), '', null];
        } else if (isFilterRow) {
            // row handle for filter row: gets filter icon
            config.value = [images.filter(false), '', null];
        } else {
            // row handles for "summary" or other rows: empty
            config.value = '';
        }

        config.isSelected = isSelected;
        config.isGridColumn = !isRowHandleOrHierarchyColumn;
        config.isGridRow = isGridRow;
        config.isHeaderRow = isHeaderRow;
        config.isFilterRow = isFilterRow;
        config.isUserDataArea = !isRowHandleOrHierarchyColumn && isGridRow;
        config.isColumnHovered = cellEvent.isColumnHovered;
        config.isRowHovered = cellEvent.isRowHovered;
        config.isCellHovered = cellEvent.isCellHovered;
        config.bounds = cellEvent.bounds;
        config.isCellSelected = isCellSelected;
        config.isRowSelected = isRowSelected;
        config.isColumnSelected = isColumnSelected;
        config.isInCurrentSelectionRectangle = grid.isInCurrentSelectionRectangle(x, r);

        if (grid.mouseDownState) {
            config.mouseDown = grid.mouseDownState.gridCell.equals(cellEvent.gridCell);
        }

        // This call's dataModel.getCell which developer can override to:
        // * mutate the (writable) properties of `config`
        // * mutate cell renderer choice (instance of which is returned)
        var cellRenderer = behavior.getCellRenderer(config, cellEvent);

        // Overwrite possibly mutated cell properties, if requested to do so by `getCell` override
        if (config.reapplyCellProperties || nonGridCellProps) {
            _(config).extendOwn(cellProperties);
        }

        behavior.cellPropertiesPrePaintNotification(config);

        //allow the renderer to identify itself if it's a button
        config.buttonCells = this.buttonCells;

        config.formatValue = grid.getFormatter(config.isUserDataArea && config.format);

        cellRenderer.paint(gc, config);

        this.renderedColumnMinWidths[x] = Math.max(config.minWidth || 0, this.renderedColumnMinWidths[x]);
        this.baseProperties.preferredWidth = this.renderedColumnMinWidths[x];
    },

    isViewableButton: function(c, r) {
        var key = c + ',' + r;
        return this.buttonCells[key] === true;
    },

    startAnimator: function() {
        var self = this;
        requestAnimationFrame(function animate() {
            self.animate();
            requestAnimationFrame(animate);
        });
    },

    animate: function() {
        var ctx = this.getCanvas().canvasCTX;
        ctx.beginPath();
        ctx.save();
        this.renderLastSelection(ctx);
        ctx.restore();
        ctx.closePath();
    },

    getBounds: function() {
        return this.bounds;
    },

    setBounds: function(bounds) {
        return (this.bounds = bounds);
    }

});

function setNumberColumnWidth(gc, behavior, maxRow) {
    var columnProperties = behavior.getColumnProperties(-1),
        cellProperties = columnProperties.rowHeader,
        icon = images.checked;

    gc.font = cellProperties.font;

    columnProperties.preferredWidth = icon.width + 7 + cellProperties.getTextWidth(gc, maxRow + 1);
}

var warnings = {};
function warn(name, message) {
    if (!warnings[name]) {
        warnings[name] = true;
        console.warn(message);
    }
}

module.exports = Renderer;

},{"../../images":4,"../Base":49,"object-iterators":42}],115:[function(require,module,exports){
'use strict';

var RangeSelectionModel = require('sparse-boolean-array');

/**
 *
 * @constructor
 * @desc We represent selections as a list of rectangles because large areas can be represented and tested against quickly with a minimal amount of memory usage. Also we need to maintain the selection rectangles flattened counter parts so we can test for single dimension contains. This is how we know to highlight the fixed regions on the edges of the grid.
 */

function SelectionModel(grid) {

    this.grid = grid;

    /**
     * @name multipleSelections
     * @type {boolean}
     * @summary Can select multiple cell regions.
     * @memberOf SelectionModel.prototype
     */
    this.multipleSelections = grid[grid.behavior ? 'getProperties' : '_getProperties']().multipleSelections;

    /**
     * @name selections
     * @type {Rectangle[]}
     * @summary The selection rectangles.
     * @desc Created as an empty array upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.selections = [];

    /**
     * @name flattenedX
     * @type {Rectangle[]}
     * @summary The selection rectangles flattened in the horizontal direction (no width).
     * @desc Created as an empty array upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.flattenedX = [];

    /**
     * @name flattenedY
     * @type {Rectangle[]}
     * @summary The selection rectangles flattened in the vertical direction (no height).
     * @desc Created as an empty array upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.flattenedY = [];

    /**
     * @name rowSelectionModel
     * @type {RangeSelectionModel}
     * @summary The selection rectangles.
     * @desc Created as a new RangeSelectionModel upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.rowSelectionModel = new RangeSelectionModel();

    /**
     * @name columnSelectionModel
     * @type {RangeSelectionModel}
     * @summary The selection rectangles.
     * @desc Created as a new RangeSelectionModel upon instantiation by the {@link SelectionModel|constructor}.
     * @memberOf SelectionModel.prototype
     */
    this.columnSelectionModel = new RangeSelectionModel();

    this.setLastSelectionType('');
}

SelectionModel.prototype = {

    constructor: SelectionModel.prototype.constructor,

    /**
     * @type {boolean}
     * @memberOf SelectionModel.prototype
     */
    allRowsSelected: false,

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getLastSelection: function() {
        var sels = this.selections;
        var sel = sels[sels.length - 1];
        return sel;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getLastSelectionType: function() {
        return this.lastSelectionType;
    },

    /**
     * @param type
     * @memberOf SelectionModel.prototype
     */
    setLastSelectionType: function(type) {
        this.lastSelectionType = type;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @description Select the region described by the given coordinates.
     *
     * @param {number} ox - origin x coordinate
     * @param {number} oy - origin y coordinate
     * @param {number} ex - extent x coordinate
     * @param {number} ey - extent y coordinate
     * @param {boolean} silent - whether to fire selection changed event
     */
    select: function(ox, oy, ex, ey, silent) {
        var newSelection = this.grid.newRectangle(ox, oy, ex, ey);

        //Cache the first selected cell before it gets normalized to top-left origin
        newSelection.firstSelectedCell = this.grid.newPoint(ox, oy);

        newSelection.lastSelectedCell = (
            newSelection.firstSelectedCell.x === newSelection.origin.x &&
            newSelection.firstSelectedCell.y === newSelection.origin.y
        )
            ? newSelection.corner
            : newSelection.origin;

        if (this.multipleSelections) {
            this.selections.push(newSelection);
            this.flattenedX.push(newSelection.flattenXAt(0));
            this.flattenedY.push(newSelection.flattenYAt(0));
        } else {
            this.selections[0] = newSelection;
            this.flattenedX[0] = newSelection.flattenXAt(0);
            this.flattenedY[0] = newSelection.flattenYAt(0);
        }
        this.setLastSelectionType('cell');

        if (!silent) {
            this.grid.selectionChanged();
        }
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param {number} ox - origin x coordinate
     * @param {number} oy - origin y coordinate
     * @param {number} ex - extent x coordinate
     * @param {number} ey - extent y coordinate
     */
    toggleSelect: function(ox, oy, ex, ey) {

        var selected, index;

        selected = this.selections.find(function(selection, idx) {
            index = idx;
            return (
                selection.origin.x === ox && selection.origin.y === oy &&
                selection.extent.x === ex && selection.extent.y === ey
            );
        });

        if (selected) {
            this.selections.splice(index, 1);
            this.flattenedX.splice(index, 1);
            this.flattenedY.splice(index, 1);
            this.grid.selectionChanged();
        } else {
            this.select(ox, oy, ex, ey);
        }
    },

    /**
     * @memberOf SelectionModel.prototype
     * @desc Remove the last selection that was created.
     */
    clearMostRecentSelection: function(dontClearRowSelections) {
        dontClearRowSelections = dontClearRowSelections === true;
        if (!dontClearRowSelections) {
            this.setAllRowsSelected(false);
        }
        if (this.selections.length) { --this.selections.length; }
        if (this.flattenedX.length) { --this.flattenedX.length; }
        if (this.flattenedY.length) { --this.flattenedY.length; }
        //this.getGrid().selectionChanged();
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    clearMostRecentColumnSelection: function() {
        this.columnSelectionModel.clearMostRecentSelection();
        this.setLastSelectionType('column');
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    clearMostRecentRowSelection: function() {
        this.rowSelectionModel.clearMostRecentSelection();
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    clearRowSelection: function() {
        this.rowSelectionModel.clear();
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getSelections: function() {
        return this.selections;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean} There are active selection(s).
     */
    hasSelections: function() {
        return this.selections.length !== 0;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */
    hasRowSelections: function() {
        return !this.rowSelectionModel.isEmpty();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */
    hasColumnSelections: function() {
        return !this.columnSelectionModel.isEmpty();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @return {boolean} Selection covers a specific column.
     * @param {number} y
     */
    isCellSelectedInRow: function(y) {
        return this._isCellSelected(this.flattenedX, 0, y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns Selection covers a specific row.
     * @param {number} x
     */
    isCellSelectedInColumn: function(x) {
        return this._isCellSelected(this.flattenedY, x, 0);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @summary Selection query function.
     * @returns {boolean} The given cell is selected (part of an active selection).
     * @param {Rectangle[]} selections - Selection rectangles to search through.
     * @param {number} x
     * @param {number} y
     */
    isSelected: function(x, y) {
        return (
            this.isColumnSelected(x) ||
            this.isRowSelected(y) ||
            this._isCellSelected(this.selections, x, y)
        );
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x
     * @param y
     * @returns {*}
     */
    isCellSelected: function(x, y) {
        return this._isCellSelected(this.selections, x, y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param selections
     * @param x
     * @param y
     * @returns {boolean}
     * @private
     */
    _isCellSelected: function(selections, x, y) {
        var self = this;
        return !!selections.find(function(selection) {
            return self.rectangleContains(selection, x, y);
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @desc empty out all our state
     *
     */
    clear: function(dontClearRowSelections) {
        dontClearRowSelections = dontClearRowSelections === true;
        this.selections.length = 0;
        this.flattenedX.length = 0;
        this.flattenedY.length = 0;
        this.columnSelectionModel.clear();
        if (!dontClearRowSelections) {
            this.setAllRowsSelected(false);
            this.rowSelectionModel.clear();
        }
        //this.getGrid().selectionChanged();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param {number} ox - origin x coordinate
     * @param {number} oy - origin y coordinate
     * @param {number} ex - extent x coordinate
     * @param {number} ey - extent y coordinate
     * @returns {boolean}
     */
    isRectangleSelected: function(ox, oy, ex, ey) {
        return !!this.selections.find(function(selection) {
            return (
                selection.origin.x === ox && selection.origin.y === oy &&
                selection.extent.x === ex && selection.extent.y === ey
            );
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x
     * @returns {*}
     */
    isColumnSelected: function(x) {
        return this.columnSelectionModel.isSelected(x);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param y
     * @returns {boolean|*}
     */
    isRowSelected: function(y) {
        return this.allRowsSelected || this.rowSelectionModel.isSelected(y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x1
     * @param x2
     */
    selectColumn: function(x1, x2) {
        this.columnSelectionModel.select(x1, x2);
        this.setLastSelectionType('column');
    },

    /**
     * @memberOf SelectionModel.prototype
     */
    selectAllRows: function() {
        this.clear();
        this.setAllRowsSelected(true);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */

    setAllRowsSelected: function(isIt) {
        this.allRowsSelected = isIt;
    },

    areAllRowsSelected: function() {
        return this.allRowsSelected;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param y1
     * @param y2
     */
    selectRow: function(y1, y2) {
        this.rowSelectionModel.select(y1, y2);
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x1
     * @param x2
     */
    deselectColumn: function(x1, x2) {
        this.columnSelectionModel.deselect(x1, x2);
        this.setLastSelectionType('column');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param y1
     * @param y2
     */
    deselectRow: function(y1, y2) {
        if (this.areAllRowsSelected()) {
            // To deselect a row, we must first remove the all rows flag...
            this.setAllRowsSelected(false);
            // ...and create a single range representing all rows
            this.rowSelectionModel.select(0, this.grid.getRowCount() - 1);
        }
        this.rowSelectionModel.deselect(y1, y2);
        this.setLastSelectionType('row');
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*}
     */
    getSelectedRows: function() {
        if (this.areAllRowsSelected()) {
            var headerRows = this.grid.getHeaderRowCount();
            var rowCount = this.grid.getRowCount() - headerRows;
            var result = new Array(rowCount);
            for (var i = 0; i < rowCount; i++) {
                result[i] = i + headerRows;
            }
            return result;
        }
        return this.rowSelectionModel.getSelections();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {*|Array.Array.number}
     */
    getSelectedColumns: function() {
        return this.columnSelectionModel.getSelections();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {boolean}
     */
     isColumnOrRowSelected: function() {
        return !this.columnSelectionModel.isEmpty() || !this.rowSelectionModel.isEmpty();
    },

    /**
     * @memberOf SelectionModel.prototype
     * @returns {Array}
     */
    getFlattenedYs: function() {
        var result = [];
        var set = {};
        this.selections.forEach(function(selection) {
            var top = selection.origin.y;
            var size = selection.extent.y + 1;
            for (var r = 0; r < size; r++) {
                var ti = r + top;
                if (!set[ti]) {
                    result.push(ti);
                    set[ti] = true;
                }
            }
        });
        result.sort(function(x, y) {
            return x - y;
        });
        return result;
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param offset
     */
    selectRowsFromCells: function(offset, dontClearRowSelections) {
        offset = offset || 0;
        dontClearRowSelections = dontClearRowSelections === true;

        var sm = this.rowSelectionModel;

        if (!dontClearRowSelections) {
            this.setAllRowsSelected(false);
            sm.clear();
        }

        this.selections.forEach(function(selection) {
            var top = selection.origin.y,
                extent = selection.extent.y;
            top += offset;
            sm.select(top, top + extent);
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param offset
     */
    selectColumnsFromCells: function(offset) {
        offset = offset || 0;

        var sm = this.columnSelectionModel;
        sm.clear();

        this.selections.forEach(function(selection) {
            var left = selection.origin.x,
                extent = selection.extent.x;
            left += offset;
            sm.select(left, left + extent);
        });
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param x
     * @param y
     * @returns {*}
     */
    isInCurrentSelectionRectangle: function(x, y) {
        var last = this.selections[this.selections.length - 1];
        return last && this.rectangleContains(last, x, y);
    },

    /**
     * @memberOf SelectionModel.prototype
     * @param rect
     * @param x
     * @param y
     * @returns {boolean}
     */
    rectangleContains: function(rect, x, y) { //TODO: explore why this works and contains on rectanglular does not
        var minX = rect.origin.x;
        var minY = rect.origin.y;
        var maxX = minX + rect.extent.x;
        var maxY = minY + rect.extent.y;

        if (rect.extent.x < 0) {
            minX = maxX;
            maxX = rect.origin.x;
        }

        if (rect.extent.y < 0) {
            minY = maxY;
            maxY = rect.origin.y;
        }

        var result =
            x >= minX &&
            y >= minY &&
            x <= maxX &&
            y <= maxY;

        return result;
    }
};

module.exports = SelectionModel;

},{"sparse-boolean-array":46}],116:[function(require,module,exports){
'use strict';

var rectangular = require('rectangular');

// Variation of rectangular.Point but with writable x and y:
function WritablePoint(x, y) {
    this.x = x;
    this.y = y;
}

WritablePoint.prototype = rectangular.Point.prototype;

// The nullSubgrid is for CellEvents representing clicks below last row.
// var nullSubgrid = {};

var prototype = Object.defineProperties({}, {
    value: {
        get: function() { return this.visibleRow.subgrid.getValue(this.dataCell.x, this.dataCell.y); },
        set: function(value) { this.visibleRow.subgrid.setValue(this.dataCell.x, this.dataCell.y, value); }
    },

    formattedValue: {
        get: function() { return this.grid.formatValue(this.getCellProperty('format'), this.value); }
    },

    bounds: {
        get: function() {
            return this._bounds || (this._bounds = {
                x: this.visibleColumn.left,
                y: this.visibleRow.top,
                width: this.visibleColumn.width,
                height: this.visibleRow.height
            });
        }
    },

    getCellProperty: {
        value: function(propName) { return this.column.getCellProperty(this.dataCell.y, propName, this.visibleRow.subgrid); }
    },

    // "Visible" means scrolled into view.
    isRowVisible:    { get: function() { return !!this.visibleRow; } },
    isColumnVisible: { get: function() { return !!this.visibleColumn; } },
    isCellVisible:   { get: function() { return this.isRowVisible && this.isColumnVisible; } },

    isGridRow:    { get: function() { return !this.visibleRow.subgrid.type; } },
    isGridColumn: { get: function() { return this.gridCell.x >= 0; } },
    isGridCell:   { get: function() { return this.isGridRow && this.isGridColumn; } },

    isRowSelected:    { get: function() { return this.isGridRow && this.selectionModel.isRowSelected(this.dataCell.y); } },
    isColumnSelected: { get: function() { return this.isGridColumn && this.selectionModel.isColumnSelected(this.gridCell.x); } },
    isCellSelected:   { get: function() { return this.selectionModel.isCellSelected(this.gridCell.x, this.dataCell.y); } },

    isRowHovered:    { get: function() { return this.isGridRow && this.grid.hoverCell && this.grid.hoverCell.y === this.gridCell.y; } },
    isColumnHovered: { get: function() { return this.isGridColumn && this.grid.hoverCell && this.grid.hoverCell.x === this.gridCell.x; } },
    isCellHovered:   { get: function() { return this.isRowHovered && this.isColumnHovered; } },

    isRowFixed:    { get: function() { return this.isGridRow && this.dataCell.y < this.grid.properties.fixedRowCount; } },
    isColumnFixed: { get: function() { return this.isGridColumn && this.gridCell.x < this.grid.properties.fixedColumnCount; } },
    isCellFixed:   { get: function() { return this.isRowFixed && this.isColumnFixed; } },

    isHandleColumn: { get: function() { return !this.isGridColumn; } },
    isHandleCell:   { get: function() { return this.isHandleColumn && this.isGridRow; } },

    isHierarchyColumn: { get: function() { return this.gridCell.x === 0 && this.grid.properties.showTreeColumn && this.dataModel.isDrillDown(this.dataCell.x); } },

    isHeaderRow:    { get: function() { return this.visibleRow.subgrid.type === 'header'; } },
    isHeaderHandle: { get: function() { return this.isHeaderRow && this.isHandleColumn; } },
    isHeaderCell:   { get: function() { return this.isHeaderRow && this.isGridColumn; } },

    isFilterRow:    { get: function() { return this.visibleRow.subgrid.type === 'filter'; } },
    isFilterHandle: { get: function() { return this.isFilterRow && this.isHandleColumn; } },
    isFilterCell:   { get: function() { return this.isFilterRow && this.isGridColumn; } },

    isSummaryRow:    { get: function() { return this.visibleRow.subgrid.type === 'summary'; } },
    isSummaryHandle: { get: function() { return this.isSummaryRow && this.isHandleColumn; } },
    isSummaryCell:   { get: function() { return this.isSummaryRow && this.isGridColumn; } },

    isTopTotalsRow:    { get: function() { return this.visibleRow.subgrid === this.behavior.subgrids.topTotals; } },
    isTopTotalsHandle: { get: function() { return this.isTopTotalsRow && this.isHandleColumn; } },
    isTopTotalsCell:   { get: function() { return this.isTopTotalsRow && this.isGridColumn; } },

    isBottomTotalsRow:    { get: function() { return this.visibleRow.subgrid === this.behavior.subgrids.bottomTotals; } },
    isBottomTotalsHandle: { get: function() { return this.isBottomTotalsRow && this.isHandleColumn; } },
    isBottomTotalsCell:   { get: function() { return this.isBottomTotalsRow && this.isGridColumn; } }
});

/**
 * @classdesc `CellEvent` is a very low-level object that needs to be super-efficient. JavaScript objects are well known to be light weight in general, but at this level we need to be careful.
 *
 * These objects were originally only being created on mouse events. This was no big deal as mouse events are few and far between. However, as of v1.2.0, the renderer now also creates one for each visible cell on each and every grid paint.
 *
 * For this reason, to maintain performance, each grid gets a custom definition of `CellEvent`, created by this class factory, with the following optimizations:
 *
 * * Use of `extend-me` is avoided because its `initialize` chain is a bit too heavy here.
 * * Custom versions of `CellEvent` for each grid lightens the load on the constructor.
 *
 * @summary Create a custom `CellEvent` class.
 *
 * @desc Create a custom definition of `CellEvent` for each grid instance, setting the `grid`, `behavior`, and `dataModel` properties on the prototype. As this happens once per grid instantiation, it avoids having to perform this set up work on every `CellEvent` instantiation.
 *
 * @param {HyperGrid} grid
 *
 * @returns {CellEvent}
 */
function CellEvent(grid) {

    /**
     * @summary Create a new CellEvent object.
     * @desc All own enumerable properties are mixed into cell editor:
     * * Includes `this.column` defined by constructor (as enumerable).
     * * Excludes `this.gridCell`, `this.dataCell`, `this.visibleRow.subgrid` defined by constructor (as non-enumerable).
     * * Any additional (enumerable) members mixed in by application's `getCellEditorAt` override.
     * @param {number} x - grid cell coordinate (adjusted for horizontal scrolling after fixed columns)
     * @param {number} y - grid cell coordinate, adjusted (adjusted for vertical scrolling if data subgrid)
     * @constructor
     */
    function CellEvent(x, y) {
        var visibleRow = grid.renderer.visibleRows[y];

        /**
         * @summary Reference to column's {@link Column} object.
         * @desc Notes:
         * * Defined as enumerable so that `CellEditor` constructor mixes into itself.
         * * Defined as writable so it can be overwritten in `renderer.paintCells`.
         * @name column
         * @type {Column}
         * @memberOf CellEvent#
         */
        this.column = grid.behavior.getActiveColumn(x);


        // remaining instance vars are non-enumerable so `CellEditor` constructor won't mix them in (for mustache use).
        Object.defineProperties(this, {
            /**
             * @name visibleColumn
             * @type {visibleColumnDescriptor}
             * @memberOf CellEvent#
             */
            visibleColumn: {
                writable: true, // Allow to be overwritten in `renderer.paintCells` and `.computeCellsBounds`.
                value: this.grid.renderer.visibleColumns.find(function(vc) { return vc.columnIndex === x; })
            },

            /**
             * @name visibleRow
             * @type {visibleRowDescriptor}
             * @memberOf CellEvent#
             */
            visibleRow: {
                writable: true, // Allow to be overwritten in `renderer.paintCells` and `.computeCellsBounds`.
                value: visibleRow
            },

            /**
             * @name gridCell
             * @type {WritablePoint}
             * @memberOf CellEvent#
             */
            gridCell: {
                value: new WritablePoint(x, y)
            },

            /**
             * @name dataCell
             * @type {WritablePoint}
             * @memberOf CellEvent#
             */
            dataCell: {
                value: new WritablePoint(this.column && this.column.index, visibleRow.rowIndex)
            }
        });
    }

    CellEvent.prototype = Object.create(prototype);

    Object.defineProperties(CellEvent.prototype, {
        constructor: { value: CellEvent },
        grid: { value: grid },
        renderer: { value: grid.renderer },
        selectionModel: { value: grid.selectionModel },
        behavior: { value: grid.behavior },
        dataModel: { value: grid.behavior.dataModel }
    });

    return CellEvent;
}

module.exports = CellEvent;

},{"rectangular":45}],117:[function(require,module,exports){
'use strict';

// console.warn polyfill as needed
// used for deprecation warnings
if (!console.warn) {
    console.warn = function() {
        console.log.apply(console, ['WARNING:'].concat(Array.prototype.slice.call(arguments)));
    };
}

var warned = {};

var regexIsMethod = /\)$/;

/**
 * User is warned and new property is returned or new method is called and the result is returned.
 * @param {string} methodName - Deprecated method name with parentheses (required) containing argument list (optional; see `args` below).
 * @param {string} dotProps - Dot-separated new property name to invoke or method name to call. Method names are indicated by including parentheses with optional argument list. The arguments in each list are drawn from the arguments presented in the `methodName` parameter.
 * @param {string} since - Version in which the name was deprecated.
 * @param {Arguments|Array} [args] - The actual arguments in the order listed in `methodName`. Only needed when arguments need to be forwarded.
 * @param {string} [notes] - Notes to add to message.
 * @returns {*} Return value of new property or method call.
 */
var deprecated = function(methodName, dotProps, since, args, notes) {
    if (!regexIsMethod.test(methodName)) {
        throw 'Expected method name to have parentheses.';
    }

    if (typeof args === 'string') {
        // `args` omitted
        notes = args;
        args = undefined;
    }

    var chain = dotProps.split('.'),
        formalArgList = argList(methodName),
        result = this;

    if (!(methodName in warned)) {
        warned[methodName] = deprecated.warnings;
    }
    if (warned[methodName]) {
        var memberType = regexIsMethod.test(dotProps) ? 'method' : 'property';
        var warning = 'The .' + methodName + ' method is deprecated as of v' + since +
            ' in favor of the .' + chain.join('.') + ' ' + memberType + '.' +
            ' (Will be removed in a future release.)';

        if (notes) {
            warning += ' ' + notes;
        }

        console.warn(warning);

        --warned[methodName];
    }

    function mapToFormalArg(argName) {
        var index = formalArgList.indexOf(argName);
        if (index === -1) {
            throw 'Actual arg "' + argName + '" not found in formal arg list ' + formalArgList;
        }
        return args[index];
    }

    for (var i = 0, last = chain.length - 1; i <= last; ++i) {
        var link = chain[i],
            name = link.match(/\w+/)[0],
            isMethod = regexIsMethod.test(link),
            actualArgList = isMethod ? argList(link) : undefined,
            actualArgs = [];

        if (actualArgList) {
            actualArgs = actualArgList.map(mapToFormalArg);
            result = result[name].apply(result, actualArgs);
        } else if (isMethod) {
            result = result[name]();
        } else {
            result = result[name];
        }
    }

    return result;
};

deprecated.warnings = 1; // 3 or 5 would get more attention

function argList(s) {
    return s.match(/^\w+\((.*)\)$/)[1].match(/(\w+)/g);
}

module.exports = deprecated;

},{}],118:[function(require,module,exports){
'use strict';

function HypergridError(message) {
    this.message = message;
}

// extend from `Error`
HypergridError.prototype = Object.create(Error.prototype);

// override error name displayed in console
HypergridError.prototype.name = 'HypergridError';

module.exports = HypergridError;

},{}],119:[function(require,module,exports){
'use strict';


/* IMPORTANT NOTE:
 * If any of the modules listed below is removed from Hypergrid, the polyfill(s) they define must be added here!!!
 *
 * 1. object-iterators defines Array.prototype.find
 */


/* eslint-disable no-extend-native */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign#Polyfill
Math.sign = Math.sign || function(x) {
    x = +x; // convert to a number
    if (x === 0 || isNaN(x)) {
        return x;
    }
    return x > 0 ? 1 : -1;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function(predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return i;
            }
        }
        return -1;
    };
}

},{}],120:[function(require,module,exports){
/* eslint-env browser */

'use strict';

var automat = require('automat');

var css = require('../../css');

// note the position of the  first "natural" stylesheet. We will insert our stylesheets before this node.
var head = document.querySelector('head');
var refNode = Array.prototype.slice.call(head.children).find(function(child) {
    return child.tagName === 'STYLE' ||
        child.tagName === 'LINK' &&
        child.getAttribute('rel') === 'stylesheet' &&
        child.getAttribute('type') === 'text/css';
});

exports.prefix = 'injected-stylesheet-';

exports.inject = function(id, replacements) {
    var stylesheet = document.querySelector('#' + this.prefix + id);

    if (!stylesheet) {
        stylesheet = css[id];
        stylesheet = '<style>\n' + stylesheet + '\n</style>\n';
        var args = [stylesheet, head, refNode].concat(Array.prototype.slice.call(arguments, 1));
        stylesheet = automat.append.apply(null, args)[0];
        stylesheet.id = this.prefix + id;
    }

    return stylesheet;
};

},{"../../css":1,"automat":5}]},{},[91])