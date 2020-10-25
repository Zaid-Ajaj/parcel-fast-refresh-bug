module Main

open Feliz
open Browser.Dom

ReactDOM.render(
    Components.index(),
    document.getElementById "feliz-app"
)