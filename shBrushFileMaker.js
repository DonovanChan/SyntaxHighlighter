/**
 * Created 18-Jan-2010 by Donovan Chandler, http://donovanchandler.com
 * Please notify me of bugs or enhancements!
 *
 * Contact:
 *   http://github.com/DonovanChan/SyntaxHighlighter
 *   or donovan@confluentstrategy.com
 * 
 * For use with:
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 */
SyntaxHighlighter.brushes.filemaker = function()
{

	var funcs =	'Average Count List Max Min StDev StDevP Sum Variance VarianceP Date Day DayName DayNameJ DayOfWeek ' +
	'DayOfYear Month MonthName MonthNameJ WeekOfYear WeekOfYearFiscal Year YearName DatabaseNames FieldBounds ' +
	'FieldComment FieldIDs FieldNames FieldRepetitions FieldStyle FieldType GetNextSerialValue LayoutIDs ' +
	'LayoutNames LayoutObjectNames RelationInfo ScriptIDs ScriptNames TableIDs TableNames ValueListIDs ' +
	'ValueListItems ValueListNames WindowNames External FV NPV PMT PV Case Choose Evaluate EvaluationError ' +
	'GetAsBoolean GetField GetFieldName GetLayoutObjectAttribute GetNthRecord If IsEmpty IsValid ' +
	'IsValidExpression Let Lookup LookupNext Self Abs Ceiling Combination Div Exp Factorial Floor Int Lg Ln ' +
	'Log Mod Random Round SetPrecision Sign Sqrt Truncate Extend GetRepetition Last GetSummary Char Code Exact ' +
	'Filter FilterValues GetAsCSS GetAsDate GetAsNumber GetAsSVG GetAsText GetAsTime GetAsTimestamp GetAsURLEncoded ' +
	'GetValue Hiragana KanaHankaku KanaZenkaku KanjiNumeral Katakana Left LeftValues LeftWords Length Lower Middle ' +
	'MiddleValues MiddleWords NumToJText PatternCount Position Proper Quote Replace Right RightValues RightWords ' +
	'RomanHankaku RomanZenkaku SerialIncrement Substitute Trim TrimAll Upper ValueCount WordCount RGB TextColor ' +
	'TextColorRemove TextFont TextFontRemove TextFormatRemove TextSize TextSizeRemove TextStyleAdd TextStyleRemove ' +
	'Hour Minute Seconds Time Timestamp Acos Asin Atan Cos Degrees Pi Radians Sin Tan Get';
	var keywords = 'True False and or not';
	var methods   = 'AccountName ActiveFieldContents ActiveFieldName ActiveFieldTableName ActiveLayoutObjectName ActiveModifierKeys ' +
	'ActiveRepetitionNumber ActiveSelectionSize ActiveSelectionStart AllowAbortState AllowToolbarState ' +
	'ApplicationLanguage ApplicationVersion CalculationRepetitionNumber CurrentDate CurrentHostTimestamp CurrentTime ' +
	'CurrentTimestamp CustomMenuSetName DesktopPath DocumentsPath DocumentsPathListing ErrorCaptureState ' +
	'ExtendedPrivileges FileMakerPath FileName FilePath FileSize FoundCount HighContrastColor HighContrastState ' +
	'HostApplicationVersion HostIPAddress HostName LastError LastMessageChoice LastODBCError LayoutAccess LayoutCount ' +
	'LayoutName LayoutNumber LayoutTableName LayoutViewState MultiUserState NetworkProtocol PageNumber PortalRowNumber ' +
	'PreferencesPath PrinterName PrivilegeSetName RecordAccess RecordID RecordModificationCount RecordNumber ' +
	'RecordOpenCount RecordOpenState RequestCount RequestOmitState ScreenDepth ScreenHeight ScreenWidth ScriptName ' +
	'ScriptParameter ScriptResult SortState StatusAreaState SystemDrive SystemIPAddress SystemLanguage SystemNICAddress ' +
	'SystemPlatform SystemVersion TemporaryPath TextRulerVisible TotalRecordCount TriggerKeystroke TriggerModifierKeys ' +
	'UserCount UserName UseSystemFormatsState WindowContentHeight WindowContentWidth WindowDesktopHeight WindowDesktopWidth ' +
	'WindowHeight WindowLeft WindowMode WindowName WindowTop WindowVisible WindowWidth WindowZoomLevel Roman Greek Cryllic ' +
	'CentralEurope ShiftJIS TraditionalChinese SimplifiedChinese OEM Symbol Other Plain Bold Italic Underline Condense ' +
	'Extend Strikethrough SmallCaps Superscript Subscript Uppercase Lowercase Titlecase WordUnderline DoubleUnderline ' +
	'AllStyles objectType hasFocus containsFocus isFrontTabPanel bounds left right top bottom width height rotation ' +
	'startPoint endPoint source content enclosingObject containedObjects ';

	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,				css: 'comments' },		// one line comments
		{ regex: SyntaxHighlighter.regexLib.multiLineCComments,					css: 'comments' },		// multiline comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,					css: 'string' },		// strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,					css: 'string' },		// strings
		{ regex: /\$\w+/g,														css: 'variable' },		// local variables
		{ regex: /\$\$\w+/g,													css: 'variable' },		// global variables
		{ regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),	css: 'value' },			// numbers
		{ regex: new RegExp(this.getKeywords(funcs), 'gm'),						css: 'functions' },		// FMP functions
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),					css: 'keyword' },		// FMP keywords
		//{ regex: /\w+\s*=/m,													css: 'keyword' },		// FMP Let vars
		{ regex: new RegExp(this.getKeywords(methods), 'gm'),					css: 'methods' }		// FMP fn arguments
		];

}

SyntaxHighlighter.brushes.filemaker.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.filemaker.aliases	= ['filemaker', 'fmp'];
