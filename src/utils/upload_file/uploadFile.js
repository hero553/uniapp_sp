import url from '@/utils/api/baseUrl'
class UploadFile {
  uploadFilesLists(data) {
    return new Promise((resovle, reject) => {
      function uploadFileList(data) {
        var i = data.i ? data.i : 0
        var success = data.success ? data.success : 0
        var fail = data.fail ? data.fail : 0
        uni.uploadFile({
          url: url + data.url,
          filePath: data.path[i],
          name: 'file',
          header: {
            'Authorization': uni.getStorageSync('Authorization')
          },
          formData: data.formData,
          success: (resp) => {
            success++
          },
          fail: (res) => {
            fail++
          },
          complete: () => {
            i++
            if (i === data.path.length) { // i == 总长度递归完成
              console.log('y' + success + 'e' + fail)
              resovle(true)
            } else {
              data.i = i
              data.success = success
              data.fail = fail
              uploadFileList(data)
            }
          }
        })
      }
      uploadFileList(data)
    })
  }
}

export default new UploadFile()
