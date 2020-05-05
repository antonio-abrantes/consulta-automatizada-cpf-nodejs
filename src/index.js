/**
 * Fonte: https://www.youtube.com/user/pedropachecoa/videos
 * Site alvo: https://www.situacao-cadastral.com/
 * Objetivo: Tirar print do resultado da consulta
 * Site gerador de CPF: https://www.4devs.com.br/gerador_de_cpf
 */

const puppeteer = require('puppeteer');
let cpfConsultado = "233.149.030-90";

const consultaCpf = async(cpf)=>{
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.situacao-cadastral.com/');
  await page.waitFor('input[name="doc"]');

  await page.type('input[name="doc"]', cpf, {delay: 185});
  await page.keyboard.press('Enter');
  await page.waitFor('span[class="dados situacao"]');
  await page.screenshot({ path: `consultaCPF-${cpf}.png` });

  await browser.close();

};

consultaCpf(cpfConsultado);