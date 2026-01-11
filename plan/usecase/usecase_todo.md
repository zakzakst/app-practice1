# ユースケース図: TODO管理

``` mermaid
graph LR
    User@{img: "https://api.iconify.design/material-symbols/person.svg",label: "ログイン済ユーザー",w: 60,h: 60,constraint: "on"}

    subgraph "TODO管理機能"
        ViewList[TODO一覧を閲覧する]
        Search[TODOを検索・絞り込む]
        ViewDetail[TODO詳細を閲覧する]
        Update[TODOを更新する]
        Preview[マークダウン<br/>プレビューを確認する]
    end

    User --> ViewList
    User --> Search
    User --> ViewDetail
    User -->|ユーザーとTODOは<br/>紐づいている| Update
    User --> Preview
```