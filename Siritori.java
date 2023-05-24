import java.util.Scanner;
import java.util.HashSet;
import java.util.Set;

//①理解：しりとり。最後の文字を繋げて遊ぶ
//②アルゴ：入力文字を配列にして、その一番最後の文字と、次の文字列を配列にして一番最初を比較する。
//加えた文字はHashSetに加えていき、containsで既に含まれてないかチェックする

public class Siritori {
  public static void main(String[] args){

    System.out.println("しりとりで遊びましょう。ルールは以下です。");
    System.out.println("① 相手が負けるまで続きます。");
    System.out.println("② 同じ言葉を２回使うと負けです。");
    System.out.println("③ ひらがな・カタカナ区別されますので、注意してください。");
    System.out.println("④ もちろん、語尾に「ん」「ン」がつくと負けです。ただし「ー」がついたら、その一つ前の文字から始まります");
    
    Scanner sc = new Scanner(System.in);

    Set<String> siritori = new HashSet<>();

    String A = sc.nextLine();
    siritori.add(A);

    String[] a = A.split("");
    if(a[A.length()-1].equals("ん") || a[A.length()-1].equals("ン")){
        System.out.println("あなたの負けです");
    }
    
    else{

    for(int i =0; i<2; i++){

        String B = sc.nextLine();
       
        //System.out.println("今、言った数は" + siritori.size() + "個");  //言った数確認
        if(siritori.contains(B)){
            System.out.println("同じ言葉を2回使ったので、あなたの負けです");
            break;
        }

        siritori.add(B);
        String[] b = B.split("");


        if(a[a.length-1].equals(b[0]) && !b[b.length-1].equals("ん") && !b[b.length-1].equals("ン")){
            System.out.println("次に進みましょう");
        }

        else{
            System.out.println("あなたの負けです");
            break;
        }

        a = b;  //AをBに上書き

        if(a[a.length-1].equals("ー")){ //Aの最後がーなら、一つ前の文字に置き換え
            a[a.length-1] = a[a.length-2];
        }

        System.out.println("次は" + a[a.length-1] + "です");

        i -=1;
        }
    }      
    }
  }