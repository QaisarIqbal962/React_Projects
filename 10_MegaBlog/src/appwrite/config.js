import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  Client = new Client();
  Databases;
  bucket;
  constructor(){
     this.client.setEndPoint(conf.endpoint).setProject(conf.projectId);
        this.account = new Account(this.Client);
  }
}

const serive = new Service();
export default serive;
