### Python, Version 3.2.
# 此版本暂时无法添加 附件 与 图片

######### 我是分割线，只用改这以下就好###############
# Credentials of umich Email
fromaddr = 'libe@umich.edu'   # address of the email
username = 'libe@umich.edu'   # should only be "username" if using @gmail.com
password = 'baby you know it 10086'

# store the recipents' information here.
# ("email address", "last name")
people = {("recipent1@gmail.com","Mr. Li"),
          ("recipent2@qq.com","Professor Li")}


# make the Email's Title
title = 'This is the Title of the email'

# make the Email's Text
# 注意：这个文件里不要有 Dear Mr. 这样的抬头，也不要有图片
# Use Microsoft Word to write the email, and Save As html
# the file always ends in .htm or .html
html_name = 'email.htm'


# 暂时无法加 attachment 略过这里
attachment_name = "email.txt"


# set up the serve. Do NOT modify if using gmail or umich mail
serve_setup = 'smtp.gmail.com:587'
######### 我是分割线，只用改这以上就好###############




import smtplib  
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage














######### 请不要修改下面的代码！ ###############
######### 除非你能看懂它们作用！ ###############

# function to read html file
def read_html(html_name):
    f = open(html_name, 'r')
    rst = ''
    while 1:
        line = f.readline()
        if not line:
            break; 
        else:
            rst = rst + line
    f.close
    print("File has been read in", html_name)
    return rst



def get_msg(add, name):

    # make msg
    msg = MIMEMultipart('alternative')
    msg['Subject'] = title
    msg['From'] = fromaddr
    msg['To'] = add
    # The text of msg

    s = """\
    <html>
      <head></head>
      <body>
        <p>Dear
    """
    s = s + name
    s = s + """\
        </p>
     </body>
    </html>
    """
    s = s + html

    part2 = MIMEText(s, 'html')

    msg.attach(part2)
    return msg

# Global Variables
html = read_html(html_name)

# main
def main():
    # Login to the Account
    server = smtplib.SMTP(serve_setup)  
    server.starttls()  
    server.login(username,password)
    print("Email Account logged in!")
    
    # get/send msg
    for p in people:
        mail = p[0]
        name = p[1]
        msg = get_msg(mail, name)
        server.send_message(msg)
        print("-Email send to",name,"with address:",mail)

    # q.e.d.
    server.quit() 
    print('ALL Emails have been sent!')


main()
