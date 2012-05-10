/**
 * Created 18-Jan-2010 by Donovan Chandler, http://donovanchandler.com
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

		var funcs =	'Case Choose Evaluate EvaluationError ExecuteSQL GetAsBoolean GetField GetFieldName GetLayoutObjectAttribute GetNthRecord If IsEmpty IsValid IsValidExpression Let Lookup LookupNext Self Location LocationValues Abs Ceiling Combination Div Exp Factorial Floor Int Lg Ln Log Mod Random Round SetPrecision Sign Sqrt Truncate Extend GetRepetition Last GetSummary Char Code Exact Filter FilterValues GetAsCSS GetAsDate GetAsNumber GetAsSVG GetAsText GetAsTime GetAsTimestamp GetAsURLEncoded GetValue Hiragana KanaHankaku KanaZenkaku KanjiNumeral Katakana Left LeftValues LeftWords Length Lower Middle MiddleValues MiddleWords NumToJText PatternCount Position Proper Quote Replace Right RightValues RightWords RomanHankaku RomanZenkaku SerialIncrement Substitute Trim TrimAll Upper ValueCount WordCount RGB TextColor TextColorRemove TextFont TextFontRemove TextFormatRemove TextSize TextSizeRemove TextStyleAdd TextStyleRemove Hour Minute Seconds Time Timestamp Acos Asin Atan Cos Degrees Pi Radians Sin Tan';
		var keywords = 'True False and or not';
		var methods   = 'AccountExtendedPrivileges AccountName AccountPrivilegeSetName ActiveFieldContents ActiveFieldName ActiveFieldTableName ActiveLayoutObjectName ActiveModifierKeys ActivePortalRowNumber ActiveRepetitionNumber ActiveSelectionSize ActiveSelectionStart AllowAbortState AllowFormattingBarState ApplicationLanguage ApplicationVersion CalculationRepetitionNumber ConnectionState CurrentDate CurrentExtendedPrivileges CurrentHostTimestamp CurrentPrivilegeSetName CurrentTime CurrentTimestamp CustomMenuSetName DesktopPath DocumentsPath DocumentsPathListing ErrorCaptureState FileMakerPath FileName FilePath FileSize FoundCount HighContrastColor HighContrastState HostApplicationVersion HostIPAddress HostName InstalledFMPlugins LastError LastMessageChoice LastODBCError LayoutAccess LayoutCount LayoutName LayoutNumber LayoutTableName LayoutViewState MultiUserState NetworkProtocol PageNumber PersistentID PreferencesPath PrinterName QuickFindText RecordAccess RecordID RecordModificationCount RecordNumber RecordOpenCount RecordOpenState RequestCount RequestOmitState ScreenDepth ScreenHeight ScreenWidth ScriptName ScriptParameter ScriptResult SortState StatusAreaState SystemDrive SystemIPAddress SystemLanguage SystemNICAddress SystemPlatform SystemVersion TemporaryPath TextRulerVisible TotalRecordCount TriggerCurrentTabPanel TriggerKeystroke TriggerModifierKeys TriggerTargetTabPanel UserCount UserName UseSystemFormatsState UUID WindowContentHeight WindowContentWidth WindowDesktopHeight WindowDesktopWidth WindowHeight WindowLeft WindowMode WindowName WindowStyle WindowTop WindowVisible WindowWidth WindowZoomLevel' +
	    + 'objectType hasFocus containsFocus isFrontTabPanel bounds left right top bottom width height rotation startPoint\s?,\s?endPoint source content enclosingObject containedObjects' ;

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,				css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,					css: 'comments' },		// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,					css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,					css: 'string' },		// strings
			{ regex: /\$\w+/g,														css: 'variable' },		// local variables
			{ regex: /\$\$\w+/g,													css: 'variable' },		// global variables
			{ regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),	css: 'value' },			// numbers
			{ regex: new RegExp(this.getKeywords(funcs), 'gm'),						css: 'functions' },		// FMP functions
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),					css: 'keyword' },		// FMP keywords
			//{ regex: /\w+\s*=/m,													css: 'keyword' },		// FMP Let vars
			{ regex: new RegExp(this.getKeywords(methods), 'gmi'),					css: 'methods' }		// FMP fn arguments
			];

	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['filemaker', 'fmp'];

	SyntaxHighlighter.brushes.FileMaker = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();