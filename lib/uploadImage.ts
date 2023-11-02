import { ID, storage } from '@/appwrite';

const uploadImage = async (file: File) => {
    if (!file) return;
    
    const fileUploaded = await storage.createFile(
        "652954f292a37c3221b0",
        ID.unique(),
        file
    );

    return fileUploaded;
}

export default uploadImage