import { Client, Storage, ID } from 'appwrite';

// Initialize Appwrite client
const client = new Client();

// Check if environment variables are defined
const endpoint = process.env.REACT_APP_APPWRITE_ENDPOINT;
const projectId = process.env.REACT_APP_APPWRITE_PROJECT_ID;
const bucketId = process.env.REACT_APP_APPWRITE_BUCKET_ID;

if (!endpoint || !projectId || !bucketId) {
    console.error('Appwrite configuration missing. Please check your .env file.');
}

console.log('Initializing Appwrite with:', {
    endpoint,
    projectId,
    bucketId
});

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67ba0bd3003248191781');

const storage = new Storage(client);

export const uploadImage = async (file) => {
    try {
        console.log('Starting image upload...', {
            bucketId: '67ba0be6001eb19f8751',
            fileSize: file.size,
            fileType: file.type
        });

        // Create a unique file ID
        const fileId = ID.unique();
        
        // Upload the file
        const result = await storage.createFile(
            '67ba0be6001eb19f8751',
            fileId,
            file
        );
        
        console.log('Upload successful:', result);

        // Get the file view URL
        const fileUrl = storage.getFileView(
            '67ba0be6001eb19f8751',
            fileId
        );

        console.log('File URL:', fileUrl);

        return {
            id: fileId,
            url: fileUrl.href
        };
    } catch (error) {
        console.error('Upload failed:', error);
        throw new Error(`Failed to upload image: ${error.message}`);
    }
};

export const deleteImage = async (fileId) => {
    try {
        await storage.deleteFile('67ba0be6001eb19f8751', fileId);
        return true;
    } catch (error) {
        console.error('Delete failed:', error);
        return false;
    }
};

export const getFilePreview = (fileId) => {
    return storage.getFilePreview('67ba0be6001eb19f8751', fileId).href;
};

export const getFileView = (fileId) => {
    return storage.getFileView('67ba0be6001eb19f8751', fileId).href;
};
