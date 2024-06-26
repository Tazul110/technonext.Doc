export interface CategoryHierarchyResponse {
    name: string;
    route: string;
    id: number;
    subCategories?: CategoryHierarchyResponse[];
}