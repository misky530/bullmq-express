import axios from 'axios';

export class RequestUtil {
    public static async requestPost(apiUrl: string, params: any): Promise<'OK' | null> {
        // 使用 axios 发起 GET 请求
        return await axios.post(apiUrl, {params})
    }

    public static async requestGet(apiUrl: string, params: any): Promise<'OK' | null> {
        // 使用 axios 发起 GET 请求
        return await axios.get(apiUrl, {params})
    }
}

// interface MyResponseData {
//     // 定义响应数据的接口
//     // 根据实际情况修改接口定义
//     id: number;
//     name: string;
// }

// 定义 API 的 URL 和参数
// const apiUrl = 'https://api.example.com/endpoint';
// const params = {
//     param1: 'value1',
//     param2: 'value2'
// };

