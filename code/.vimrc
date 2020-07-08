" My gist page for this configuration file is at:
" https://gist.github.com/BeibinLi/1407e6507a185410b909


" setup vimrc encoding to accept special characters. (useful for "eol")
:scriptencoding utf-8
:set encoding=utf-8"


" ================ Begin of Vundle Config ========================
" Setup Command: 
" git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim

set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')


"" ================ My Plugins ========================
Plugin 'pangloss/vim-javascript' " JS synatx candy
Plugin 'nathanaelkane/vim-indent-guides' " JS indentation
Plugin 'scrooloose/nerdtree' "File management   :NERDtree
Plugin 'vim-syntastic/syntastic' "syntax check


let g:syntastic_python_checkers = ['flake8']
"let g:syntastic_python_checkers = ['pylint']


set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 1

"let g:syntastic_check_on_open = 1
"let g:syntastic_check_on_wq = 1


"ignore style check in flake8
let g:syntastic_python_flake8_args='--ignore=E501,E225,E101,E111,E112,E113,E114,E115,E116,E121,E122,E123,E124,E125,E126,E127,E128,E129,E131,E133,E201,E202,E203,E211,E221,E222,E223,E224,E225,E226,E227,E228,E231,E241,E242,E251,E261,E262,E265,E266,E271,E272,E273,E274,E301,E302,E303,E304,E401,E402,E501,E502,E701,E702,E703,E704,E711,E712,E713,E714,E721,E731,E901,E902,W191,W291,W292,W293,W391,W503,W601,W602,W603,W604'

"let g:syntastic_cpp_compiler = 'g++'
"let g:syntastic_cpp_compiler_options = ' -std=c++11 -stdlib=libc++'


Plugin 'vim-airline/vim-airline' " A display candy
Plugin 'vim-airline/vim-airline-themes'
let g:airline_theme='light'

" let Vundle manage Vundle, required
"
Plugin 'gmarik/Vundle.vim'
Plugin 'tpope/vim-rails'
Plugin 'toyamarinyon/vim-swift'
Plugin 'BeibinLi/vim-sce-syntax' " Presentation Language

" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
" plugin from http://vim-scripts.org/vim/scripts.html
Plugin 'L9'
" Git plugin not hosted on GitHub
Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
" Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" Avoid a name conflict with L9
" Plugin 'user/L9', {'name': 'newL9'}



Plugin 'ivanov/vim-ipython' 
" Vim for iPython

Plugin 'christoomey/vim-tmux-navigator'


set omnifunc=syntaxcomplete#Complete "Vim build-in omni auto completion for words


" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line





" Configuration file for vim
set modelines=0 " CVE-2007-2438

" Normally we uset vim-extensions. If you want true vi-compatibility
" remove change the following statements
set nocompatible " Uset Vim defaults instead of 100% vi compatibility

" se autochdir " automatically change dir to current file when open vim

" Don't write backup file if vim is being called by "crontab -e"
au BufWrite /private/tmp/crontab.* set nowritebackup
" Don't write backup file if vim is being called by "chpass"
au BufWrite /private/etc/pw.* set nowritebackup
"" ================ End of Vundle ========================



""##########################################################################



filetype plugin on " in order to uset netrw

set hidden "use hidden functions for :argdo and :bufdo



"" ================ Syntax and Color ========================
syntax on
:colorscheme  elflord "Color Scheme (default in Sublime)from https://github.com/sickill/vim-monokai
" :colorscheme xcodelike


"" ================ Tab and Space ========================
" The following two lines will show tab and newline characters
set listchars=tab:~\ ,eol:¬,

set list

""the following 3 lines are all related to the appearance of TAB as 4 spaces.
set tabstop=4 "set the appearance of tab as 4 spaces                       
set softtabstop=4 "set the back/delete key as delete 4 spaces
set shiftwidth=4 "set the appearance of  autoindent, cindent as 4 spaces
set backspace=2 " more powerful backspacing
set expandtab "use tab as space
"set noexpandtab "use tab as tab


"" ================ Cursor ========================
set cursorline
highlight CursorLine guibg=#303030


set ruler
set nosplitright " So, we will split on the left
set colorcolumn=100 "set a vertical line at position 100. 
"
"
"" ================ Scrolling ========================
set scrolloff=8         "Start scrolling when we're 8 lines away from margins
set sidescrolloff=15
set sidescroll=1"

