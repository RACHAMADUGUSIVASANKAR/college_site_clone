import { z } from 'zod';
import { insertUserSchema, insertNoticeSchema, insertAchievementSchema, insertPlacementSchema } from './schema';

export const api = {
  auth: {
    login: {
      method: 'POST' as const,
      path: '/api/auth/login',
      input: z.object({
        username: z.string(),
        password: z.string(),
        role: z.enum(["student", "faculty", "admin"]),
      }),
      responses: {
        200: z.object({
          id: z.number(),
          username: z.string(),
          role: z.string(),
          name: z.string(),
        }),
        401: z.object({ message: z.string() }),
      },
    },
    logout: {
      method: 'POST' as const,
      path: '/api/auth/logout',
      responses: {
        200: z.object({ message: z.string() }),
      },
    },
    me: {
      method: 'GET' as const,
      path: '/api/auth/me',
      responses: {
        200: z.object({
          id: z.number(),
          username: z.string(),
          role: z.string(),
          name: z.string(),
        }).nullable(),
      },
    }
  },
  notices: {
    list: {
      method: 'GET' as const,
      path: '/api/notices',
      responses: {
        200: z.array(z.any()), // Using any for brevity in prototype, normally full schema
      },
    },
  },
  achievements: {
    list: {
      method: 'GET' as const,
      path: '/api/achievements',
      responses: {
        200: z.array(z.any()),
      },
    },
  },
  placements: {
    list: {
      method: 'GET' as const,
      path: '/api/placements',
      responses: {
        200: z.array(z.any()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
