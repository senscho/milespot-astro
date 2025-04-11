export interface PostAttributes {
  documentId: string;
  title: string;
  content: string;
  slug: string | null;
  publishedDate: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
}

export interface Post {
  id: number;
  attributes: PostAttributes;
}

export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
} 