"
"" ================ Searching ========================
set hlsearch "hightlight searching
set incsearch "move window to place of matching words
set ignorecase "ignore caset when searching
set smartcase " ... unless we type a capital

"" ================ Font ========================
" set guifont=Menlo\ Regular:h12
" set guifont=Monospace:h20
" "set guifont=Monaco:h14
set guifont=Consolas:h12 "Usable in Windows 10. Adjust the size for different computers.

"" ================ Ctrl-J to break one line ========================
:nnoremap <NL> i<CR><ESC>

"" ================ F5 to Run Python/Perl/LaTeX ========================
"" you can type ":set filetype?" to see current file type
au FileType python map <F5> <esc>:w\|!python %<CR><esc>
au FileType perl map <F5> <esc>:w\|!perl %<CR><esc>
au FileType tex map <F5> <esc>:w\|!pdflatex%<CR><esc>
au FileType cpp map <F5> <esc>:w\|!make%<CR><esc>
au FileType sml map <F5> <esc>:w\|!sml%<CR><esc>
au FileType markdown map <F5> <esc>:w\|!pandoc % -s -o %:r.html<CR><esc>
au FileType markdown map <F6> <esc>:w\|!pandoc % -s -o %:r.pdf<CR><esc>


au FileType python map <F3> <esc>gg\|:e /tmp/temp.py\|:bd /tmp/*.py\|:set number\|:set scrollbind\|:w\|let @a=system("python ShapeChecker.py -f " . expand('%:p') . " -c true" )<CR>\|:vs /tmp/temp.py<CR>\|:set scrollbind\|:set number<CR>
au FileType python map <F4> <esc>gg\|:e /tmp/temp.py\|:bd /tmp/*.py\|:set number\|:set scrollbind\|:w\|let @a=system("python ShapeChecker.py -f " . expand('%:p') )<CR>\|:vs /tmp/temp.py<CR>\|:set scrollbind\|:set number\|:vertical resize 30<CR>





" Press F2 to Open vimrc configuration file
map <F2> :e ~/.vimrc<CR>

" setting for bash
" autocmd bufnewfile,bufread *.sh set filetype=bs "set up sh to bash file type
au FileType sh nnoremap <buffer> <F5> :exec '!bash %'<cr><esc>

"================= Setting for Markdown and LaTeX ================= 
autocmd bufnewfile,bufread *.md,*.rmd,*.txt set filetype=markdown " md extension is markdown language, not modula-2 code."" R markdown also uses markdown syntax

" Line wrap for text files, and spell check
au BufRead,BufNewFile *.txt,*.tex,*.md,*.rmd set wrap linebreak nolist textwidth=0 wrapmargin=0 spell

au FileType markdown set colorcolumn=0 "do not show the vertical line for MD file
au FileType latex set colorcolumn=0 "do not show the vertical line for LaTex
au FileType tex set colorcolumn=0 "do not show the vertical line for LaTex

""=========== tab complete in command mode =============
set wildmenu
set wildmode=full " Note: Control-D to show all possible auto-complete commands


""=========== :find to include all folders recursively =============
set path+=** "Note: uset **, we can only search by beginning of filename or dir name. 
" If we uset *, it can be any places. ** usage is more sophisticate. Check :h file-searching


""=========== Multi Language Support (Don't add if you want to uset English only)=============
set encoding=utf-8
set termencoding=utf-8
set fileencoding=utf-8

if has("gui_running")
	set guifont=NSimSun:h12:cGB2312
endif

" gVim menu encoding chcange
source $VIMRUNTIME/delmenu.vim
source $VIMRUNTIME/menu.vim

" use unix=like line ending.
set ff=unix


" Don't add the following lines, unless you want to uset Chineset (message encoding change)
" language messages zh_CN.utf-8
" set fileencodings=ucs-bom,utf-8,chinese,cp936


""=========== Other Notes =============
" For setup default working directory location, visit 
" http://stackoverflow.com/questions/1180955/vim-change-start-up-directory
"

""=========== File Jumping ============
" for "gf" command
set suffixesadd+=.py,.cpp,.h

" Set For Search Path
" . means current folder
" empty string means working directory
" ** means all subfolders
set path=.,,,**


""=========== Insert Toggle ============
" Press F4 for switching paste mode (with/without auto indentation)
" Useful for Terminal. Not very helpful under gVim or macVim.
" set pastetoggle=<f4>




"============== Auto Load File if it is modified in some other editors ====
set autoread

