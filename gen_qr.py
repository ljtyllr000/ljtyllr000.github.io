#!/usr/bin/env python3
# -*- coding:utf-8 -*-

# @Time    : 2024/09/09 16:42
# @Author  : up
# @FileName: test_qr.py

import qrcode

# 创建二维码
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data('http://60.204.206.1:8999/')
qr.make(fit=True)
# 生成并保存二维码
img = qr.make_image(fill='black', back_color='white')
img.save('website_qr_code.png')
