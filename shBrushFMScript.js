/**
 * Created 30-Mar-2012 by Donovan Chandler, http://donovanchandler.com
 * Please notify me of bugs or enhancements!
 *
 * Contact:
 *   http://github.com/DonovanChan/SyntaxHighlighter
 *   or donovan_c@beezwax.net
 * 
 * For use with:
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 */
 ;(function()
 {
 	// CommonJS
 	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

 	function Brush()
 	{

		var funcs =	'Add Account|Adjust Window|Allow Formatting Bar|Allow User Abort|Arrange All Windows|Beep|Change Password|Check Found Set|Check Record|Check Selection|Clear|Close File|Close Window|Comment|Commit Records/Requests|Constrain Found Set|Convert File|Copy|Copy All Records/Requests|Copy Record/Request|Correct Word|Cut|Delete Account|Delete All Records|Delete Portal Row|Delete Record/Request|Dial Phone|Duplicate Record/Request|Edit User Dictionary|Else|Else If|Enable Account|End If|End Loop|Enter Browse Mode|Enter Find Mode|Enter Preview Mode|Execute SQL|Exit Application|Exit Loop If|Exit Script|Export Field Contents|Export Records|Extend Found Set|Find Matching Records|Flush Cache to Disk|Freeze Window|Go to Field|Go to Layout|Go to Next Field|Go to Object|Go to Portal Row|Go to Previous Field|Go to Record/Request/Page|Go to Related Record|Halt Script|If|Import Records|Insert Audio/Video|Insert Calculated Result|Insert Current Date|Insert Current Time|Insert Current User Name|Insert File|Insert From Index|Insert From Last Visited|Insert From URL|Insert PDF|Insert Picture|Insert QuickTime|Insert Text|Install Menu Set|Install OnTimer Script|Install Plug-In File|Loop|Modify Last Find|Move/Resize Window|New File|New Record/Request|New Window|Omit Multiple Records|Omit Record|Open Edit Saved Finds|Open File|Open File Options|Open Find/Replace|Open Help|Open Manage Containers|Open Manage Data Sources|Open Manage Database|Open Manage Layouts|Open Manage Scripts|Open Manage Value Lists|Open Preferences|Open Record/Request|Open Remote|Open Sharing|Open URL|Paste|Pause/Resume Script|Perform AppleScript (Mac OS)|Perform Find|Perform Find/Replace|Perform Quick Find|Perform Script|Print|Print Setup|Recover File|Refresh Window|Re-Login|Relookup Field Contents|Replace Field Contents|Reset Account Password|Revert Record/Request|Save a Copy as|Save Records As Excel|Save Records As PDF|Save Records As Snapshot Link|Scroll Window|Select All|Select Dictionaries|Select Window|Send DDE Execute (Windows)|Send Event (Mac OS)|Send Event (Windows)|Send Mail|Set Error Capture|Set Field|Set Field By Name|Set Multi-User|Set Next Serial Value|Set Selection|Set Use System Formats|Set Variable|Set Web Viewer|Set Window Title|Set Zoom Level|Show All Records|Show Custom Dialog|Show Omitted Only|Show/Hide Text Ruler|Show/Hide Toolbars|Sort Records|Sort Records by Field|Speak (Mac OS)|Spelling Options|Undo/Redo|Unsort Records|View As';
		var keywords = 'Value:|Parameter:|Name:|Top:|Left:|No dialog';
		var methods   = '';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,				css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,					css: 'comments' },		// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,					css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,					css: 'string' },		// strings
			{ regex: /\$\w+/g,														css: 'variable' },		// local variables
			{ regex: /\$\$\w+/g,													css: 'variable' },		// global variables
			{ regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),	css: 'value' },			// numbers
			{ regex: new RegExp('\\b(?:' + funcs + ')\\b', 'gi'),					css: 'functions' },		// FMP functions
			{ regex: new RegExp('(?:' + keywords + ')', 'gi'),						css: 'keyword' },		// FMP keywords
			// { regex: new RegExp(this.getKeywords(methods), 'gm'),				css: 'methods' }		// Not currently used
			];

	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['fmscript'];

	SyntaxHighlighter.brushes.FMScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
