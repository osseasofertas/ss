import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // APK download route
  app.get("/app/GovProvaDeVida.apk", (_req, res) => {
    const apkPath = path.resolve(process.cwd(), "app", "GovProvaDeVida.apk");
    return res.sendFile(apkPath);
  });

  return httpServer;
}
