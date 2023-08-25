import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");


export async function POST(req: Request, response: Response) {
    const body = await req.json();

    const contentHtml = `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>NUEVO PEDIDO</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                line-height: 1.5;
            }

            .header {
                text-align: left;
                padding-bottom: 20px;
            }
    
            .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
            }
    
            .content {
                padding: 20px 0;
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
            }
    
            .personal-info {
                margin-bottom: 15px;
                color: #555;
            }
    
            .personal-info li {
                margin-bottom: 5px;
                color: #555;
                font-weight: 500;
                font-size: 16px;
            }
            
            .link {
                color: #007bff;
                text-decoration: none;
            }

            .footer {
                margin-bottom: 15px;
                text-align: left;
                padding-top: 20px;
            }

            .footer p {
                list-style: none;
                margin-bottom: 5px;
                color: #777;
                text-align:left;
                font-size: 16px;
            }

        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <h1>CERRO GROUP</h1>
            </div>
            <div class="content">
                <div class="personal-info">
                    <h2>Datos personales:</h2>
                    <ul>
                        <li><strong>Nombre: </strong>${body.formValues.name} ${body.formValues.lastname} </li>
                        <li><strong>Email: </strong><a href="mailto:${body.formValues.mail}" class="link">${body.formValues.mail}</a></li>
                        <li><strong>Teléfono: </strong>${body.formValues.phone}</li>
                        <li><strong>Temas: </strong>${Object.keys(body.radioValues).filter((key) =>
        body.radioValues[key] !== '').map((item, index, array) => {
            return `${body.radioValues[item]}${index < array.length - 1 ? ', ' : ''}`;
        }).join("")}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                ${body.formValues.consultation ?
            `<p><strong>Mensaje: </strong>${body.formValues.consultation}</p>` : ""}
            </div>
        </div>
    </body>
    </html>
    `

    const transporter = nodemailer.createTransport({
        host: `${process.env.NEXT_PUBLIC_EMAIL_SERVICE}`,
        port: 465,
        secure: true,
        auth: {
            user: `${process.env.NEXT_PUBLIC_EMAIL_USERNAME}`,
            pass: `${process.env.NEXT_PUBLIC_EMAIL_PASSWORD}`
        }
    });

    const mailOptions = {
        from: "NODEMAILER",
        to: `${process.env.NEXT_PUBLIC_EMAIL_SENDER}`,
        subject: "Tienes un mensaje de Cerro Motor!",
        html: contentHtml,
    };

    const server = await new Promise((resolve, reject) => {
        transporter.verify(function (error: any, success: any) {
            if (success) {
                resolve(success)
            }
            reject(error)
        })
    })
    if (!server) {
        return NextResponse.json({ message: "ERROR SERVER" }, { status: 500 })
    }

    const success = await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions).then((info: any, err: any) => {
            if (info.response.includes('250')) {
                resolve(true)
            }
            reject(err)
        })
    })
    if (!success) {
        return NextResponse.json({ message: "ERROR SUCCESS" }, { status: 500 })
    }
    return NextResponse.json({ message: "OKEY" }, { status: 200 })
}