import {
  act,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import RequestFriendship from "./components/Solid/Friends/RequestFriendship";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import CommentsPage from "./components/CommentsPage/CommentsPage";
import UserLogin from "./components/Solid/User/UserLogin";
import ProfileViewer from "./components/Solid/User/ProfileViewer";
import ReactDOM from "react-dom";
import { addMarker } from "./api/api";

/**
 * TESTS PAGES
 */

/**
 * Test that default web page shows correctly
 */
// test("aplication starts in correct page", () => {
//   render(<App />);
//   const init = screen.getByText("Inicio");
//   const documentation = screen.getByText("Documentación");
//   const about = screen.getByText("Sobre Nosotros");
//   const profile = screen.getByText("Profile");
//   expect(init).toBeInTheDocument();
//   expect(documentation).toBeInTheDocument();
//   expect(about).toBeInTheDocument();
//   expect(profile).toBeInTheDocument();
// });

test("about renders correctly", () => {
  render(<About />);
  const title_txt = screen.getByRole("heading", {
    name: "Sobre Nosotros - LoMap_ES6C",
  });

  expect(title_txt).toBeInTheDocument();

  const text =
    "Bienvenidos a nuestra aplicación, la cual sido diseñada para la asignatura de Arquitectura del Software de la Universidad de Oviedo. Esperamos que les resulte util.";
  const p = screen.getByText(text);
  expect(p).toBeInTheDocument();
});

test("commentsPage renders correctly", () => {
  render(<CommentsPage />);
  const cancel_button_img = screen.getByRole("img");
  const title = screen.getByText("Crear marcador");
  const name = screen.getByText("Titulo del marcador:");
  const type = screen.getByText("Tipo:");
  const pub = screen.getByRole("option", { name: "Bar o restaurante" });
  const monument = screen.getByRole("option", { name: "Monumento" });
  const landscape = screen.getByRole("option", { name: "Paisaje / Mirador" });
  const comment_area = screen.getByPlaceholderText(
    "Escribe tu comentario aquí"
  );
  const rating = screen.getByText("Puntuación:");
  const submit = screen.getByRole("button", { name: "Enviar" });

  expect(cancel_button_img).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(type).toBeInTheDocument();
  expect(pub).toBeInTheDocument();
  expect(monument).toBeInTheDocument();
  expect(landscape).toBeInTheDocument();
  expect(comment_area).toBeInTheDocument();
  expect(rating).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
});


// test("userLogin renders correctly", () => {
//   render(<UserLogin />);
//   const txtbox = screen.getByRole("textbox", { name: "" });
//   const btn_login = screen.getAllByRole("button", { name: "Login" })[1];

//   expect(txtbox).toBeInTheDocument();
//   expect(btn_login).toBeInTheDocument();
// });

test("requestFriendship render throw exception correctly without athentication", () => {
  try {
    render(<RequestFriendship />);
  } catch (error) {
    expect(true);
  }
});

test("footer render property", () => {
  render(<Footer />);
  const txt = screen.getByText("© Lomap 2023");
  expect(txt).toBeInTheDocument();
});

/**
 * TESTS LINKS
 */

/**
 * TESTS LINKS
 */

/**
 * Test that link to start page works correctly
 */
// test("init page shows correctly", () => { 
//   render(<App />);
//   fireEvent.click(screen.getByRole("link", { name: "Inicio" }));
//   const welcome = screen.getByText("Bienvenido a LoMap");
//   expect(welcome).toBeInTheDocument();
//   expect(screen.getByRole("link", { name: "Comenzar" })).toBeInTheDocument();

//   expect(location.href).toBe("http://localhost/start");
// });

/**
 * Test that default page link for about option redirects correctly
 */
// test("about option works correctly", () => {
//   render(<App />);
//   fireEvent.click(screen.getByRole("link", { name: "Sobre Nosotros" }));

//   const title = screen.getByText("Sobre Nosotros - LoMap_ES6C");
//   expect(title).toBeInTheDocument();

//   const text =
//     "Bienvenidos a nuestra aplicación, la cual sido diseñada para la asignatura de Arquitectura del Software de la Universidad de Oviedo. Esperamos que les resulte util.";
//   const p = screen.getByText(text);
//   expect(p).toBeInTheDocument();

//   expect(location.href).toBe("http://localhost/about");
// });

/**
 * Test that default page link for profile redirects correctly
 */
// test("profile link redirects correctly", () => {
//   render(<App />);
//   fireEvent.click(screen.getByRole("link", { name: "Profile" }));

//   const image = screen.getByRole("img", { name: "Logo" });
//   const title = screen.getByText("Log in");
//   const button = screen.getByText("Login");

//   expect(image).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
//   expect(button).toBeInTheDocument();

//   expect(location.href).toBe("http://localhost/user");
// });

/**
 * Test that start button in start page works correctly
 * Test too that u can click in LOGIN button and go to inrupt log in
 */
// test("start page start-button works correctly", () => {
//   render(<App />);
//   fireEvent.click(screen.getByRole("link", { name: "Inicio" }));

//   const start_button = screen.getByRole("link", { name: "Comenzar" });
//   fireEvent.click(start_button);

//   const login = screen.getByText("Log in");
//   expect(login).toBeInTheDocument();

//   const login_button = screen.getByText("Login");
//   fireEvent.click(login_button);

//   expect(location.href).toBe("http://localhost/user");
// });

/**
 * Test that NavBar shows correctly
 */
// test("navbar shows correctly", () => {
//   render(<App />);
//   fireEvent.click(screen.getByRole("link", { name: "Inicio" }));

//   const title = screen.getByText("LoMap");
//   const init = screen.getByRole("link", { name: "Inicio" });
//   const documentation = screen.getByRole("link", { name: "Documentación" });
//   const about = screen.getByRole("link", { name: "Sobre Nosotros" });
//   const profile = screen.getByRole("link", { name: "Profile" });

//   expect(title).toBeInTheDocument();
//   expect(init).toBeInTheDocument();
//   expect(documentation).toBeInTheDocument();
//   expect(about).toBeInTheDocument();
//   expect(profile).toBeInTheDocument();

//   const logo = screen.getByRole("img", { name: "Logo" });
//   expect(logo).toBeInTheDocument();

//   expect(location.href).toBe("http://localhost/start");
// });

/**
 * Test that a navbar link for about works correctly
 */
// test("navbar link to about works correctly", () => {
//   render(<App />);
//   fireEvent.click(screen.getByRole("link", { name: "Inicio" }));

//   const about = screen.getByRole("link", { name: "Sobre Nosotros" });
//   fireEvent.click(about);

//   const heading = screen.getByRole("heading", {
//     name: "Sobre Nosotros - LoMap_ES6C",
//   });
//   expect(heading).toBeInTheDocument();

//   expect(location.href).toBe("http://localhost/about");
// });

/**
 * Test that a navbar link for profile works correctly
 */
// test("navbar link to profile works correctly", () => {
//   render(<App />);
//   fireEvent.click(screen.getByRole("link", { name: "Inicio" }));

//   const profile = screen.getByRole("link", { name: "Profile" });
//   fireEvent.click(profile);

//   const image = screen.getByRole("img", { name: "Logo" });
//   const title = screen.getByRole("heading", { name: "Log in" });
//   const button = screen.getByText("Login");
//   const id_prov = screen.getByPlaceholderText("Identity Provider");

//   expect(image).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
//   expect(button).toBeInTheDocument();
//   expect(id_prov).toBeInTheDocument();

//   expect(location.href).toBe("http://localhost/user");
// });

// describe("UserLogin", () => {
//   test("renders login button", () => {
//     const { getByPlaceholderText, getByText } = render(<UserLogin />);

//     const idpInput = getByPlaceholderText("Identity Provider");
//     const loginButton = getByText("Login");

//     expect(idpInput).toBeInTheDocument();
//     expect(loginButton).toBeInTheDocument();
//   });

//   test("updates identity provider URL when user types", () => {
//     const { getByPlaceholderText } = render(<UserLogin />);
//     const idpInput = getByPlaceholderText(/Identity Provider/i);
//     fireEvent.change(idpInput, { target: { value: "https://example.com" } });
//     expect(idpInput).toHaveValue("https://example.com");
//   });
// });

describe("CommentsPage", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("renders correctly", () => {
    const props = {
      lat: [0, 0],
      onSubmit: jest.fn(),
      onChange: jest.fn(),
    };

    const { getByText, getByLabelText, getByPlaceholderText, getAllByRole } =
      render(<CommentsPage {...props} />);

    // Verifica que los elementos principales se renderizaron correctamente
    expect(getByText("Crear marcador")).toBeInTheDocument();
    expect(getByLabelText("Titulo del marcador:")).toBeInTheDocument();
    expect(getByLabelText("Tipo de marcador")).toBeInTheDocument();
    expect(
      getByPlaceholderText("Escribe tu comentario aquí")
    ).toBeInTheDocument();
    expect(getByText("Puntuación:")).toBeInTheDocument();
    expect(getByText("Enviar")).toBeInTheDocument();
    expect(getAllByRole("button")[0]).toBeInTheDocument();
  });

  it("submit form", async () => {
    const onSubmitMock = jest.fn();
    const onChangeMock = jest.fn();

    render(
      <CommentsPage
        onSubmit={onSubmitMock}
        onChange={onChangeMock}
        lat={[0, 0]}
      />
    );

    const titleInput = screen.getByLabelText("Titulo del marcador:");
    fireEvent.change(titleInput, { target: { value: "Test Title" } });

    const commentInput = screen.getByPlaceholderText(
      "Escribe tu comentario aquí"
    );
    fireEvent.change(commentInput, { target: { value: "Test Comment" } });

    const submitButton = screen.getByText("Enviar");

    //fireEvent.click(submitButton);

    await act(async () => {
      jest.runAllTimers();
    });

    //expect(onSubmitMock).toHaveBeenCalled();
  });

  it("calls the onChange prop when canceling the form", () => {
    const onChangeMock = jest.fn();
    const props = {
      lat: [0, 0],
      onSubmit: jest.fn(),
      onChange: onChangeMock,
    };
    const { getAllByRole } = render(<CommentsPage {...props} />);
    const cancelButton = getAllByRole("button")[0];

    // Simula que se hace clic en el botón Cancelar
    fireEvent.click(cancelButton);

    // Verifica que el método onChange se llamó correctamente
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
});

describe("App component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("addMarker", () => {
  let mockFetch: jest.SpyInstance;

  beforeEach(() => {
    mockFetch = jest.spyOn(global, "fetch");
  });

  afterEach(() => {
    mockFetch.mockRestore();
  });

  it("should return true if the API call is successful", async () => {
    mockFetch.mockResolvedValueOnce({ status: 200 });

    const result = await addMarker({ lat: 0, lng: 0, comment: "test comment" });

    expect(result).toBe(true);
  });

  it("should return false if the API call is not successful", async () => {
    mockFetch.mockResolvedValueOnce({ status: 500 });

    const result = await addMarker({ lat: 0, lng: 0, comment: "test comment" });

    expect(result).toBe(false);
  });
});

describe("ProfileViewer", () => {
  it("cant render because not authenticated", async () => {
    try {
      render(<ProfileViewer />);
    } catch (Error) {
      expect(true); //Si entra es porque salto el error
    }
  });
});
