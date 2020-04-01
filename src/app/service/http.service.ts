import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

// Authorization →Bearer
export class HttpService {
  private baseUrl = "http://192.168.0.99:80";
  private REST_API = {
    auth: {
      base: this.baseUrl + "/api/auth",
      refresh: "/refresh",
      restore: "/restore",
      changePassword: "/changepassword"
    },
    support: {
      base: this.baseUrl + "/api/support",
      chat: "/chat",
      read: "/read"
    },
    login: {
      base: this.baseUrl + "/api/login",
      edit: "/edit"
    },
    tasks: {
      base: this.baseUrl + "/api/tasks",
      find: "/find",
      close: "/close",
      read: "/read"
    },
    conversations: this.baseUrl + "/api/conversations",
    subscriptions: {
      base: this.baseUrl + "/api/subscriptions",
      edit: "/edit"
    },
    message: this.baseUrl + "/api/message",
    register: this.baseUrl + "/api/register",
    profile: {
      base: this.baseUrl + "/api/profile"
    }
  };

  private GET_PATH = {
    type: "role=my",
    type_all: "role=all",
    position: "position",
    radius: "radius",
    conv_id: "conversation_id",
    task: "newTask",
    companion: "companion"
  };

  private httpOptions = {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  };

  constructor(private https: HttpClient) {}

  public sendData(id: number): Observable<void> {
    console.log("sendData", id);
    return this.https.get<void>(this.REST_API.tasks.base + id);
  }
}
