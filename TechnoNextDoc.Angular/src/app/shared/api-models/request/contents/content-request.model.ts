import { Language, Status, VisitorFor, VisitorOrigin } from "../../../enums";

export interface GetContentRequest {
    language: Language,
    visitorOrigin: VisitorOrigin,
    visitorFor: VisitorFor
}

export interface ContentRequest {
    id?: number;
    categoryIds: number[];
    contentText: string;
    title: string;
    language: Language;
    orderPriority: number;
    route: string;
    status: Status;
}