import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  Databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, slug, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollection,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
//   }

//   async deletePost(slug) {
//     try {
//       this.databases.deleteDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollection,
//         slug
//       );
//       return true;
//     } catch (error) {
//       console.log("Appwrite serive :: deletePost :: error", error);
//       return false;
//     }
//   }

//   async getPost(slug) {
//     try {
//       return await this.databases.getDocument(
//         conf.appwriteDatabaseId,
//         conf.appwriteCollection,
//         slug
//       );
//     } catch (error) {
//       console.log("Appwrite serive :: getPost :: error", error);
//       return false;
//     }
//   }
}

const serive = new Service();
export default serive;
