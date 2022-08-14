import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

export default function Editor({ code }: { code: string }) {
	return (
		<div style={{ width: '100%' }}>
			<AceEditor
				width='100%'
				height='750px'
				fontSize={14}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				mode='typescript'
				theme='monokai'
				name='editor'
				editorProps={{ $blockScrolling: true }}
				value={code}
				setOptions={{
					enableBasicAutocompletion: true,
					enableLiveAutocompletion: false,
					enableSnippets: false,
					showLineNumbers: true,
					tabSize: 2,
				}}
			/>
		</div>
	);
}
