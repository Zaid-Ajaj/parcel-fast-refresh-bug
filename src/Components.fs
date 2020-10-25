module Components

open Feliz

[<ReactComponent>]
let counter(initial: int) =
    let (count, setCount) = React.useState initial
    Html.div [
        Html.button [
            prop.style [ style.backgroundColor.greenYellow; style.padding 20; style.margin 10 ]
            prop.onClick (fun _ -> setCount(count + 5))
            prop.text "Increment"
        ]

        Html.button [
            prop.style [ style.backgroundColor.purple; style.color.white; style.padding 20 ]
            prop.onClick (fun _ -> setCount(count - 1))
            prop.text "Decrement"
        ]

        Html.h1 count
    ]

[<ReactComponent>]
let index() = Html.div [
    counter 5
    counter 15
]