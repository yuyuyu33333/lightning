type RecordItem ={
   tags:string[]
   notes:string
   type:string
   amount:number //数据类型
   createAT?:Date   //  类  /构造函数
}

type Tag = {
   id: string,
   name: string
}

type TagListModel = {
   data: Tag[]
   fetch: () => Tag[]
   create: (name: string) => 'success' | 'duplicated'
   update: (id: string, name: string) => 'success' | 'duplicated' | 'not-found'
   remove: (id: string) => boolean
   save: () => void
}

interface Window{
   tagList: Tag[]
   findTag: (id:string) => Tag | undefined
   createTag: (name:string)=>void
   removeTag:(id:string) => boolean
   updateTag:TagListModel['update']
   recordList:RecordItem[]
   createRecord:(record:RecordItem) =>void
}