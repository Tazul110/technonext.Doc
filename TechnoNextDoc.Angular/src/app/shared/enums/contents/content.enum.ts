export enum VisitorOrigin{
    /// <summary>
    /// The visitor originated from a link.
    /// </summary>
    Link,

    /// <summary>
    /// The visitor originated from navigation.
    /// </summary>
    Navigation,

    /// <summary>
    /// The visitor originated from a side navigation.
    /// </summary>
    SideNavigation
}

export enum VisitorFor
{
    /// <summary>
    /// The visitor is interested in browsing categories.
    /// </summary>
    Category,

    /// <summary>
    /// The visitor is interested in viewing content.
    /// </summary>
    Content
}

export enum Status
{
    /// <summary>
    /// The content is in progress.
    /// </summary>
    OnProgress,

    /// <summary>
    /// The content has been submitted.
    /// </summary>
    Submited,

    /// <summary>
    /// The content has been published.
    /// </summary>
    Published,

    /// <summary>
    /// The content has been rejected.
    /// </summary>
    Rejected
}
export function getStatusText(status: Status): string {
    switch (status) {
        case Status.OnProgress:
            return 'OnProgress';
        case Status.Submited:
            return 'Submited';
        case Status.Published:
            return 'Published';
        case Status.Rejected:
            return 'Rejected';
        default:
            return '';
    }
}
