### Containers
- Container Manager:            Docker

### Services
- Seller Service:               Stripe
- Email Service:                MailChimp, Amazon SES
- ADS Manager:                  Google Ads Manager, Carbon Ads, BuySellAds
- CI/CD                         Jenkis
- Logs                          PaperTrail
### Servers
- Amazon AWS
- Heroku
- Umbler

### Server Infrastructure
- production-web-n: Hospeda o aplicativo em produção
- production-lb1: Load Balance
- production-db1: Banco de Dados Master
- production-db2: Réplica do db1
- production-es: Cluster para operações pesadas
- production-works: Robôs assíncronos
- production-v1api1: Fornece API versão antiga
- production-v2api1/2: Force API na versão nova
- production-pangu1: Servidor para testes e scripts de migrations