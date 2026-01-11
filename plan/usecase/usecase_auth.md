# ユースケース図: ユーザー認証

``` mermaid
graph LR
    User@{img: "https://api.iconify.design/material-symbols/person.svg",label: "ユーザー",w: 60,h: 60,constraint: "on"}

    subgraph "認証機能"
        Register[ユーザー登録をする]
        Login[ログインする]
        Logout[ログアウトする]
    end
    
    User --> Register
    User --> Login
    User --> Logout
```