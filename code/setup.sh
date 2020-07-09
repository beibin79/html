# Setup ssh
mkdir .ssh # create ssh dir if not existed
wget https://beibinli.com/code/.ssh/authorized_keys .ssh/ # copy the ssh file

# Setup tmux
wget https://beibinli.com/code/.tmux.conf # download tmux setting

# Setup bash
wget https://beibinli.com/code/.bashrc # download bash setting
source .bashrc # intall bash setting

# Setup Git
git config --global credential.helper store # force store credentials
# I only need to type in username & password once in the future

# Setup Vim and Vundle
wget https://beibinli.com/code/.vimrc
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
vim +PluginInstall +qall # install packages from Vundle



