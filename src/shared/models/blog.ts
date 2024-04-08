export class Blog{
    constructor(        
        public title: string,
        public text: string,
        public userId: number,
        public blogRating: number,
        public blogCategoryId: number,
        public image: string,
        public createBy: string,
        ){
    }
}