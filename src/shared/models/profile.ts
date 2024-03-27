export class Profile{
    constructor(
        public firstName : string, 
        public lastName : string,
        public userName: string,
        public image: string, 
        public title : string = ''){
    }
}