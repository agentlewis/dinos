TODO

```
adduser dinosaur sudo
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
nvm install 8
```

## users

https://security.stackexchange.com/questions/143442/what-are-ssh-keygen-best-practices

```
ssh-keygen -t ed25519 -a 100
```

## vim

maybe

https://github.com/Shougo/unite.vim
https://github.com/benekastah/neomake

## git

hub: https://github.com/ahdinosaur-os/git-formula/blob/master/git/hub.sls

## nvm

## rvm

## desktop (kde + i3)

https://i3wm.org/docs/userguide.html

questions

- wifi
- stats
  - cpu
  - mem
  - disk
  - net
  - power
- workspaces
- keyboard layouts
  - https://www.reddit.com/r/i3wm/comments/4bi861/how_can_i_change_my_keyboard_layout/d19jc69/
- default apps
- launcher
- keyboard shortcuts (when you forget)

steps

- input devices
  - keyboard
    - layouts
      - add colemak with name `col`
    - advanced
      - [x] "Caps Lock key behavior" = "Make Caps Lock an additonal ESC"
  - mouse
    - general
      - [x] reverse scroll direction
  - touchpad
    - scrolling
      - [x] reverse scrolling
- power management
  - on ac power
    - disable dim screen
    - disable off screen
  - on battery
    - change dim screen to after 15 minutes
    - change off screen to after 20 minutes
    - suspend after 30 minutes
- shortcuts
  - global shortcuts
    - run command
      - run command: alt+space / meta+s
    - activity switching
      - set Activities... to None
- desktop behavior
  - screen locking
    - activation
      - [ ] lock screen automatically
  - activities
    - switching
      - disable walk through activities and reverse

f.lux: https://justgetflux.com/linux.html

- lat: -41.29
  long: 174.78

## web

set default browser to be firefox

- google-chrome
  - key: https://www.google.com/linuxrepositories/
  - download from https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    - automatically adds apt source
  - ad blocker
  - lastpass
  - http everywhere
  - redux devtools
  - react devtools
- firefox
  - ad blocker
  - lastpass
  - http everywhere
- how to set DuckDuckGo as default search engine
  - https://duck.co/help/desktop/chrome
  - https://duck.co/help/desktop/firefox

firefox vimfx

```
vimfx.set('mode.normal.scroll_left', 'n')
vimfx.set('mode.normal.scroll_down', 'e')
vimfx.set('mode.normal.scroll_up', 'i')
vimfx.set('mode.normal.scroll_right', 'o')

// scroll left: n
// scroll down: e
// scroll up: i
// scroll right: o
// previous tab: N
// next tab: O

// focus location bar: h
// focus search bar: H
// paste and go: v
// paste and go in new tab: V
// copy current URL: C
// go back in history: z
// go forward in history: Z
// follow link in new foreground dab: at
// follow link in new window: aw
// follow link in a new private window: ap
// focus / select element: A
// open context menu for element: ac
// click browser element: ab
// place caret at element: ad
```

chrome vimium: Options -> Advanced Options -> Custom Key mappings.

```
map  n scrollLeft
map  e scrollDown
map  i scrollUp
map  o scrollRight
map C copyCurrentUrl
map a enterVisualMode
map s enterInsertMode
map h Vomnibar.activate
map H Vomnibar.activateInNewTab
map z goBack
map Z goForward
```
