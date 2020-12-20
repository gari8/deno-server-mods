// @ts-ignore
import { listenAndServe, ServerRequest, Response } from "https://deno.land/std@0.81.0/http/server.ts";

export class ServerMod {

    private _req: ServerRequest

    constructor(req?: ServerRequest) {
        this._req = req!;
    }

    GET = (url: string, f: (req?:ServerRequest) => Promise<void>) => {
        if (this._req.method === "GET" && this._req.url === url) {
            console.log("method: " + this._req.method)
            // @ts-ignore
            f(req!)
        }
    }

    POST = (url: string, f: (req?:ServerRequest) => Promise<void>) => {
        if (this._req.method === "POST" && this._req.url === url) {
            console.log("method: " + this._req.method)
            // @ts-ignore
            f(req!)
        }
    }

    PUT = (url: string, f: (req?:ServerRequest) => Promise<void>) => {
        if (this._req.method === "PUT" && this._req.url === url) {
            console.log("method: " + this._req.method)
            // @ts-ignore
            f(req!)
        }
    }

    DELETE = (url: string, f: (req?:ServerRequest) => Promise<void>) => {
        if (this._req.method === "DELETE" && this._req.url === url) {
            console.log("method: " + this._req.method)
            // @ts-ignore
            f(req!)
        }
    }
}