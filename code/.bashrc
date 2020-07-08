# .bashrc

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi




export PATH=$PATH:~/shapechecker/
export PATH=/homes/gws/beibin/anaconda3/bin:$PATH
export PATH=$PATH:~/spark/bin/

# Show true color
export TERM=xterm-256color


export JAVA_HOME=/usr/lib/jvm/jre-1.8.0


# Show time in every prompt
export PROMPT_COMMAND="echo -n \[\$(date +%H:%M:%S)\]\ "


alias ta="tmux attach"
alias sp="python -m spyder_kernels.console"
alias ns="watch -d -n 3 nvidia-smi" # display nvidia-smi every 3 seconds
alias window="tmux split-window -h; tmux split-window -v; tmux split-window -v; tmux split-window -h"
alias jn="jupyter notebook --no-browser --ip '*'"


alias KILLALL="lsof /dev/nvidia* | awk '{print $2}' | xargs -I {} kill {}" # kill all CUDA process


# Uncomment the following line if you don't like systemctl's auto-paging feature:
# export SYSTEMD_PAGER=

# User specific aliases and functions


# . /homes/gws/beibin/torch/install/bin/torch-activate

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/anaconda/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/anaconda/etc/profile.d/conda.sh" ]; then
        . "/anaconda/etc/profile.d/conda.sh"
    else
        export PATH="/anaconda/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

