import { User } from './user';

export class Product {
    

    constructor(
      public name: string='',
      public id: number=0,
      public userName: string='',
      public description: string='',
      public price: string='',
      public imgUrl: string='',
      public createTime: string='',
      

      // dalsie parametre na pomoc so sortovanim
    //   public category?:string,
    //   public tags?:string,
      

    ){}
  }