import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create HTTP server
  const httpServer = createServer(app);

  // API routes go here (if needed for the portfolio)
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  return httpServer;
}
