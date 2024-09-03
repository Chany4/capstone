<template>
  <div id="parallax">
    <div class="img1">
      <div class="inner">
        <h1>Let's get in touch</h1>
      </div>
    </div>

    <div class="contactForm">
      <div class="form-card1">
        <div class="form-card2">
          <form
            action="https://formspree.io/f/mgvwqovj"
            method="POST" 
            class="form"
          >
            <p class="form-heading">Get In Touch</p>

            <div class="form-field">
              <input
                type="text"
                required
                placeholder="Name"
                class="input-field"
              />
            </div>

            <div class="form-field">
              <input
                type="email"
                required
                placeholder="Email"
                class="input-field"
              />
            </div>

            <div class="form-field">
              <input
                type="text"
                required
                placeholder="Subject"
                class="input-field"
              />
            </div>

            <div class="form-field">
              <textarea
                required
                placeholder="Message"
                cols="30"
                rows="3"
                class="input-field"
              ></textarea>
            </div>
            <input type="submit" class="sendMessage-btn" />
          </form>
        </div>
      </div>
    </div>

    <div class="img2">
      <div class="newsletter">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          nam vitae inventore dolores officia modi cum, cumque sit nemo
          corrupti, ex maxime quo, explicabo dolorem optio! Iste numquam
          blanditiis ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Inventore vel sapiente perferendis amet voluptates tenetur
          itaque quae, aperiam eos voluptate delectus sint nesciunt ratione,
          libero, impedit asperiores quod maiores ex! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. A repudiandae quo autem? Animi quam
          dolor quaerat quod voluptate nihil sapiente libero delectus,
          voluptates repudiandae consequatur magni! In illo sunt impedit?Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque aut
          autem obcaecati, nemo corporis corrupti sed suscipit voluptas, ratione
          consequatur? Asperiores voluptates optio adipisci quos, provident
          repudiandae mollitia veritatis.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Doloribus nam vitae inventore dolores officia modi
          cum, cumque sit nemo corrupti, ex maxime quo, explicabo dolorem optio!
          Iste numquam blanditiis ipsa. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Inventore vel sapiente perferendis amet voluptates
          tenetur itaque quae, aperiam eos voluptate delectus sint nesciunt
          ratione, libero, impedit asperiores quod maiores ex! Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. A repudiandae quo autem?
          Animi quam dolor quaerat quod voluptate nihil sapiente libero
          delectus, voluptates repudiandae consequatur magni! In illo sunt
          impedit?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          doloremque aut autem obcaecati, nemo corporis corrupti sed suscipit
          voluptas, ratione consequatur? Asperiores voluptates optio adipisci
          quos, provident repudiandae mollitia veritatis.
        </p>
      </div>
    </div>
    <div class="contactForm">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nam
        vitae inventore dolores officia modi cum, cumque sit nemo corrupti, ex
        maxime quo, explicabo dolorem optio! Iste numquam blanditiis ipsa. Lorem
        ipsum dolor sit amet consectetur, adipisicing elit. Inventore vel
        sapiente perferendis amet voluptates tenetur itaque quae, aperiam eos
        voluptate delectus sint nesciunt ratione, libero, impedit asperiores
        quod maiores ex! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. A repudiandae quo autem? Animi quam dolor quaerat quod voluptate
        nihil sapiente libero delectus, voluptates repudiandae consequatur
        magni! In illo sunt impedit?Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Qui doloremque aut autem obcaecati, nemo corporis
        corrupti sed suscipit voluptas, ratione consequatur? Asperiores
        voluptates optio adipisci quos, provident repudiandae mollitia
        veritatis.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-sizing: border-box;
}
h1 {
  font-size: 110px;
  text-align: center;
  text-shadow: 5px 2px 1px black;
  font-weight: bolder;
  color: white;
}
.img1 {
  background: url("https://chany4.github.io/capstone-images/images/contact%20page/Screenshot%202024-09-03%20090401.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
.img2 {
  background: url("https://chany4.github.io/arcane-images/images/Rectangle%2016.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 15%;
}
.inner {
  padding: 15%;
}

.contactForm {
  background-color: rgb(29, 29, 29);
  padding: 15%;
}

/* form */

.form {
  display: flex;
  flex-direction: column;
  align-self: center;
  font-family: inherit;
  gap: 10px;
  padding-inline: 2em;
  padding-bottom: 0.4em;
  background-color: #171717;
  /* //background-color: #0a192f; */
  border-radius: 20px;
}

.form-heading {
  text-align: center;
  margin: 2em;
  color: #64ffda;
  font-size: 1.2em;
  background-color: transparent;
  align-self: center;
}

.form-field {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 10px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.input-field {
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #ccd6f6;
  padding-inline: 1em;
}

.sendMessage-btn {
  cursor: pointer;
  margin-bottom: 3em;
  padding: 1em;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: #64ffda;
  font-weight: bold;
  outline: 1px solid #64ffda;
  transition: all ease-in-out 0.3s;
}

.sendMessage-btn:hover {
  transition: all ease-in-out 0.3s;
  background-color: #64ffda;
  color: #000;
  cursor: pointer;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.form-card1 {
  background-image: linear-gradient(163deg, #64ffda 0%, #64ffda 100%);
  border-radius: 22px;
  transition: all 0.3s;
}

.form-card1:hover {
  box-shadow: 0px 0px 30px 1px rgba(100, 255, 218, 0.3);
}

.form-card2 {
  border-radius: 0;
  transition: all 0.2s;
}

.form-card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}
</style>
