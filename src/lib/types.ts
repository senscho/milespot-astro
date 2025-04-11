interface ImageFormat {
  name: string;
  width: number;
  height: number;
  url: string;
}

interface ThumbnailImage {
  id: number;
  name: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
  };
  url: string;
}

export interface Post {
  id: number;
  documentId: string;
  title: string;
  content: string;
  slug: string | null;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  thumbnail: ThumbnailImage | null;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number
      pageCount: number;
      total: number;
    };
  };
} 