interface Node {
    data: {
      name: string;
      age: number;
      email: string;
      gender: string;
    };
    next: Node | null;
  }
  
  class LinkedList {
    private head: Node | null;
  
    constructor() {
      this.head = null;
    }
  
    insert(data: {
      name: string;
      age: number;
      email: string;
      gender: string;
    }): void {
      const newNode: Node = {
        data,
        next: null,
      };
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current: Node = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    print(): void {
      let current: Node | null = this.head;
      while (current) {
        console.log("Name:", current.data.name);
        console.log("Age:", current.data.age);
        console.log("Email:", current.data.email);
        console.log("Gender:", current.data.gender);
        console.log("------------------");
        current = current.next;
      }
    }
  }
  
  const form = document.getElementById("myForm") as HTMLFormElement;
  const linkedList = new LinkedList();
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const ageInput = document.getElementById("age") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const genderSelect = document.getElementById("gender") as HTMLSelectElement;
  
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());
    const email = emailInput.value.trim();
    const gender = genderSelect.value.trim();
  
    linkedList.insert({ name, age, email, gender });
  
    console.log("Datos almacenados en la lista enlazada:");
    linkedList.print();
  
    form.reset();
  });
  
  function resetForm(): void {
    form.reset();
  }