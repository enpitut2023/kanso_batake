type paperInterface = {
    id: string;
    title: string;
    tldr: string;
}

type reviewInterface = {
    id: string;
    contents: string;
    paperId: string;
}

export const paperData: paperInterface[] = [
    {
        id: "1",
        title: "Python",
        tldr: "Programming langauge"
    },
    {
        id: "2",
        title: "情報工学先生",
        tldr: "論文検索システム"
    }
]

export const reviewData: reviewInterface[] = [
    {
        id: "1",
        contents: "さいこう",
        paperId: "1"
    },
    {
        id: "2",
        contents: "いいね",
        paperId: "1"
    }
]