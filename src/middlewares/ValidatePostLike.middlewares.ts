import { Request, Response, NextFunction } from 'express';
import { prisma } from '../server'; 

export const checkLikePermission = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const postId = Number(req.params.postId); 
  const userId = Number(res.locals.userId); 
  
    const post = await prisma.posts.findUnique({
      where: { id: postId },
      select: { user_id: true }, 
    });

    if (!post || post.user_id === userId) {
      return res.status(403).json({ message: 'You cannot like your own post' });
    }
  
    return next();
  
};






