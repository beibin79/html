# Setup ssh
mkdir .ssh # create ssh dir if not existed
wget https://beibinli.com/code/.ssh/authorized_keys .ssh/ # copy the ssh file

# Setup tmux
wget https://beibinli.com/code/.tmux.conf

# Setup bash
wget https://beibinli.com/code/.bashrc
source .bashrc

# Setup Vim and Vundle
wget https://beibinli.com/code/.vimrc
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
vim +PluginInstall +qall # install packages from Vundle


