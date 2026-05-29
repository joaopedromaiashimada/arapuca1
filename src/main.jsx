import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { MapPin, Phone, Clock, Star, Menu, X, Instagram, Facebook, Utensils, ChevronRight } from "lucide-react";
import "./styles.css";

const WA = "5519998991331";
const endereco = "Rua do Porto (R. Do Porto), 1671 - Centro, Piracicaba - SP";
const mapaUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;
const estacionamento = "Av. Alidor Pecorari, 482 - Piracicaba - SP";
const estacionamentoUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(estacionamento)}`;

function WhatsAppIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="waSvg">
      <path fill="currentColor" d="M16.02 3.2C8.98 3.2 3.25 8.82 3.25 15.72c0 2.2.6 4.35 1.74 6.24L3.1 28.8l7.08-1.8a13.05 13.05 0 0 0 5.84 1.38c7.04 0 12.77-5.62 12.77-12.53S23.06 3.2 16.02 3.2Zm0 22.98c-1.8 0-3.55-.47-5.1-1.35l-.37-.21-4.2 1.07 1.12-4.02-.25-.41a10.19 10.19 0 0 1-1.56-5.41c0-5.68 4.65-10.3 10.36-10.3 5.72 0 10.37 4.62 10.37 10.3 0 5.68-4.65 10.33-10.37 10.33Zm5.68-7.72c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.72.15-.2.31-.82 1-.99 1.2-.18.21-.36.23-.67.08-.31-.16-1.3-.47-2.48-1.5-.92-.81-1.54-1.82-1.72-2.13-.18-.31-.02-.48.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.72-1.7-.98-2.32-.26-.62-.52-.53-.72-.54h-.62c-.2 0-.54.08-.83.39-.29.31-1.09 1.05-1.09 2.56s1.12 2.98 1.27 3.18c.16.21 2.2 3.3 5.34 4.63.75.31 1.33.5 1.78.64.75.23 1.43.2 1.97.12.6-.09 1.84-.74 2.1-1.45.26-.72.26-1.33.18-1.45-.08-.13-.29-.21-.6-.36Z" />
    </svg>
  );
}

function zap(texto = "Olá! Gostaria de fazer uma reserva/pedido no Restaurante Arapuca.") {
  const msg = encodeURIComponent(texto);
  return `https://api.whatsapp.com/send/?phone=${WA}&text=${msg}&type=phone_number&app_absent=0`;
}

