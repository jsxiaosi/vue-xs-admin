import { compress } from 'image-conversion';

// 文件流转化为base64
export function fileToBase64(file: File) {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(this.result);
    };
  });
}
// 文件流转化为二进制字符串
export function fileToBinaryString(file: File): Promise<string> {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function () {
      resolve(this.result as string);
    };
  });
}

// 文件流转化为二进制数组
export function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  return new Promise(function (resolve) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function () {
      resolve(this.result as ArrayBuffer);
    };
  });
}

// base64转化为blob流
export function base64ToBlob(base64Data: string): Blob {
  let byteString;
  if (base64Data.split(',')[0].indexOf('base64') >= 0) byteString = atob(base64Data.split(',')[1]);
  //base64 解码
  else {
    byteString = unescape(base64Data.split(',')[1]);
  }
  const mimeString = base64Data.split(',')[0].split(':')[1].split(';')[0]; //mime类型 -- image/png
  // 方式一
  // let arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
  // let ia = new Uint8Array(arrayBuffer);//创建视图
  // 方式二
  const ia = new Uint8Array(byteString.length); //创建视图
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ia], {
    type: mimeString,
  });
  return blob;
}

// base64转化为文件流
export function base64toFile(dataurl: string, filename: String = 'file') {
  const arr = dataurl.split(',');
  const mimeArr = arr[0].match(/:(.*?);/) as RegExpMatchArray;
  const mime = mimeArr[1] as string;
  const suffix = mime.split('/')[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime,
  });
}

// 获取复制图片方法
export function pasteImage() {
  document.addEventListener('paste', async (event) => {
    console.log(event);
    const items = event.clipboardData && event.clipboardData.items;
    let file: File = {} as File;
    if (items && items.length) {
      // 检索剪切板items
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          file = items[i].getAsFile() as File;
          console.log(file);
          console.log(await fileToBase64(file));
        }
      }
    }
  });
}

//压缩图片
export function beforeAvatarUpload(file: File): Promise<Blob> {
  return new Promise((resolve) => {
    // 压缩到100KB,这里的100就是要压缩的大小,可自定义
    compress(file, 0.4).then((res) => {
      console.log(res);
      resolve(res);
    });
  });
}
