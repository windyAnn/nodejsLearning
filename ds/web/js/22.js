
var input4 = document.getElementById('file4');
var bar = document.getElementById('progress-bar');
var progress = document.getElementById('progress');
function startHandler(e) {
	bar.style.display = 'block';
}
function progressHandler(e) {
	var percentLoaded = Math.round((e.loaded / e.total) * 100);
	if (percentLoaded < 100) {
		progress.style.width = percentLoaded + '%';
		progress.textContent = percentLoaded + '%';
	}
}
function loadHandler(e) {
	progress.textContent = '100%';
	progress.style.width = '100%';
}
function fileSelect4(e) {
	var file = this.files[0];
	if(!file) {
		alert('请选择文件！');
		return false;
	}
	if(file.size > 500 * 1024 * 1024) {
		alert('文件太大，请选择500M以下文件，防止浏览器崩溃！');
		return false;
	}
	progress.style.width = '0%';
	progress.textContent = '0%';
	var reader = new FileReader();
	reader.onloadstart = startHandler;
	reader.onprogress = progressHandler;
	reader.onload = loadHandler;
	reader.readAsBinaryString(this.files[0]);
}
input4.onchange = fileSelect4;
		