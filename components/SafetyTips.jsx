import React from "react";
import { motion } from "framer-motion";

// Lista extensa de dicas de segurança e incentivo
const tipsData = [
  { title: "SOS Rápido", description: "Tenha sempre contatos de emergência salvos e acessíveis." },
  { title: "Delegacias Próximas", description: "Saiba onde ficam as delegacias especializadas e horários de atendimento." },
  { title: "ONGs de Apoio", description: "Conheça organizações que oferecem abrigo e suporte emocional." },
  { title: "Boletim de Ocorrência", description: "Registre ocorrências de forma segura e anônima se necessário." },
  { title: "Provas Digitais", description: "Guarde fotos, áudios ou prints de forma segura." },
  { title: "Medidas Protetivas", description: "Solicite proteção urgente em situações de risco." },
  { title: "Transporte Seguro", description: "Evite rotas isoladas e prefira transporte confiável." },
  { title: "Relacionamento Abusivo", description: "Fique atenta a sinais de controle e manipulação." },
  { title: "Violência Online", description: "Proteja suas redes sociais e dados pessoais." },
  { title: "Autocuidado", description: "Cuide da saúde física e mental diariamente." },
  { title: "Prevenção Noturna", description: "Evite caminhar sozinha em locais escuros ou pouco movimentados." },
  { title: "Segurança em Casa", description: "Tenha portas e janelas seguras e mantenha contatos próximos informados." },
  { title: "Sinais de Abuso Infantil", description: "Fique atenta a mudanças de comportamento em crianças." },
  { title: "Sinais de Abuso Patrimonial", description: "Monitore gastos e acesso financeiro em relacionamentos." },
  { title: "Gravidez e Violência", description: "Mulheres grávidas têm proteção especial, busque ajuda imediatamente." },
  { title: "Apoio Psicológico", description: "Procure psicólogos e grupos de suporte quando sentir necessidade." },
  { title: "Autodefesa", description: "Aprenda técnicas básicas de proteção pessoal." },
  { title: "Planejamento de Saída", description: "Tenha um plano seguro caso precise sair rapidamente de casa." },
  { title: "Comunicação Segura", description: "Use mensagens criptografadas e dispositivos seguros." },
  { title: "Monitoramento do Agressor", description: "Se possível, registre comportamentos suspeitos sem se expor." },
  { title: "Evitar Locais de Risco", description: "Conheça seu bairro e evite áreas de risco." },
  { title: "Contato de Confiança", description: "Tenha pelo menos uma pessoa de confiança informada sobre sua rotina." },
  { title: "Saídas Noturnas", description: "Informe alguém e compartilhe localização em tempo real." },
  { title: "Checklist de Segurança", description: "Faça revisões periódicas de sua segurança pessoal." },
  { title: "Educação Digital", description: "Não compartilhe informações pessoais com desconhecidos online." },
  { title: "Saúde Mental", description: "Pratique meditação, respiração e técnicas de relaxamento." },
  { title: "Rede de Apoio", description: "Participe de grupos de mulheres para apoio mútuo." },
  { title: "Sinais de Agressão Psicológica", description: "Perceba manipulação, chantagem ou isolamento." },
  { title: "Acesso a Direitos", description: "Conheça seus direitos legais e recursos disponíveis." },
  { title: "Emergência Silenciosa", description: "Tenha sinais ou códigos com amigos em caso de perigo." },
  { title: "Documentos Importantes", description: "Mantenha cópias de documentos essenciais em local seguro." },
  { title: "Aplicativos de Segurança", description: "Use apps confiáveis para monitoramento pessoal." },
  { title: "Rede Social Segura", description: "Configure privacidade máxima em redes sociais." },
  { title: "Atendimento Médico", description: "Saiba quais hospitais oferecem suporte especializado." },
  { title: "Apoio Jurídico", description: "Busque assistência legal gratuita se necessário." },
  { title: "Educação de Filhos", description: "Ensine crianças sobre sinais de perigo e proteção." },
  { title: "Controle Financeiro", description: "Mantenha contas pessoais e seguras." },
  { title: "Alertas Locais", description: "Ative notificações de segurança da sua região." },
  { title: "Saídas Planejadas", description: "Evite improvisos em trajetos de risco." },
  { title: "Registro de Incidentes", description: "Documente comportamentos suspeitos com datas e provas." },
  { title: "Rotas Seguras", description: "Planeje trajetos com movimento e iluminação adequados." },
  { title: "Auxílio a Terceiros", description: "Ajude mulheres próximas a se protegerem." },
  { title: "Prevenção Contínua", description: "Revise e melhore suas estratégias de segurança regularmente." },
  { title: "Cuidados com Dispositivos", description: "Mantenha celulares e computadores seguros." },
  { title: "Senhas Seguras", description: "Use senhas fortes e autenticação em dois fatores." },
  { title: "Comunicação de Emergência", description: "Tenha mensagens prontas para contatos de confiança." },
  { title: "Alertas de Notícias", description: "Monitore alertas de violência local." },
  { title: "Prevenção de Assédio", description: "Aprenda a identificar e reagir a assédio." },
  { title: "Respeito e Empoderamento", description: "Participe de programas que fortalecem mulheres." },
  { title: "Rede Profissional", description: "Busque apoio no ambiente de trabalho em caso de risco." },
];

export default function SafetyTips() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Dicas de Segurança e Prevenção</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tipsData.map((tip, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="bg-purple-100/50 backdrop-blur-md rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-1">{tip.title}</h3>
            <p className="text-gray-700 text-sm">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
