import Image from 'next/image'

export default function Home() {
  return (
 <div>
<div>
<h2>FINANÇAS</h2>
<h3>Bem-vindo <br />
de volta!</h3>
<p className="p1">Acesse sua conta agora <br /> mesmo</p>
<button>ENTRAR</button>
<p className="p2">Esqueci minha <br /> senha</p>
</div>
<div>
<h2>Crie sua conta</h2>
<p >Preencha seus dados</p>
<input type="text" placeholder='Nome' />
<input type="text" placeholder='Email' />
<input type="password" placeholder='Senha' />
<button>Cadastrar</button>
</div>
 </div>
  )
}