const cuscuzImg = "/images/cuscuz.jpg";
const cuscuzHeroImg = "/images/fachada-hero.png";
const logoArapuca = "/images/logo-arapuca.png";
const aguaImg = "/images/agua-cardapio.svg";
const pratos = [
  { semfoto:true, cat: "Cuscuz", nome: "Cuscuz de Peixe e Camarão", preco: "P R$ 74,90 | M R$ 84,90 | G R$ 94,90 | Família R$ 117,90", desc: "Tradicional cuscuz da casa, preparado com peixe e camarão.", destaque: true },
  { semfoto:true, cat: "Cuscuz", nome: "Cuscuz de Frango", preco: "P R$ 74,90 | M R$ 84,90 | G R$ 94,90 | Família R$ 117,90", desc: "Versão clássica com frango, bem servida e saborosa.", destaque: true },
  { semfoto:true, cat: "Cuscuz", nome: "Cuscuz Só Camarão", preco: "P R$ 120,90 | M R$ 140,90 | G R$ 160,90 | Família R$ 180,90", desc: "Cuscuz especial feito somente com camarão.", destaque: true },
  { semfoto:true, cat: "Cuscuz", nome: "Cuscuz de Legumes", preco: "P R$ 74,90 | M R$ 84,90 | G R$ 94,90 | Família R$ 117,90", desc: "Opção com legumes, mantendo o sabor tradicional do Arapuca.", },
  { semfoto:true, cat: "Cuscuz", nome: "Cuscuz de Sardinha", preco: "P R$ 74,90 | M R$ 84,90 | G R$ 94,90 | Família R$ 117,90", desc: "Receita tradicional com sardinha.", },
  { semfoto:true, cat: "Cuscuz", nome: "Acréscimo de Palmito", preco: "P R$ 17,00 | M R$ 20,00 | G R$ 22,00 | Família R$ 24,00", desc: "Adicional de palmito nos sabores de cuscuz.", },
  { semfoto:true, cat: "Cuscuz", nome: "Cuscuz Individual de Frango", preco: "Na mesa R$ 30,00 | Viagem R$ 39,00", desc: "Porção individual somente de frango.", },

  { cat: "Peixe no Tambor", nome: "Piapara Assada na Brasa (Por kg)", preco: "R$ 170,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80", destaque: true },
{ cat: "Peixe no Tambor", nome: "Tambaqui Assado na Brasa (Por kg)", preco: "R$ 170,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1559847844-d721426d6edc?auto=format&fit=crop&w=900&q=80" },
{ cat: "Peixe no Tambor", nome: "Posta de Filhote (Por kg)", preco: "R$ 205,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80" },
{ cat: "Peixe no Tambor", nome: "Posta de Pintado (Por kg)", preco: "R$ 205,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&w=900&q=80" },
{ cat: "Peixe no Tambor", nome: "Lombo de Filhote (Por kg)", preco: "R$ 220,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80" },
{ cat: "Peixe no Tambor", nome: "Lombo de Pintado (Por kg)", preco: "R$ 220,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80" },
{ cat: "Peixe no Tambor", nome: "Lombo de Pirarucu (Por kg)", preco: "R$ 220,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?auto=format&fit=crop&w=900&q=80" },
{ cat: "Peixe no Tambor", nome: "Salmão Assado na Brasa (Por kg)", preco: "R$ 240,00", desc: "Acompanha arroz branco, molho tártaro e pirão. Guarnições à vontade.", semfoto: true, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80" },

  { cat: "Peixes", nome: "Pintado à Brasileira com Molho de Camarão", preco: "Inteira R$ 104,90 | Meia R$ 95,90", desc: "Acompanha arroz e pirão.", semfoto:true, img: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80", destaque: true },
  { cat: "Peixes", nome: "Pintado à Milanesa com Molho de Camarão", preco: "Inteira R$ 104,90 | Meia R$ 95,90", desc: "Acompanha arroz e pirão.", semfoto:true, img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80" },
  { cat: "Peixes", nome: "Pintado à Parmegiana", preco: "Inteira R$ 131,90 | Meia R$ 121,90", desc: "Prato especial da casa.", semfoto:true, img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=900&q=80" },
  { cat: "Peixes", nome: "Pintado à Milanesa Acebolado com Alcaparras", preco: "Inteira R$ 104,90 | Meia R$ 94,90", desc: "Acompanha arroz e pirão.", semfoto:true, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80" },
  { cat: "Peixes", nome: "Moqueca de Peixe", preco: "Inteira R$ 111,90 | Meia R$ 101,90", desc: "Moqueca saborosa e bem servida.", semfoto:true, img: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&w=900&q=80" },
  { cat: "Peixes", nome: "Badejo à Milanesa com Molho de Camarão", preco: "Inteira R$ 111,90 | Meia R$ 101,90", desc: "Acompanha arroz e pirão.", semfoto:true, img: "https://images.unsplash.com/photo-1559847844-d721426d6edc?auto=format&fit=crop&w=900&q=80" },
  { cat: "Peixes", nome: "Badejo à Parmegiana", preco: "Inteira R$ 131,90 | Meia R$ 121,90", desc: "Badejo preparado à parmegiana.", semfoto:true, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80" },
  { cat: "Peixes", nome: "Badejo Acebolado com Alcaparras", preco: "Inteira R$ 111,00 | Meia R$ 101,90", desc: "Acompanha arroz e pirão.", semfoto:true, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80" },

  { cat: "Porções", nome: "Merluza", preco: "Inteira R$ 80,90 | Meia R$ 67,90", desc: "Porção de peixe.", semfoto:true, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Badejo", preco: "Inteira R$ 90,90 | Meia R$ 77,90", desc: "Porção de badejo.", semfoto:true, img: "https://images.unsplash.com/photo-1559847844-d721426d6edc?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Porquinho", preco: "Inteira R$ 82,90 | Meia R$ 74,90", desc: "Porção de porquinho.", semfoto:true, img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Pintado", preco: "Inteira R$ 84,90 | Meia R$ 74,90", desc: "Porção de pintado.", semfoto:true, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Costelinha de Tambaqui", preco: "Inteira R$ 82,90 | Meia R$ 69,90", desc: "Porção de costelinha de tambaqui.", semfoto:true, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Camarão à Dorê", preco: "Inteira R$ 101,90 | Meia R$ 91,90", desc: "Camarão crocante à dorê.", semfoto:true, img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Tilápia", preco: "Inteira R$ 79,90 | Meia R$ 67,90", desc: "Porção de tilápia.", semfoto:true, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Atum", preco: "Inteira R$ 81,90 | Meia R$ 72,90", desc: "Porção de atum.", semfoto:true, img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Fritas", preco: "Inteira R$ 50,90 | Meia R$ 44,90", desc: "Porção quente.", semfoto:true, img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Mandioca", preco: "Inteira R$ 50,90 | Meia R$ 44,90", desc: "Porção quente.", semfoto:true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Filé de Frango Acebolado", preco: "Inteira R$ 69,90 | Meia R$ 56,90", desc: "Porção quente.", semfoto:true, img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Torresmo", preco: "Inteira R$ 56,90 | Meia R$ 43,90", desc: "Porção quente.", semfoto:true, img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Filé Mignon Acebolado", preco: "Inteira R$ 101,90 | Meia R$ 91,90", desc: "Porção quente.", semfoto:true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Calabresa Acebolada", preco: "Inteira R$ 57,90 | Meia R$ 44,90", desc: "Porção quente.", semfoto:true, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80" },
  { cat: "Porções", nome: "Filé de Frango à Milanesa/Fritas", preco: "Inteira R$ 75,90 | Meia R$ 62,90", desc: "Porção quente.", semfoto:true, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80" },

  { cat: "Carnes", nome: "Filé Mignon à Arapuca", preco: "Inteira R$ 123,90 | Meia R$ 113,90", desc: "Carne, ovo, fritas e legumes. Acompanha arroz e fritas.", semfoto:true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80", destaque: true },
  { cat: "Carnes", nome: "Filé Mignon à Parmegiana", preco: "Inteira R$ 151,90 | Meia R$ 141,90", desc: "Acompanha arroz e fritas.", semfoto:true, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80" },
  { cat: "Carnes", nome: "Filé Mignon à Cavalo", preco: "Inteira R$ 123,90 | Meia R$ 113,90", desc: "Acompanha arroz e fritas.", semfoto:true, img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80" },
  { cat: "Carnes", nome: "Filé Mignon Americano", preco: "Inteira R$ 123,90 | Meia R$ 113,90", desc: "Ervilha, palmito e legumes. Acompanha arroz e fritas.", semfoto:true, img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80" },
  { cat: "Carnes", nome: "Filé Mignon Acebolado com Alcaparras", preco: "Inteira R$ 123,90 | Meia R$ 113,90", desc: "Acompanha arroz e fritas.", semfoto:true, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80" },

  { cat: "Filé de Frango", nome: "Filé de Frango à Parmegiana", preco: "Inteira R$ 101,90 | Meia R$ 91,90", desc: "Acompanha arroz e fritas.", semfoto:true, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=80" },
  { cat: "Filé de Frango", nome: "Filé de Frango Americano", preco: "Inteira R$ 101,90 | Meia R$ 91,90", desc: "Ervilha e palmito.", semfoto:true, img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80" },
  { cat: "Filé de Frango", nome: "Filé de Frango Acebolado com Alcaparras", preco: "Inteira R$ 101,90 | Meia R$ 91,90", desc: "Acompanha arroz e fritas.", semfoto:true, img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80" },

  { cat: "Risotos", nome: "Risoto de Frango", preco: "Inteira R$ 50,90 | Meia R$ 40,90", desc: "Risoto tradicional de frango.", semfoto:true, img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80" },
  { cat: "Risotos", nome: "Risoto de Camarão", preco: "Inteira R$ 79,90 | Meia R$ 73,90", desc: "Risoto especial de camarão.", semfoto:true, img: "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?auto=format&fit=crop&w=900&q=80" },
  { cat: "Risotos", nome: "Risoto de Legumes", preco: "Inteira R$ 50,90 | Meia R$ 40,90", desc: "Risoto de legumes.", semfoto:true, img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80" },

  { cat: "Massas", nome: "Macarrão Alho e Óleo", preco: "Inteira R$ 50,90 | Meia R$ 43,90", desc: "Massa clássica alho e óleo.", semfoto:true, img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80" },
  { cat: "Massas", nome: "Macarrão ao Sugo", preco: "Inteira R$ 50,90 | Meia R$ 43,90", desc: "Massa ao molho sugo.", semfoto:true, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80" },

  { cat: "Saladas", nome: "Salada Simples", preco: "Inteira R$ 41,90 | Meia R$ 34,90", desc: "Salada da casa.", semfoto:true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
  { cat: "Saladas", nome: "Salada Completa com Palmito", preco: "Inteira R$ 54,90 | Meia R$ 44,90", desc: "Salada completa com palmito.", semfoto:true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
  { cat: "Saladas", nome: "Salada Completa sem Palmito", preco: "Inteira R$ 47,90 | Meia R$ 37,90", desc: "Salada completa sem palmito.", semfoto:true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
  { cat: "Saladas", nome: "Salada de Palmito", preco: "Inteira R$ 64,90 | Meia R$ 54,90", desc: "Salada especial de palmito.", semfoto:true, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },

  { cat: "Guarnições", nome: "Arroz Branco", preco: "R$ 18,00", desc: "Guarnição individual.", semfoto:true, img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80" },
  { cat: "Guarnições", nome: "Arroz à Grega", preco: "R$ 25,00", desc: "Guarnição individual.", semfoto:true, img: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=900&q=80" },
  { cat: "Guarnições", nome: "Pirão", preco: "R$ 18,00", desc: "Guarnição individual.", semfoto:true, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80" },
  { cat: "Guarnições", nome: "Molho Tártaro", preco: "R$ 18,00", desc: "Guarnição individual.", semfoto:true, img: "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?auto=format&fit=crop&w=900&q=80" },
  { cat: "Guarnições", nome: "Molho de Camarão", preco: "R$ 36,00", desc: "Guarnição individual.", semfoto:true, img: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=80" },
  { cat: "Guarnições", nome: "Queijo Ralado", preco: "R$ 28,00", desc: "Guarnição individual.", semfoto:true, img: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=900&q=80" },

  { cat: "Bebidas", nome: "Refrigerante Lata 350 ml", preco: "R$ 10,90", desc: "Pepsi, Pepsi Black, Guaraná, Guaraná Zero, Soda e Sukita.", semfoto:true, img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "H2OH! 500 ml", preco: "R$ 11,90", desc: "Limão ou limoneto.", semfoto:true, img: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Água sem Gás", preco: "R$ 6,00", desc: "Garrafa de água sem gás.", img: aguaImg },
  { cat: "Bebidas", nome: "Água com Gás", preco: "R$ 8,00", desc: "Garrafa de água com gás.", img: aguaImg },
  { cat: "Bebidas", nome: "Copo com gelo e limão ou laranja", preco: "R$ 1,50", desc: "Copo extra para bebida.", semfoto:true, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Sucos", preco: "R$ 12,90", desc: "Laranja, limão, maracujá, caju, acerola, manga, abacaxi, abacaxi com hortelã.", semfoto:true, img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Adicional de mais um sabor no suco", preco: "R$ 3,00", desc: "Adicional para sucos naturais.", semfoto:true, img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Adicional de leite condensado no suco", preco: "R$ 3,00", desc: "Adicional para sucos naturais.", semfoto:true, img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Jarra de Suco Pequena", preco: "R$ 32,90", desc: "Jarra de suco natural.", semfoto:true, img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Jarra de Suco Grande", preco: "R$ 48,90", desc: "Jarra de suco natural.", semfoto:true, img: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Cervejas 600 ml", preco: "Antarctica / Skol / Brahma R$ 18,90 | Brahma Duplo Malte / Budweiser R$ 19,40 | Spaten / Original / Serramalte R$ 19,90 | Stella Artois R$ 20,50", desc: "Cervejas garrafa 600 ml com valores individuais.", semfoto:true, img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Long Necks 330 ml", preco: "Spaten / Budweiser / Bud Zero / Malzbier R$ 11,90 | Stella Artois R$ 11,90 | Corona R$ 12,90", desc: "Long necks 330 ml com valores individuais.", semfoto:true, img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Drinks Prontos Beats", preco: "R$ 12,90", desc: "Drinks prontos Beats 269 ml.", semfoto:true, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Caipirinhas", preco: "Pinga R$ 20,90 | Vodka ou Saquê R$ 24,90 | Gin ou Steinhaeger R$ 30,90", desc: "Caipirinhas com valores por tipo de bebida.", semfoto:true, img: "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?auto=format&fit=crop&w=900&q=80" },
  { cat: "Bebidas", nome: "Vinho da Casa", preco: "R$ 11,00", desc: "Taça de vinho da casa.", semfoto:true, img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80" },
];

const galeria = [
  { type: "image", src: "/images/galeria-ambiente-1.jpg", alt: "Ambiente Restaurante Arapuca" },
  { type: "image", src: "/images/galeria-ambiente-2.jpg", alt: "Ambiente Restaurante Arapuca" },
  { type: "image", src: "/images/galeria-ambiente-3.jpg", alt: "Ambiente Restaurante Arapuca" },
  { type: "image", src: "/images/galeria-ambiente-4.jpg", alt: "Ambiente Restaurante Arapuca" },
  { type: "image", src: "/images/galeria-ambiente-5.jpg", alt: "Ambiente Restaurante Arapuca" },
  { type: "image", src: "/images/galeria-ambiente-6.jpg", alt: "Ambiente Restaurante Arapuca" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-01.jpg", alt: "Galeria Restaurante Arapuca 1" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-02.jpg", alt: "Galeria Restaurante Arapuca 2" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-03.jpg", alt: "Galeria Restaurante Arapuca 3" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-04.jpg", alt: "Galeria Restaurante Arapuca 4" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-05.jpg", alt: "Galeria Restaurante Arapuca 5" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-06.jpg", alt: "Galeria Restaurante Arapuca 6" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-07.jpg", alt: "Galeria Restaurante Arapuca 7" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-08.jpg", alt: "Galeria Restaurante Arapuca 8" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-09.jpg", alt: "Galeria Restaurante Arapuca 9" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-10.jpg", alt: "Galeria Restaurante Arapuca 10" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-11.jpg", alt: "Galeria Restaurante Arapuca 11" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-12.jpg", alt: "Galeria Restaurante Arapuca 12" },
  { type: "image", src: "/images/galeria-novas/galeria-nova-13.jpg", alt: "Galeria Restaurante Arapuca 13" },
  { type: "video", src: "/videos/galeria/galeria-video-01.mp4", alt: "Vídeo Restaurante Arapuca 1" },
  { type: "video", src: "/videos/galeria/galeria-video-02.mp4", alt: "Vídeo Restaurante Arapuca 2" },
  { type: "video", src: "/videos/galeria/galeria-video-03.mp4", alt: "Vídeo Restaurante Arapuca 3" },
  { type: "video", src: "/videos/galeria/galeria-video-04.mp4", alt: "Vídeo Restaurante Arapuca 4" },
  { type: "video", src: "/videos/galeria/galeria-video-05.mp4", alt: "Vídeo Restaurante Arapuca 5" },
  { type: "video", src: "/videos/galeria/galeria-video-06.mp4", alt: "Vídeo Restaurante Arapuca 6" },
  { type: "video", src: "/videos/galeria/galeria-video-07.mp4", alt: "Vídeo Restaurante Arapuca 7" },
  { type: "video", src: "/videos/galeria/galeria-video-08.mp4", alt: "Vídeo Restaurante Arapuca 8" },
  { type: "video", src: "/videos/galeria/galeria-video-09.mp4", alt: "Vídeo Restaurante Arapuca 9" },
  { type: "video", src: "/videos/galeria/galeria-video-10.mp4", alt: "Vídeo Restaurante Arapuca 10" },
  { type: "video", src: "/videos/galeria/galeria-video-11.mp4", alt: "Vídeo Restaurante Arapuca 11" }
];

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = [["home", "Início"], ["cardapio", "Cardápio"], ["historia", "História"], ["galeria", "Galeria"], ["contato", "Contato"]];
  return <header>
    <div className="topbar">
      <span><MapPin size={14} /> {endereco}</span>
      <span><Phone size={14} /> (19) 99899-1331</span>
      <span><Clock size={14} /> Seg–Sex: 11h às 16h | Sáb: 11h às 21h | Dom: 11h às 17h</span>
    </div>
    <nav className="nav">
      <button className="brand" onClick={() => setPage("home")}>
        <img className="brandLogo" src="/images/logo-arapuca.png" alt="Restaurante Arapuca" />
      </button>
      <button className="mobile" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <div className={open ? "links show" : "links"}>
        {links.map(([id, label]) => <button key={id} onClick={() => { setPage(id); setOpen(false); }} className={page === id ? "active" : ""}>{label}</button>)}
        <a className="reserve" href={zap()} target="_blank"><WhatsAppIcon size={18} /> Reservar / Pedir</a>
      </div>
    </nav>
  </header>;
}

function Hero({ setPage }) {
  return <section className="hero heroPremium">
    <div className="heroGlow" />
    <div className="heroInner">
      <div className="heroText">
        <p className="eyebrow heroEyebrow"><span></span>Arapuca — desde 1969<span></span></p>
        <h1><span className="line">Tradição, sabor</span><span className="line">e experiências</span><em>inesquecíveis</em></h1>
        <ul className="heroBullets">
          <li>⭐  O 1° e maior restaurante da Rua do Porto</li>
          <li>⭐  O melhor cuscuz da região</li>
          <li>⭐  Especializado em peixes assados</li>
        </ul>
        <p className="heroCall">Venha conhecer o tamanho dessa tradição!</p>
        <div className="heroBtns">
          <a href={zap()} target="_blank" className="btn primary"><WhatsAppIcon size={19} /> Fazer reserva / pedido</a>
          <button onClick={() => setPage("cardapio")} className="btn ghost">Ver cardápio <Utensils size={17} /></button>
        </div>
      </div>
      <div className="heroPlate heroPhoto" aria-hidden="true"></div>
    </div>
  </section>;
}

function Home({ setPage }) {
  return <>
    <Hero setPage={setPage} />
    <section className="homeShowcase section">
      <div className="showcaseMain">
        <div className="showcaseTitle"><h2>🔥 Mais pedidos do Arapuca</h2><span></span></div>
        <div className="showcaseCards">
          <div className="showCard"><b>Nº 1</b><img src={cuscuzImg} alt="Cuscuz Peixe e Camarão" /><h3>Cuscuz Peixe e Camarão</h3><p>Nosso carro-chefe! O melhor cuscuz da região.</p></div>
          <div className="showCard"><b>Nº 2</b><img src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=900&q=80" alt="Pintado à Parmegiana" /><h3>Pintado à Parmegiana</h3><p>Filé de pintado empanado com molho especial e queijo derretido.</p></div>
          <div className="showCard"><b>Nº 3</b><img src="https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80" alt="Peixe no Tambor" /><h3>Peixe no Tambor</h3><p>Peixe assado na brasa com tempero especial.</p></div>
        </div>
      </div>
      <div className="showcaseAside">
        <div><Star /><strong>Desde 1969</strong><p>Mais de 50 anos de tradição e qualidade.</p></div>
        <div><MapPin /><strong>Rua do Porto</strong><p>O 1° e maior restaurante da Rua do Porto.</p></div>
        <div><Utensils /><strong>Peixes assados</strong><p>Especialistas em peixes assados com sabor único.</p></div>
      </div>
    </section>
    <ConhecaArapuca />
    <section className="section grid2">
      <div>
        <p className="eyebrow green">Nossa história</p>
        <h2>O tamanho da tradição na Rua do Porto</h2>
        <p>O Arapuca é um restaurante tradicional de Piracicaba, conhecido pelo cuscuz generoso, pelos peixes assados e pela experiência familiar que atravessa gerações.</p>
        <div className="highlight"><Star fill="currentColor" /> O 1° e maior restaurante da Rua do Porto, com o melhor cuscuz da região.</div>
        <button className="btn outline" onClick={() => setPage("historia")}>Conhecer história <ChevronRight size={18} /></button>
      </div>
      <div className="photoBox">
        <img src={cuscuzImg} alt="Cuscuz Arapuca" />
      </div>
    </section>
    <MenuPreview setPage={setPage} />
    <InfoCards />
    <HomeMapSection />
    <Reviews />
  </>;
}

function MenuPreview({ setPage }) {
  return <section className="menuBand">
    <div className="section">
      <div className="sectionTitle">
        <div><p className="eyebrow light">Cardápio</p><h2>Especialidades do Arapuca</h2></div>
        <button className="btn lightBtn" onClick={() => setPage("cardapio")}>Ver cardápio completo</button>
      </div>
      <div className="cards">
        {pratos.filter(p => ["Cuscuz", "Peixe no Tambor", "Peixes", "Carnes", "Porções"].includes(p.cat)).slice(0, 6).map((p, i) => <Dish key={i} p={p} />)}
      </div>
    </div>
  </section>;
}


function ConhecaArapuca() {
  const fotos = [
    { src: "/images/conheca-ambiente.jpg", title: "Ambiente familiar" },
    { src: "/images/conheca-entrada.jpg", title: "Entrada tradicional" },
    { src: "/images/conheca-fachada-florida.jpg", title: "Fachada Arapuca" },
    { src: "/images/conheca-rio.jpg", title: "Vista da Rua do Porto" },
    { src: "/images/conheca-prato.jpg", title: "Cuscuz e peixes" },
  ];

  return <section className="homeGalleryBand">
    <div className="section homeGallerySection">
      <div className="showcaseTitle galleryTitle"><h2>📸 Conheça o Arapuca</h2><span></span></div>
      <div className="homeGalleryGrid">
        {fotos.map((foto, i) => <figure key={i} className={i === 0 ? "wide" : ""}>
          <img src={foto.src} alt={foto.title} />
          <figcaption>{foto.title}</figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}

function HomeMapSection() {
  return <section className="section homeContactMap">
    <div className="homeContactPanel">
      <p className="eyebrow green">Contato e localização</p>
      <h2>Faça sua reserva</h2>
      <p>Atendimento rápido pelo WhatsApp para reservas, pedidos e dúvidas.</p>
      <a className="btn primary" href={zap()} target="_blank"><WhatsAppIcon /> Chamar no WhatsApp</a>
      <a className="mapLink" href={mapaUrl} target="_blank"><MapPin /> Abrir localização no Google Maps</a>
      <a className="mapLink parkingLink" href={estacionamentoUrl} target="_blank">🚗 Ver estacionamento</a>
    </div>
    <iframe title="Mapa Restaurante Arapuca" src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}></iframe>
  </section>;
}

function PriceTags({ preco }) {
  return <div className="priceTags">
    {preco.split(" | ").map((item, i) => <span key={i}>{item}</span>)}
  </div>;
}

function Dish({ p, compact = false }) {
  return <div className={p.destaque ? "dish featuredDish" : "dish"}>
    {false && !compact && <img src={p.img} alt={p.nome} />}
    <div className="dishBody">
      <small>{p.destaque ? "⭐ Especialidade da casa" : p.cat}</small>
      <h3>{p.nome}</h3>
      <p>{p.desc}</p>
      <PriceTags preco={p.preco} />
      <a href={zap(`Olá! Tenho interesse no prato: ${p.nome}`)} target="_blank"><WhatsAppIcon size={15} /> Pedir no WhatsApp</a>
    </div>
  </div>;
}

function MenuItem({ p }) {
  return <div className="menuItem menuItemPro">
    {false && <img src={p.img} alt={p.nome} />}
    <div className="menuItemContent">
      <small>{p.cat}</small>
      <h3>{p.nome}</h3>
      <p>{p.desc}</p>
      <PriceTags preco={p.preco} />
    </div>
    <a href={zap(`Olá! Tenho interesse no prato: ${p.nome}`)} target="_blank"><WhatsAppIcon size={15} /> Pedir</a>
  </div>;
}

function InfoCards() {
  return <section className="section infoCards three">
    <div className="info"><WhatsAppIcon size={38} /><h3>Reservas e pedidos</h3><p>Faça sua reserva ou pedido pelo WhatsApp.</p><a href={zap()} target="_blank">(19) 99899-1331</a></div>
    <div className="info"><MapPin /><h3>Localização</h3><p>R. Do Porto, 1671<br />Centro, Piracicaba - SP<br />CEP 13400-840</p><a href={mapaUrl} target="_blank">Ver no mapa</a></div>
    <div className="info"><Clock /><h3>Horários</h3><p>Segunda a sexta: 11h às 15h<br />Sábado: 11h às 17h<br />Domingo: 11h às 17h</p><span>Tradição desde 1969</span></div>
  </section>;
}

function Reviews() {
  const rs = [
    "O cuscuz paulista é maravilhoso, com certeza a especialidade da casa. O peixe estava ótimo também, junto as guarnições. Vale a pena conhecer!",
    "Comida excelente na beira do rio Piracicaba, na rua do Porto, serviço bom e ambiente muito gostoso e diferenciado, vale apenas conhecer.",
    "Restaurante maravilhoso, ótimo atendimento e boa comida. Peixe assado com qualidade, minha família adorou.",
    "Lugar maravilhoso vale muito a pena conhecer."
  ];

  return (
    <section className="section">
      <p className="eyebrow green">Avaliações de clientes</p>

      <div className="reviews">
        <div className="score">
          <b
            style={{
              fontSize: "1.9rem",
              lineHeight: "1.1",
              display: "block",
              marginBottom: "10px",
              fontWeight: "800",
              letterSpacing: "-0.03em"
            }}
          >
            +50 anos
          </b>

          <p
            style={{
              fontSize: "0.98rem",
              lineHeight: "1.45",
              maxWidth: "240px",
              margin: "0 auto"
            }}
          >
            Um dos restaurantes mais tradicionais da Rua do Porto
          </p>
        </div>

        {rs.map((r, i) => (
          <div className="review" key={i}>
            <Stars />
            <p>{r}</p>
            <small>Cliente Google</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

function Cardapio() {
  const cats = ["Cuscuz", "Peixe no Tambor", "Peixes", "Porções", "Carnes", "Filé de Frango", "Risotos", "Massas", "Saladas", "Guarnições", "Bebidas"];
  const [cat, setCat] = useState("Cuscuz");
  const lista = pratos.filter(p => p.cat === cat);
  const destaques = pratos.filter(p => p.destaque).slice(0, 3);

  return <main>
    <PageHero title="Cardápio completo" text="Especialidades do Restaurante Arapuca organizadas por categoria para ficar mais fácil escolher." />
    <section className="section menuPage">
      <div className="menuIntro">
        <div>
          <p className="eyebrow green">Cardápio Arapuca</p>
          <h2>Escolha por categoria</h2>
          <p>Use os botões abaixo para ver cuscuz, peixes no tambor, à la carte, porções, bebidas e acompanhamentos. Em cada prato os valores aparecem separados por tamanho.</p>
        </div>
        <a href={zap("Olá! Gostaria de tirar uma dúvida sobre o cardápio do Arapuca.")} target="_blank"><WhatsAppIcon size={18} /> Tirar dúvida no WhatsApp</a>
      </div>

      <div className="featuredMenu">
        <div className="featuredText">
          <span>🌹 Especialidades</span>
          <h2>Os mais tradicionais da casa</h2>
          <p>O melhor cuscuz da região, peixes assados e pratos servidos com fartura na Rua do Porto.</p>
        </div>
        <div className="featuredList">
          {destaques.map((p, i) => <Dish p={p} compact key={i} />)}
        </div>
      </div>

      <div className="filters stickyFilters">{cats.map(c => <button className={cat === c ? "active" : ""} onClick={() => setCat(c)} key={c}>{c}</button>)}</div>

      <div className="categoryHeader">
        <div>
          <p className="eyebrow green">Categoria selecionada</p>
          <h2>{cat}</h2>
        </div>
        <span>{lista.length} itens</span>
      </div>

      <div className="menuList">
        {lista.map((p, i) => <MenuItem p={p} key={i} />)}
      </div>

      <div className="menuNote">
        <b>Observação:</b> valores e disponibilidade podem mudar. Para confirmar pedido, tamanhos ou adicionais, chame no WhatsApp.
      </div>
    </section>
  </main>;
}

function Historia() {
  return <main>
    <PageHero title="Nossa história" text="Tradição, qualidade e sabor às margens da Rua do Porto desde 1969." />
    <section className="section historySection">
      <div className="historyContent">
        <p className="eyebrow green">Desde 1969</p>
        <h2>A verdadeira história do Restaurante Arapuca</h2>
        <p>A rua era de terra quando, em 1964, surgiu a ideia de reunir amigos, família e boa comida na tradicional Rua do Porto. O projeto nasceu com Hélio Pecorari e Maria Alyade Pecorari, conhecidos em Piracicaba pelo atendimento acolhedor e pela forma carinhosa de receber cada cliente.</p>
        <p>Com o passar dos anos, o espaço se transformou em ponto de encontro para moradores, turistas e famílias que buscavam uma experiência simples, farta e cheia de tradição. A casa se tornou referência pelo famoso cuscuz paulista, pelos peixes assados e pelo sabor que atravessou gerações.</p>
        <p>Hoje, o Restaurante Arapuca mantém viva essa essência: comida de qualidade, ambiente familiar e a história da Rua do Porto presente em cada detalhe.</p>
        <div className="timeline historyTimeline">
          <div><b>1964</b><span>A origem da tradição na Rua do Porto.</span></div>
          <div><b>1969</b><span>Tradição e qualidade passam a marcar a história do Arapuca.</span></div>
          <div><b>Hoje</b><span>Referência em cuscuz paulista, peixes assados e atendimento familiar.</span></div>
        </div>
      </div>
      <div className="historyPhotos" aria-label="Fotos históricas do Restaurante Arapuca">
  <img
    src="/images/historiafotos.png"
    alt="Fotos históricas do Restaurante Arapuca"
  />
</div>
    </section>
  </main>;
}

function Galeria() {
  return <main>
    <PageHero title="Galeria" text="Ambientes, fachada, registros e vídeos que fazem parte da experiência do Restaurante Arapuca." />
    <section className="section galleryPage galleryMixed">
      {galeria.map((item, i) => (
        <figure key={`${item.type}-${i}`} className={item.type === "video" ? "galleryVideo" : ""}>
          {item.type === "video" ? (
            <video
              src={item.src}
              title={item.alt}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          ) : (
            <img src={item.src} alt={item.alt || `Ambiente Restaurante Arapuca ${i + 1}`} />
          )}
        </figure>
      ))}
    </section>
  </main>;
}

function Contato() {
  return <main>
    <PageHero title="Contato e reservas" text="Fale com a equipe, reserve sua mesa ou veja como chegar." />
    <InfoCards />
    <section className="section contactGrid">
      <div className="contactPanel">
        <h2>Faça sua reserva</h2>
        <p>Atendimento rápido pelo WhatsApp para reservas, pedidos e dúvidas.</p>
        <a className="btn primary" href={zap()} target="_blank"><WhatsAppIcon /> Chamar no WhatsApp</a>
        <a className="mapLink" href={mapaUrl} target="_blank"><MapPin /> Abrir localização no Google Maps</a>
        <a className="mapLink parkingLink" href={estacionamentoUrl} target="_blank">🚗 Ver estacionamento</a>
      </div>
      <iframe title="Mapa" src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}></iframe>
    </section>
  </main>;
}

function PageHero({ title, text }) {
  return <section className="pageHero"><p className="eyebrow light">Restaurante Arapuca</p><h1>{title}</h1><p>{text}</p></section>;
}

function Footer({ setPage }) {
  return <footer>
    <div className="footerGrid">
      <div><img className="footerLogo" src="/images/logo-arapuca.png" alt="Restaurante Arapuca" /><p>Tradição, sabor e experiências inesquecíveis na Rua do Porto.</p></div>
      <div><h4>Navegação</h4>{["home", "cardapio", "historia", "galeria", "contato"].map(p => <button key={p} onClick={() => setPage(p)}>{p === "home" ? "Início" : p[0].toUpperCase() + p.slice(1)}</button>)}</div>
      <div><h4>Contato</h4><p>(19) 99899-1331<br />Rua do Porto / R. Do Porto, 1671<br />Piracicaba - SP</p></div>
      <div><h4>Siga-nos</h4><div className="social"><a href="https://www.instagram.com/restaurantearapuca1969/?hl=en" target="_blank" aria-label="Instagram do Arapuca"><Instagram /></a><a href="https://www.facebook.com/RestauranteArapuca/" target="_blank" aria-label="Facebook do Arapuca"><Facebook /></a><a href={zap()} target="_blank" aria-label="WhatsApp do Arapuca"><WhatsAppIcon size={28} /></a></div></div>
    </div>
    <small>© 2026 Arapuca. Desenvolvido para apresentação comercial.</small>
  </footer>;
}

function App() {
  const [page, setPage] = useState("home");
  const content = {
    home: <Home setPage={setPage} />,
    cardapio: <Cardapio />,
    historia: <Historia />,
    galeria: <Galeria />,
    contato: <Contato />,
  }[page];
  return <><Header page={page} setPage={setPage} />{content}<Footer setPage={setPage} /><a className="floatZap" href={zap()} target="_blank"><WhatsAppIcon size={42} /></a></>;
}

createRoot(document.getElementById("root")).render(<App />);
