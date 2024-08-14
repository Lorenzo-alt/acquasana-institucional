import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { nome, telefone, email, cidade, mensagem } = await request.json();
//   const res = await fetch("https://api.resend.com/emails", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.RESEND_API_KEY!}`,
//     },
//     body: JSON.stringify({
//       from: `Acquasana <noreply@resend.dev>`,
//       to: ["acquasana@acquasana.com.br", "acquasanalp@gmail.com"], // acquasana@acquasana.com.br
//       subject: `Mensagem de: ${nome} | Acquasana`,
const htmlMsg =`<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <!--[if mso
      ]><xml
        ><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG /></o:OfficeDocumentSettings></xml
    ><![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&amp;display=swap" rel="stylesheet" type="text/css" />
    <!--<![endif]-->
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: inherit !important;
      }
      #MessageViewBody a {
        color: inherit;
        text-decoration: none;
      }
      p {
        line-height: inherit;
      }
      .desktop_hide,
      .desktop_hide table {
        mso-hide: all;
        display: none;
        max-height: 0;
        overflow: hidden;
      }
      .image_block img + div {
        display: none;
      }
      @media (max-width: 720px) {
        .mobile_hide {
          display: none;
        }
        .row-content {
          width: 100% !important;
        }
        .stack .column {
          width: 100%;
          display: block;
        }
        .mobile_hide {
          min-height: 0;
          max-height: 0;
          max-width: 0;
          overflow: hidden;
          font-size: 0;
        }
        .desktop_hide,
        .desktop_hide table {
          display: table !important;
          max-height: none !important;
        }
      }
    </style>
  </head>
  <body style="background-color: #fff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none">
    <table
      class="nl-container"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
    >
      <tbody>
        <tr>
          <td>
            <table
              class="row row-1"
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #344655; background-size: auto"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      class="row-content stack"
                      align="center"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="mso-table-lspace: 0; mso-table-rspace: 0; background-size: auto; color: #000; width: 700px; margin: 0 auto"
                      width="700"
                    >
                      <tbody>
                        <tr>
                          <td
                            class="column column-1"
                            width="100%"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              font-weight: 400;
                              text-align: left;
                              padding-bottom: 40px;
                              padding-top: 40px;
                              vertical-align: top;
                              border-top: 0;
                              border-right: 0;
                              border-bottom: 0;
                              border-left: 0;
                            "
                          >
                            <table
                              class="text_block block-1"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                            >
                              <tr>
                                <td class="pad" style="padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 30px">
                                  <div style="font-family: sans-serif">
                                    <div
                                      class
                                      style="
                                        font-size: 12px;
                                        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
                                        mso-line-height-alt: 14.399999999999999px;
                                        color: #fff;
                                        line-height: 1.2;
                                      "
                                    >
                                      <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px">
                                        <span style="font-size: 30px"><strong>Você teve um contato pelo site da Acquasana!</strong></span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            <table
                              class="text_block block-2"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="mso-table-lspace: 0; mso-table-rspace: 0; word-break: break-word"
                            >
                              <tr>
                                <td class="pad" style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 10px">
                                  <div style="font-family: Tahoma, Verdana, sans-serif">
                                    <div
                                      class
                                      style="
                                        font-size: 12px;
                                        font-family: Roboto, Tahoma, Verdana, Segoe, sans-serif;
                                        mso-line-height-alt: 18px;
                                        color: #d8ebf8;
                                        line-height: 1.5;
                                      "
                                    >
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px">
                                        <strong><span style="font-size: 16px">Email:&nbsp;</span></strong
                                        ><span style="font-size: 16px">${email}</span><br /><p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px">
                                        <strong><span style="font-size: 16px">Nome:&nbsp;</span></strong
                                        ><span style="font-size: 16px">${nome}</span><br />
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px">
                                        <strong><span style="font-size: 16px">Cidade:&nbsp;</span></strong
                                        ><span style="font-size: 16px">${cidade}</span><br /><p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px">
                                        <strong><span style="font-size: 16px">Telefone:&nbsp;</span></strong
                                        ><span style="font-size: 16px">${telefone}</span><br /><p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 24px">
                                        <strong><span style="font-size: 16px">Mensagem:&nbsp;</span></strong
                                        ><span style="font-size: 16px">${mensagem}</span>
                                      </p>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- End -->
    <div style="background-color: transparent">
      <div
        style="
          margin: 0 auto;
          min-width: 320px;
          max-width: 500px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          background-color: transparent;
        "
        class="block-grid"
      >
        <div style="border-collapse: collapse; display: table; width: 100%; background-color: transparent">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
          <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
          <div class="col num12" style="min-width: 320px; max-width: 500px; display: table-cell; vertical-align: top">
            <div style="background-color: transparent; width: 100% !important">
              <!--[if (!mso)&(!IE)]><!-->
              <div
                style="
                  border-top: 0px solid transparent;
                  border-left: 0px solid transparent;
                  border-bottom: 0px solid transparent;
                  border-right: 0px solid transparent;
                  padding-top: 15px;
                  padding-bottom: 15px;
                  padding-right: 0px;
                  padding-left: 0px;
                "
              >
                <!--<![endif]-->

                <!--[if (!mso)&(!IE)]><!-->
              </div>
              <!--<![endif]-->
            </div>
          </div>
          <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
        </div>
      </div>
    </div>
  </body>
</html>
`;
//     }),
//   });

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.GOOGLE_EMAIL,
  to: process.env.GOOGLE_EMAIL,
  subject: 'SITE | Você Recebeu uma Mensagem!', // Subject line
  html: htmlMsg, // plain text body
};

try {
  await transporter.sendMail(mailOptions);

  return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
} catch (err) {
  return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
}
}

