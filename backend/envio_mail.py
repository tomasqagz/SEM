from email.message import EmailMessage
from fileinput import filename
import ssl
import smtplib

#En esta linea va el mail del emisor 
email_emisor = " "

#contraseña del email
email_contrasena = ""

#Mails de los destinatarios(diccionario con la lista de destinatarios)
email_receptor = ""



asunto = ''

cuerpo = """

Aca va el cuerpo del mail

"""


em = EmailMessage()
em['From'] = email_emisor
em['TO'] = email_receptor
em['Subeject'] = asunto
em.set_content(cuerpo)  

"""reader = PdfReader("CV2022.pdf")
number_of_pages = len(reader.pages)
page = reader.pages[0]
text = page.extract_text()
em.add_attachment(reader,filename ="CV20222.pdf", subtype = ) """
    



contexto = ssl.create_default_context()

with smtplib.SMTP_SSL('smtp.gmail.com','465',context=contexto)as smtp:
    smtp.login(email_emisor,email_contrasena)
    smtp.sendmail(email_emisor,email_receptor, em.as_string())


