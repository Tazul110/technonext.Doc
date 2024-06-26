import { Language, Status } from "../../../enums";

export interface ContentResponse{
    id?: number,
    categoryId: number,
    authorId?: number,
    contentText: string,
    route: string,
    title: string,
    updatedOn: Date,
    orderPriority: number
}

export interface ContentDetails {
    title: string,
    route: string,
    isSelected?: boolean
}

export interface CategoryHierarchy{
    id: number,
    expanded: boolean,
    name: string,
    route: string,
    contentRoutes: ContentDetails[],
    subCategories: CategoryHierarchy[]
}

export interface GetContentResponse{
    content?: ContentResponse | null,
    hierarchy?: CategoryHierarchy | null
}
export interface MyPostsResponse {
    contentId: number;
    title: string;
    translation: string;
    categoryNames: string[];
    status: Status;
    isPublished: boolean;
    language: Language;
    updatedOn: Date
}
